import React from 'react'
import { IQuestion } from './types/Quiz'

export const Radio = ({ question, options, onChange, value, id, active }: IQuestion) => {
  console.log(active);

  if (active === false) return null

  return <fieldset style={{ padding: "2rem", marginBottom: "1rem", border: "2px solid rgb(255, 236, 230, 0.1)" }}>
    <legend style={{ fontWeight: "bold" }}>{question}</legend>
    {options.map(option =>
      <label key={option} style={{ marginBottom: "1rem", fontFamily: "monospace", fontSize: "0.9rem" }}>
        <input type="radio" id={id} checked={value === option} value={option} onChange={onChange} />
        {option}
      </label>)}
  </fieldset>
}
