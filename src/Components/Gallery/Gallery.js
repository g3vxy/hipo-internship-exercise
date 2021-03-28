import { useContext, useEffect, useState } from "react"
import "./Gallery.css"
import { ImageContext } from "../../Context/ImageContext"
import secret from "../../secret"
import constants from "../../constants"

function Gallery() {
  const { imageState, queryState } = useContext(ImageContext)
  const [images, setImages] = imageState
  const [query, setQuery] = queryState

  useEffect(() => {
    const fetchData = async () => {
      fetch(constants.url + `&count=9&query=${query}&collections=${query}`)
        .then((response) => response.json())
        .then((result) => {
          setImages(Object.values(result))
        })
    }
    fetchData()
  }, [])

  if (images.length === 0) {
    return (
      <div className="loading">
        <h1>Please wait!</h1>
      </div>
    )
  } else {
    return (
      <div className="gallery">
        {images.map((value) => {
          try {
            return (
              <img
                key={value.id}
                src={value.urls.small}
                alt={value.alt_description}
                className="galleryImage"
              ></img>
            )
          } catch {
            return <div className="error">Can't found anything.</div>
          }
        })}
      </div>
    )
  }
}

export default Gallery
