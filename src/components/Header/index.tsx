import React from 'react'
import IProps from './types/IProps'

export const Header = ({ text }: IProps) => {
  return <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>{text}</h1>
}
