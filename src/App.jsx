
import './App.css'
import Hero from './hero.jsx'
import MenubarDemo from './navbar.jsx'
import ContentMain from './main-content.jsx'
import Images from './images.jsx'
import Services from './services.jsx'
function App() {

  return (
    <>
    <div className="conatiner">
       <div className='first-page'>
        <MenubarDemo></MenubarDemo>
        <ContentMain></ContentMain>
        <Hero></Hero>
        </div>
        <div className='extra'>
        <Images></Images>
        <Services></Services>
        </div>


    </div>
    
      
    </>
  )
}

export default App
