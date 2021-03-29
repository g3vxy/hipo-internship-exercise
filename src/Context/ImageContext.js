import { createContext, useState } from "react"

export const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState("Istanbul")
  const [collection, setCollection] = useState("")
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ImageContext.Provider
      value={{
        imageState: [images, setImages],
        queryState: [query, setQuery],
        collectionState: [collection, setCollection],
        pageState: [page, setPage],
        loadingState: [isLoading, setIsLoading],
      }}
    >
      {children}
    </ImageContext.Provider>
  )
}
