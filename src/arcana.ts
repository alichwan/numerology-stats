// Core numerology logic, ported from exploration.ipynb.

/** Spanish names of the 22 Major Arcana (Marseille numbering). El Loco = 22. */
export const ARCANA_NAMES: Record<number, string> = {
  1: "El Mago",
  2: "La Sacerdotisa",
  3: "La Emperatriz",
  4: "El Emperador",
  5: "El Sumo Sacerdote",
  6: "Los Enamorados",
  7: "El Carro",
  8: "La Justicia",
  9: "El Ermitaño",
  10: "La Rueda de la Fortuna",
  11: "La Fuerza",
  12: "El Colgado",
  13: "La Muerte",
  14: "La Templanza",
  15: "El Diablo",
  16: "La Torre",
  17: "La Estrella",
  18: "La Luna",
  19: "El Sol",
  20: "El Juicio",
  21: "El Mundo",
  22: "El Loco",
}

/** All 22 arcana numbers, 1..22. */
export const ALL_ARCANA: number[] = Array.from({ length: 22 }, (_, i) => i + 1)

function sumDigits(value: string | number): number {
  return String(value)
    .split("")
    .filter((c) => c >= "0" && c <= "9")
    .reduce((acc, c) => acc + Number(c), 0)
}

/**
 * Given a date string (any format containing the digits, e.g. "dd-mm-yyyy"),
 * return the personal arcana number from 1 to 22.
 *
 * Sum every digit of the date. If the result is already <= 22 it is the arcana.
 * Otherwise reduce once more by summing its digits (max first sum is 72 -> 9,
 * so a single extra reduction is always enough).
 */
export function dateToArcana(dateStr: string): number {
  const firstSum = sumDigits(dateStr)
  if (firstSum <= 22) return firstSum
  return sumDigits(firstSum)
}

/** Zero-padded "dd-mm-yyyy" for a Date. */
function formatDMY(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const yyyy = String(d.getFullYear()).padStart(4, "0")
  return `${dd}-${mm}-${yyyy}`
}

/**
 * Inclusive list of "dd-mm-yyyy" strings between two "yyyy-mm-dd" dates
 * (the format produced by <input type="date">).
 */
export function dateRange(startISO: string, endISO: string): string[] {
  const start = new Date(`${startISO}T00:00:00`)
  const end = new Date(`${endISO}T00:00:00`)
  const days = Math.floor((end.getTime() - start.getTime()) / 86_400_000)
  const out: string[] = []
  for (let i = 0; i <= days; i++) {
    const d = new Date(start)
    d.setDate(d.getDate() + i)
    out.push(formatDMY(d))
  }
  return out
}

export interface ArcanaCount {
  arcana: number
  name: string
  count: number
}

/** Count how many times each arcana (1..22) appears across the given dates. */
export function arcanaCounts(dates: string[]): ArcanaCount[] {
  const counts = new Map<number, number>(ALL_ARCANA.map((n) => [n, 0]))
  for (const date of dates) {
    const a = dateToArcana(date)
    counts.set(a, (counts.get(a) ?? 0) + 1)
  }
  return ALL_ARCANA.map((arcana) => ({
    arcana,
    name: ARCANA_NAMES[arcana],
    count: counts.get(arcana) ?? 0,
  }))
}
