import { useMemo, useState } from 'react'
import ArcanaChart from './ArcanaChart'
import Story from './Story'
import { arcanaCounts, dateRange } from './arcana'
import './App.css'

const todayISO = new Date().toISOString().slice(0, 10)

// Fixed, non-editable range: start of WWI to the end of WWII.
const WAR_START = '1914-07-28'
const WAR_END = '1945-09-02'
const warData = arcanaCounts(dateRange(WAR_START, WAR_END))

function App() {
  const [startDate, setStartDate] = useState('1997-01-01')
  const [endDate, setEndDate] = useState(todayISO)
  const [range, setRange] = useState<{ start: string; end: string } | null>({
    start: '1997-01-01',
    end: todayISO,
  })

  const invalid = !startDate || !endDate || startDate > endDate

  const data = useMemo(() => {
    if (!range) return []
    return arcanaCounts(dateRange(range.start, range.end))
  }, [range])

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (invalid) return
    setRange({ start: startDate, end: endDate })
  }

  return (
    <>
      <div className="sky" aria-hidden="true" />
      <div className="wrapper">
        <Story />

        <section className="chart-section">
          <form className="controls" onSubmit={handleSubmit}>
            <label>
              Desde
              <input
                type="date"
                value={startDate}
                max={endDate || undefined}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label>
              Hasta
              <input
                type="date"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
            <button type="submit" disabled={invalid}>
              Calcular
            </button>
          </form>
          {invalid && (
            <p className="hint">
              La fecha de inicio debe ser anterior o igual a la de fin.
            </p>
          )}

          {range && (
            <>
              <p className="caption">
                Distribución de arcanos entre <code>{range.start}</code> y{' '}
                <code>{range.end}</code>.
              </p>
              <ArcanaChart data={data} />
            </>
          )}
        </section>

        <section className="chart-section">
          <h2 className="title"> ☠ No hubo Muertes entre guerras ☠ </h2>
          <p className="caption">
            Desde el comienzo de la Primera Guerra Mundial <code>28-07-1914</code> , hasta el término de la
            Segunda Guerra Mundial 
            <code>02-09-1945</code> no hubo fecha que diera lugar al arcano de La
            Muerte. Irónico..
          </p>
          <ArcanaChart data={warData} />
        </section>
      </div>
    </>
  )
}

export default App
