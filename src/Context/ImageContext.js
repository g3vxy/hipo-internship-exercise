import { createContext, useEffect, useState } from "react"

export const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState("Istanbul")
  const [collection, setCollection] = useState("")

  return (
    <ImageContext.Provider
      value={{
        imageState: [images, setImages],
        queryState: [query, setQuery],
        collectionState: [collection, setCollection],
      }}
    >
      {children}
    </ImageContext.Provider>
  )
}
