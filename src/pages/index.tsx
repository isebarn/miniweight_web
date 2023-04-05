import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Input } from '@/pages/components/input'
import { Output } from '@/pages/components/output'

const sampleOutput: Output[] = [
  {
    day: 1,
    breakfast: 'eggs',
    snack1: 'eggs',
    lunch: 'eggs',
    snack2: 'eggs',
    dinner: 'eggs',
  },
  {
    day: 2,
    breakfast: 'steak',
    snack1: 'steak',
    lunch: 'steak',
    snack2: 'steak',
    dinner: 'steak',
  },
  {
    day: 3,
    breakfast: 'protein bar',
    snack1: 'protein bar',
    lunch: 'protein bar',
    snack2: 'protein bar',
    dinner: 'protein bar',
  },
]

export default function Home() {
  const [output, setOutput] = useState(sampleOutput)
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
              onSubmit={details => {
                // TODO make request to API here and call `setOutput` with result
              }}
            />
            <div className="pl-8">
              <Output output={output} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
