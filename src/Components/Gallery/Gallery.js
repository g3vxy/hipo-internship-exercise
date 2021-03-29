import { useContext, useEffect, useState } from "react"
import Lottie from "react-lottie"
import Loading from "../../Assets/Loading.json"
import NothingFound from "../../Assets/NothingFound.json"
import "./Gallery.css"
import { ImageContext } from "../../Context/ImageContext"
import constants from "../../Utils/constants"
import { readFromCache, writeToCache } from "../../Utils/caching"

function Gallery() {
  const {
    imageState,
    queryState,
    collectionState,
    pageState,
    loadingState,
  } = useContext(ImageContext)
  const [images, setImages] = imageState
  const [query, setQuery] = queryState
  const [collection, setCollection] = collectionState
  const [page, setPage] = pageState
  const [isLoading, setIsLoading] = loadingState

  useEffect(() => {
    let url =
      constants.base_url +
      `&per_page=${constants.imagesPerPage}&query=${query}&collections=${collection}&page=${page}`

    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          writeToCache(url, result.results)
          setImages(Object.values(result.results))
          setIsLoading(!isLoading)
        })
    }
    if (readFromCache(url) !== null) {
      setImages(Object.values(readFromCache(url)))
      setIsLoading(!isLoading)
    } else {
      fetchData()
    }
    // eslint-disable-next-line
  }, [page])

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const nothingFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: NothingFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  if (isLoading) {
    return (
      <div className="loading">
        <Lottie options={loadingOptions} height={400} width={400}></Lottie>
      </div>
    )
  } else {
    if (images.length === 0) {
      return (
        <div className="errorContainer">
          <Lottie
            options={nothingFoundOptions}
            height={400}
            width={400}
          ></Lottie>
          <div className="error">We couldn't find any image.</div>
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
                  onClick={() => {
                    window.open(value.links.html)
                  }}
                  className="galleryImage"
                ></img>
              )
            } catch {
              return (
                <div className="errorContainer">
                  <Lottie
                    options={nothingFoundOptions}
                    height={400}
                    width={400}
                  ></Lottie>
                  <div className="error">{images[0][0]}</div>
                </div>
              )
            }
          })}
        </div>
      )
    }
  }
}

export default Gallery
