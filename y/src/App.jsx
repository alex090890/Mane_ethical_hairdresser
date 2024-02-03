import { useState } from 'react'
import './App.css'
import TobBox from './components/header';
import Card from './components/card';
import Intro from './components/intro';
import BigCard from './components/big-card';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <TobBox />
    </div>
    <div>
    <Card />
    </div> 
      <Intro />
      <BigCard />
      <Footer />
    </>
  )
}

export default App
