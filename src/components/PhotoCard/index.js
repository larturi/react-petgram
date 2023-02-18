import React from 'react'
import { useLocalStorage, useNearScreen } from '../../hooks'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id, increment: !liked }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
      show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Imagen' />
            </ImgWrapper>
          </a>

          <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
        </>
      )
    }

    </Article>
  )
}
