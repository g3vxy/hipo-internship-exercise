import { ImageProvider } from "../../Context/ImageContext"
import Gallery from "../Gallery/Gallery"
import Header from "../Header/Header"
import PaginationButton from "../PaginationButtons/PaginationButton"
import "./App.css"

function App() {
  return (
    <ImageProvider>
      <div className="App">
        <Header></Header>
        <Gallery></Gallery>
        <div className="paginationContainer">
          <PaginationButton text="Previous"></PaginationButton>
          <PaginationButton text="Next"></PaginationButton>
        </div>
      </div>
    </ImageProvider>
  )
}

export default App
