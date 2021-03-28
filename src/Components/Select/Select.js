import { useEffect, useState } from "react"
import "./Select.css"
import Arrow from "../../Assets/Arrow.svg"

function Select({ options }) {
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState("")

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <div className={`select ${toggle ? "toggled" : ""}`}>
      <div
        className={`placeholder ${toggle ? "toggled" : ""} ${
          selected !== "" ? "selected" : ""
        }`}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <p>{`${selected === "" ? "Collections" : selected}`}</p>
        <img
          src={Arrow}
          alt="Arrow"
          onClick={(e) => {
            e.stopPropagation()
            setSelected("")
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
                setSelected(value)
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

/*
<select className="select">
      <option value="Collection">Collection</option>
      {options.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        )
      })}
</select>
*/
