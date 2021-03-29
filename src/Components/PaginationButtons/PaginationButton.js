import { useContext } from "react"
import { ImageContext } from "../../Context/ImageContext"
import "./PaginationButton.css"

function PaginationButton({ text }) {
  const { pageState, loadingState } = useContext(ImageContext)
  const [page, setPage] = pageState
  const [isLoading, setIsLoading] = loadingState

  return (
    <button
      className={`paginationButton ${
        page === 1
          ? text !== "Next"
            ? "disabled"
            : ""
          : "" /* I know, this is so scuffed. */
      }`}
      onClick={() => {
        if (text === "Next") {
          setPage(page + 1)
          setIsLoading(!isLoading)
        } else {
          if (page === 1) {
          } else {
            setPage(page - 1)
            setIsLoading(!isLoading)
          }
        }
      }}
    >
      {text}
    </button>
  )
}

export default PaginationButton
