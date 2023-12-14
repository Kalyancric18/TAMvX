import { BrowserRouter,HashRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Crew } from "./components";
import Insight from "./components/Insight";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainApp/>}/>
        
        <Route path='/crew' element={<Crew/>} />
      </Routes>
    </HashRouter>

  )
}


const MainApp = () => {
  return (
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />    {/*Principal*/}
    <Works /> {/*Faculty Advisor*/}
    <Insight />
    <Feedbacks /> {/*Crew*/}
    <div className='relative z-0 '>
      <Contact /> {/*Contact Us*/}
    </div> 
  </div>
  )
}

export default App
