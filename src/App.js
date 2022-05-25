import { useContext, useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import NavbarComp from './components/NavbarComp/NavbarComp';
import Hero from './components/HeroComp/Hero';
import About from './components/AboutComp/About';
import Projects from './components/ProjetsComp/Projects';
import Footer from './components/FooterComp/Footer';

import { myContext } from "./context"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {

  const { colorScheme } = useContext(myContext)


  useEffect(() => {

  }, [colorScheme])

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <ParallaxProvider>
        <main className={`App-main ${colorScheme}`}>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Footer></Footer>
        </main>
      </ParallaxProvider>  
    </div>
  );
}

export default App;
