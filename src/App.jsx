import './App.css'
import Main from './components/layout/Main'
import Navbar from './components/layout/NavBar'


function App() {
  

  return (
    <div className=" bg-(--background) flex flex-col justify-center items-center">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
