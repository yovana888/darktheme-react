import React from 'react'
import { TextStyled } from './styled'

interface Props {
    text: string;
    type?: "primary" | "secondary" | "label" 
}

export default function Text({ text, type = "primary" }: Props) {
  return (
    <TextStyled className={type}>{text}</TextStyled>
  )
}