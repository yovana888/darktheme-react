
import { CardStyled } from './styled'

interface Props {
    heightImage?:string;
    minWidth?:string;
    maxWidth?:string;
    dataCard:IData
}

export interface IData{
  urlAvatar: string;
  title:string;
  subTitle:string;
  totalViews:string;
  published_time:string;
  urlImagePreview:string;
  duration:string;
}

export function Card({  heightImage='161px',minWidth='255px', maxWidth='320px', dataCard }: Props) {
  return (
    <CardStyled style={{minWidth:minWidth, maxWidth:maxWidth}}>
      {dataCard.title}
    </CardStyled>
  )
}