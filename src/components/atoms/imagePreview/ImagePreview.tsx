import React from 'react'
import { ImagePreviewStyled } from './styled'

interface Props {
    url: string;
    heightImage:string; //pixeles
}

export default function ImagePreview({ url, heightImage }: Props) {
  return (
    <ImagePreviewStyled src={url} height={heightImage} />
    
  )
}