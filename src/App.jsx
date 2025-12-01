
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Services from './components/services/Services'
import Dsa from './components/DSA/Dsa';

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Dsa/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
