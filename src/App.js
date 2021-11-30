import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Works from './components/Works';

function App() {
  useEffect(()=>{
    Aos.init({
      useClassNames: false,
    });
  },[])
  return (
    <>
      <Banner />
      <Experience />
      <Works />
      <Contact/>
    </>
  );
}

export default App;
