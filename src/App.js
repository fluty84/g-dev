import {useContext, useEffect} from 'react'

import NavbarComp from './components/NavbarComp/NavbarComp';
import Hero from './components/HeroComp/Hero';
import Projects from './components/ProjetsComp/Projects';

import { myContext } from "./context"

import './App.scss';



function App() {

  const { colorScheme } = useContext(myContext)
  

  useEffect(()=>{
    console.log('color', colorScheme)
  }, [colorScheme])

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <main className={`App-main ${colorScheme}`}>
        <Hero></Hero>
        <Projects></Projects>
        
      </main>
    </div>
  );
}

export default App;
