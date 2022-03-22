import { BaseSyntheticEvent } from 'react'

export interface IQuestion {
  question: string,
  options: string[],
  answer: string,
  id: string,
  onChange: ({ target }: BaseSyntheticEvent) => void,
  value: string,
  active: boolean
}

//Well, even I don't use this, I prefer let it here
export interface IAnswer {
  q1: string,
  q2: string,
  q3: string,
  q4: string,
}
