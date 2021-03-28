import { useContext } from "react"
import { ImageContext } from "../../Context/ImageContext"
import "./TextInput.css"

function TextInput({ text }) {
  const { queryState } = useContext(ImageContext)
  const [query, setQuery] = queryState

  return (
    <input
      type="text"
      placeholder={text}
      className="textInput"
      onChange={(e) => {
        setQuery(e.target.value)
      }}
    ></input>
  )
}

export default TextInput
