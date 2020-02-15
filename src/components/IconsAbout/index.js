import React from "react"

import infos from "./content"
import * as S from "./styles"

import Icons from "./Icons"

const IconsAbout = () => (
  <S.IconsAboutWrapper>
    {infos.map((info, index) => {
      const Icon = Icons[info.icon]

      return (
        <S.IconsAboutCard key={index}>
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
          <S.IconsAboutTitle>{info.name}</S.IconsAboutTitle>
          <S.IconsAboutDescription>{info.description}</S.IconsAboutDescription>
        </S.IconsAboutCard>
      )
    })}
  </S.IconsAboutWrapper>
)

export default IconsAbout
