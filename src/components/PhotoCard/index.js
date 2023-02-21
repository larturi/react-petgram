import React from 'react'
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
