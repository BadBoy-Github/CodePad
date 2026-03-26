import Footer from "./components/Footer"
import Header from "./components/Header"
import MainBody from "./components/MainBody"



const App = () => {
  return (
    <div className=' p-10 bg-teal-100 w-full h-screen'>
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App