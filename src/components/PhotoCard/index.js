import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button, ImgWrapper, Img, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  const key = `like-${id}`

  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      return false
    }
  })

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Article ref={element}>
      {
      show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Imagen' />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>
        </>
      )
    }

    </Article>
  )
}
