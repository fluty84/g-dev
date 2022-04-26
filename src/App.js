import {useContext, useEffect} from 'react'
import logo from './logo.svg';
import NavbarComp from './components/NavbarComp/NavbarComp';
import Hero from './components/HeroComp/Hero';

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
        
      </main>
    </div>
  );
}

export default App;
