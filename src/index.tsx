import React from 'react'
import * as S from './styles'

interface Props {
  color: string
}

export const BouncingLoader: React.FC<Props> = ({ color }) => (
  <S.Container>
    <S.Ball color={color} />
    <S.Ball color={color} margin />
    <S.Ball color={color} />
  </S.Container>
)
