import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={element}>
      {
      show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Imagen' />
            </ImgWrapper>
          </Link>

          <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
        </>
      )
    }

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`The props ${propName} must be defined`)
    }

    if (propValue < 0) {
      return new Error(`The props ${propName} must be greater than zero`)
    }
  }
}
