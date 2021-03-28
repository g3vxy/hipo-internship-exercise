import { useContext } from "react"
import constants from "../../constants"
import { ImageContext } from "../../Context/ImageContext"
import "./Button.css"

function Button({ text }) {
  const { queryState, imageState, collectionState } = useContext(ImageContext)
  const [query, setQuery] = queryState
  const [images, setImages] = imageState
  const [collection, setCollection] = collectionState

  return (
    <button
      className="button"
      onClick={async () => {
        fetch(constants.url + `&count=9&query=${query}&collection=${query}`)
          .then((response) => response.json())
          .then((result) => {
            setImages(Object.values(result))
          })
      }}
    >
      {text}
    </button>
  )
}

export default Button
