import "./TextInput.css"

function TextInput({ text }) {
  return <input type="text" placeholder={text} className="textInput"></input>
}

export default TextInput
