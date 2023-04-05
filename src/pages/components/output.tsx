enum WeekDay {
  'monday' = 0,
  'tuesday' = 1,
  'wednesday' = 2,
  'thursday' = 3,
  'friday' = 4,
  'saturday' = 5,
  'sunday' = 6,
}

export interface Output {
  day?: number
  breakfast: string
  snack1: string
  lunch: string
  snack2: string
  dinner: string
}

export interface OutputProps {
  loading?: boolean
  output?: Output[]
}
export function Output(props: OutputProps) {
  if (props.loading) {
    return <div>Loading...</div>
  }
  if (props.output) {
    return (
      <div>
        <p>{"Sure, here's a 7-day Diet Plan for you:"}</p>
        <br />
        {props.output.map((o, index) => (
          <div key={WeekDay[index]} className="mb-12">
            <p className="mb-2 font-bold">Day {WeekDay[index]}</p>
            <p>Breakfast</p>
            <p>{o.breakfast}</p>
            <br />
            <p>Snack 1</p>
            <p>{o.snack1}</p>
            <br />
            <p>Lunch</p>
            <p>{o.lunch}</p>
            <br />
            <p>Snack 2</p>
            <p>{o.snack2}</p>
            <br />
            <p>Dinner</p>
            <p>{o.dinner}</p>
          </div>
        ))}
      </div>
    )
  }
  return <div>Output</div>
}
