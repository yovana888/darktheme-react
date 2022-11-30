import React from 'react'
import { AvatarStyled } from './styled'

interface Props {
    url: string;
}

export default function Avatar({ url="assets/img/avatar_default.jpg" }: Props) {
  return (
    <AvatarStyled src={url}/>
  )
}