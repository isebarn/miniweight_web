enum WeekDay {
  'lundi' = 0,
  'mardi' = 1,
  'mecredi' = 2,
  'jeudi' = 3,
  'vendredi' = 4,
  'samedi' = 5,
  'dimanche' = 6,
}

export interface DayMeals {
  day?: number
  breakfast: string
  snack1: string
  lunch: string
  snack2: string
  dinner: string
}

export interface OutputProps {
  loading?: boolean
  output?: DayMeals[]
}
export default function Output(props: OutputProps) {
  if (props.loading) {
    return <div>Chargement...</div>
  }
  if (props.output?.length) {
    return (
      <div>
        <p>{'Bien sûr, voici un plan de régime de 7 jours pour vous:'}</p>
        <br />
        {props.output.map((o, index) => (
          <div key={WeekDay[index]} className="mb-12">
            <p className="mb-2 font-bold capitalize">{WeekDay[index]}</p>
            <p>Petit-déjeuner</p>
            <p>{o.breakfast}</p>
            <br />
            <p>Collation 1</p>
            <p>{o.snack1}</p>
            <br />
            <p>Déjeuner</p>
            <p>{o.lunch}</p>
            <br />
            <p>Collation 2</p>
            <p>{o.snack2}</p>
            <br />
            <p>Dîner</p>
            <p>{o.dinner}</p>
          </div>
        ))}
      </div>
    )
  }
  return <div></div>
}
