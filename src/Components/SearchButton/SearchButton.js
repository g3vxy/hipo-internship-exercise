import { useContext } from "react"
import { readFromCache, writeToCache } from "../../Utils/caching"
import constants from "../../Utils/constants"
import { ImageContext } from "../../Context/ImageContext"
import "./SearchButton.css"

function SearchButton({ text }) {
  const {
    queryState,
    imageState,
    collectionState,
    pageState,
    loadingState,
  } = useContext(ImageContext)
  const [query, setQuery] = queryState
  const [images, setImages] = imageState
  const [collection, setCollection] = collectionState
  const [page, setPage] = pageState
  const [isLoading, setIsLoading] = loadingState

  return (
    <button
      className="searchButton"
      onClick={async () => {
        let url =
          constants.base_url +
          `&per_page=${constants.imagesPerPage}&query=${query}&collections=${collection}&page=${page}`

        const fetchData = async () => {
          fetch(url)
            .then((response) => response.json())
            .then((result) => {
              writeToCache(url, result.results)
              setImages(Object.values(result.results))
            })
        }
        if (readFromCache(url) !== null) {
          setImages(Object.values(readFromCache(url)))
        } else {
          fetchData()
        }
      }}
    >
      {text}
    </button>
  )
}

export default SearchButton
