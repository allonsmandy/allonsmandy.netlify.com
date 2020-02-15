import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styles"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/about"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        activeClassName="active"
      >
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             title
//             description
//             position
//             author
//           }
//         }
//       }
//     `}
//     render={({
//       site: {
//         siteMetadata: { author, position, description },
//       },
//     }) => (
//       <div className="Profile-wrapper">
//         <h1>{author}</h1>
//         <h2>{position}</h2>
//         <p>{description}</p>
//       </div>
//     )}
//   />
// )

export default Profile
