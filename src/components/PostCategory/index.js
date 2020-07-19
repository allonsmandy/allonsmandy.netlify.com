import React from 'react'

import * as S from './styles'
import getThemeColor from '../../utils/getThemeColor'

const Post = ({
  slug,
  date,
  timeToRead,
  title,
  description
}) => {
  return (
    <S.PostLink to={slug} cover direction="right" bg={getThemeColor()}>
      <S.PostWrapper>
        <S.PostInfo>
          <S.PostDate>
            {date} {timeToRead && ` • ${timeToRead} min de leitura`}
          </S.PostDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostInfo>
      </S.PostWrapper>
    </S.PostLink>
  )
}

export default Post