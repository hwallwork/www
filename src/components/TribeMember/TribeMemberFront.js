import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import css from 'styled-jsx/css'

import H from '../Heading'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'

const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    flex-grow: 1;
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`

const TribeMemberFront = ({ image, name, skills, onClick }) => (
  <figure className="tribe-figure" onClick={onClick}>
    <div className="image-container">
      {image ? (
        <Img
          className={imageStyles.className}
          fluid={image}
          alt={`${name}'s profile`}
          objectFit="cover"
        />
      ) : (
        <img
          src="https://placeimg.com/700/1000/animals"
          className="fallback-image"
          alt={`${name}'s fallback profile`}
        />
      )}
    </div>

    <VerticalSpacing size={2} />

    <figcaption className="name-skills">
      <Text weight={700} size="medium">
        <H>{name}</H>
      </Text>

      <VerticalSpacing size={1} />

      <Text lineHeight={1.2}>{skills.join(' | ')}</Text>
    </figcaption>

    {imageStyles.styles}

    <style jsx>{`
      .tribe-figure {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      .image-container {
        position: relative;
        height: 100%;
        border-bottom-right-radius: 50px;
        overflow: hidden;
      }

      .name-skills {
        flex-shrink: 0;
      }

      .fallback-image {
        flex-grow: 1;
        overflow: hidden;
        display: block;
      }
    `}</style>
  </figure>
)

export default TribeMemberFront
