import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Input, PersonDetails } from '@/pages/components/input'
import { DayMeals, Output } from '@/pages/components/output'

const fetchMeals = async (details: PersonDetails): Promise<DayMeals[]> => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const raw = JSON.stringify({
    ...details,
    target_weight: details.targetWeight,
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  }

  const request = await fetch(
    'https://stingray-app-irslx.ondigitalocean.app/form',
    requestOptions,
  )
  const response = await request.json()

  return response.meals as DayMeals[]
}

export default function Home() {
  const [output, setOutput] = useState<DayMeals[]>([])
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Head>
        <title>Miniweight</title>
        <meta name="description" content="Miniweight" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <Input
              onSubmit={async details => {
                try {
                  setLoading(true)
                  const meals = await fetchMeals(details)
                  setOutput(meals)
                } catch (e) {
                } finally {
                  setLoading(false)
                }
              }}
            />
            <div className="pl-8">
              <Output output={output} loading={loading} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
