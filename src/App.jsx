
import Features from "./components/Features"
import Footer from "./components/Footer"
import Gaming from "./components/Gaming"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import NavBar from "./components/NavBar"
function App() {


  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Gaming/>
      <Footer/>
    </main>
  )
}

export default App
