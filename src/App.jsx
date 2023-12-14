import { RouterProvider, createBrowserRouter, BrowserRouter,HashRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Crew } from "./components";
import Insight from "./components/Insight";

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



const router = createBrowserRouter([

  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "/crew",
    element: <Crew/>,
  }

])


function App() {

  return (

    // <HashRouter>
    //   <Routes>
    //     <Route path='/TAMvX/' element={<MainApp/>}/>
        
    //     <Route path='/TAMvX/crew' element={<Crew/>} />
    //   </Routes>
    // </HashRouter>

    <RouterProvider router={router} />
    
  )
}



export default App
