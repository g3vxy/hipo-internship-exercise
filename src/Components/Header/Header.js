import "./Header.css"
import Logo from "../../Assets/Logo.svg"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import Select from "../Select/Select"

const options = [
  "Featured",
  "Wallpapers",
  "Nature",
  "Textures & Patterns",
  "Architecture",
]

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo"></img>
      <div className="search">
        <TextInput text="Query"></TextInput>
        <Select options={options}></Select>
        <Button text="SEARCH"></Button>
      </div>
    </div>
  )
}

export default Header
