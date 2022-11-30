import React from 'react'
import { ButtonStyled } from './styled'

interface Props {
    text: string;
    size?: "md" | "xs" | "lg";
    color?: "primary" | "secondary" | "green" | "red" | "white";
    circle?:boolean;
    disabled?: boolean;
    onClick?: any;
    icon?: "like" | "dislike" | "funny" | "heart";
    positionIcon?: "left" | "right" | "center";
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    style?: React.CSSProperties | undefined
}

export default function Button({ text, size = "md", color = "primary", type, circle, disabled, onClick, icon, positionIcon, className, style }: Props) {
  return (
    <ButtonStyled className={`${className} ${size} ${color}`} onClick={onClick} type={type}>{text}</ButtonStyled>
  )
}
