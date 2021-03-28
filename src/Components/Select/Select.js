import { useContext, useEffect, useState } from "react"
import "./Select.css"
import Arrow from "../../Assets/Arrow.svg"
import { ImageContext } from "../../Context/ImageContext"

function Select({ options }) {
  const [toggle, setToggle] = useState(false)
  const { collectionState } = useContext(ImageContext)
  const [collection, setCollection] = collectionState

  useEffect(() => {
    console.log(collection)
  }, [collection])

  return (
    <div className={`select ${toggle ? "toggled" : ""}`}>
      <div
        className={`placeholder ${toggle ? "toggled" : ""} ${
          collection !== "" ? "selected" : ""
        }`}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <p>{`${collection === "" ? "Collections" : collection}`}</p>
        <img
          src={Arrow}
          alt="Arrow"
          onClick={(e) => {
            e.stopPropagation()
            setCollection("")
          }}
        ></img>
      </div>
      <div className={`shadow ${toggle ? "toggled" : ""}`}></div>
      <div className={`dropdown ${toggle ? "toggled" : ""}`}>
        {options.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setToggle(!toggle)
                setCollection(value)
              }}
              className="option"
            >
              {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Select
