import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Input } from '@/pages/components/input'
import { Output } from '@/pages/components/output'

const sampleOutput: Output[] = [
  {
    breakfast: 'Oatmeal with banana',
    dinner: 'Grilled salmon and vegetables',
    lunch: 'Turkey wrap',
    snack1: 'Yogurt',
    snack2: 'Carrots and hummus',
  },
  {
    breakfast: 'Scrambled eggs and spinach',
    dinner: 'Stir-fry vegetables and tofu',
    lunch: 'Tuna salad wrap',
    snack1: 'Celery and peanut butter',
    snack2: 'Apple slices with almond butter',
  },
  {
    breakfast: 'Whole wheat toast with nut butter',
    dinner: 'Baked chicken and quinoa',
    lunch: 'Vegetable soup',
    snack1: 'Berries and Greek yogurt',
    snack2: 'Cottage cheese and crackers',
  },
  {
    breakfast: 'Smoothie with almond milk, banana, and spinach',
    dinner: 'Chicken stir-fry with brown rice',
    lunch: 'Grilled cheese sandwich with tomato soup',
    snack1: 'Trail mix',
    snack2: 'Hummus and pita chips',
  },
  {
    breakfast: 'Overnight oats with chia seeds',
    dinner: 'Baked salmon and roasted vegetables',
    lunch: 'Veggie burger wrap with avocado',
    snack1: 'Cucumber slices and hummus',
    snack2: 'Apple slices with peanut butter',
  },
  {
    breakfast: 'Eggs with mushrooms and peppers',
    dinner: 'Grilled shrimp with quinoa',
    lunch: 'Turkey sandwich with lettuce and tomatoes ',
    snack1: 'Yogurt Parfait with granola and berries ',
    snack2: 'Carrot sticks and hummus ',
  },
  {
    breakfast: 'Banana Pancakes ',
    dinner: 'Stuffed peppers',
    lunch: 'Salad with grilled chicken ',
    snack1: 'Nuts and dried fruit ',
    snack2: 'Celery sticks and peanut butter ',
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
