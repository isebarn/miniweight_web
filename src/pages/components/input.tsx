import { useState } from 'react'

export enum Gender {
  m = 'm',
  f = 'f',
}

export interface PersonDetails {
  gender: Gender
  age: number
  height: number
  weight: number
  targetWeight: number
}

export interface InputProps {
  onSubmit?: (details: PersonDetails) => void
}
export default function Input(props: InputProps = {}) {
  const [gender, setGender] = useState(Gender.m)
  const [age, setAge] = useState(20)
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(78)
  const [targetWeight, setTargetWeight] = useState<number>(75)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (props.onSubmit) {
          props.onSubmit({
            gender,
            age,
            height,
            weight,
            targetWeight,
          })
        }
      }}
    >
      <div className="grid cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Genre *</span>
          <select
            className="form-select mt-1 block w-full"
            onChange={e => setGender(e.target.value as Gender)}
            value={gender}
            required={true}
          >
            <option value={Gender.m}>Homme</option>
            <option value={Gender.f}>Femme</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Âge *</span>
          <input
            type="number"
            className="form-input mt-1 block w-full"
            value={age}
            onChange={e => setAge(+e.target.value)}
            required={true}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Hauteur *</span>
          {/*<div className="grid grid-cols-2 grid-rows-1">*/}
          <input
            type="number"
            className="form-input mt-1 block w-full"
            placeholder="height (cm)"
            value={height}
            onChange={e => setHeight(+e.target.value)}
            required={true}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Lester *</span>
          <input
            type="number"
            className="form-input mt-1 block w-full"
            value={weight}
            placeholder="weight (kg)"
            onChange={e => setWeight(+e.target.value)}
            required={true}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Poids ciblé *</span>
          <input
            type="number"
            className="form-input mt-1 block w-full"
            value={targetWeight}
            onChange={e => setTargetWeight(+e.target.value)}
            required={true}
          />
        </label>
        <input className="font-sans bg-blue-800 text-white p-2" type="submit" />
      </div>
    </form>
  )
}
