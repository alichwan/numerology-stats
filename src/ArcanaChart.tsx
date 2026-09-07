import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { ArcanaCount } from './arcana'

interface Props {
  data: ArcanaCount[]
}

/** Countplot of arcana 1..22 for a set of dates. */
function ArcanaChart({ data }: Props) {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 24, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="arcana" interval={0} tickLine={false}>
            <Label value="Arcano" position="bottom" offset={8} />
          </XAxis>
          <YAxis allowDecimals={false} width={60} />
          <Tooltip
            formatter={(value) => [value as number, 'Veces']}
            labelFormatter={(arcana) => {
              const row = data.find((d) => d.arcana === arcana)
              return `Arcano ${arcana}${row ? ` · ${row.name}` : ''}`
            }}
          />
          <Bar dataKey="count" fill="var(--accent)" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ArcanaChart
