import { ImageProvider } from "../../Context/ImageContext"
import Gallery from "../Gallery/Gallery"
import Header from "../Header/Header"

function App() {
  return (
    <ImageProvider>
      <div className="App">
        <Header></Header>
        <Gallery></Gallery>
      </div>
    </ImageProvider>
  )
}

export default App
