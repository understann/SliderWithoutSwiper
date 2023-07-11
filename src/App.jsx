import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const ourMonster = ['Wolfy','Twittier','Crawler'];
  const [land, setland] = useState()
  const imageMonster = [
      '../src/assets/wolfy.png',
      '../src/assets/Twittier.png',
      '../src/assets/crawler.png'
    ]
  const [className0, setclassName0] = useState('card-row');
  const [className1, setclassName1] = useState('card-row');
  const [className2, setclassName2] = useState('card-row');
  const [Number, setNumber] = useState(0);

  useEffect(() => {
    console.log(Number)
    const interval = setInterval(() => {
      if(Number >= 2){
        setNumber(0);
      }else{
        setNumber(Number + 1);
      }
    }, 4000);

    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    if(Number === 0){
      setclassName0('card-row0-entering')
      setclassName1('card-row')
      setclassName2('card-row2-out')
      setland('../src/assets/dark-fantasy.jpg')
    }
    if(Number === 1){
      setclassName0('card-row0-out')
      setclassName1('card-row1-entering')
      setclassName2('card-row')
      setland('../src/assets/BlueLand.jpg')
    }
    if(Number === 2){
      setclassName0('card-row')
      setclassName1('card-row1-out')
      setclassName2('card-row2-entering')
      setland('../src/assets/marketbroke.jpg')
    }
  })


  return (
    <div className='Single'>
      <div className='Continent'></div>
      <div className={className0}>
        <div className='card0'>
          <p className='ourMonsterText'>{ourMonster[0]}</p>
          <img src={imageMonster[0]} className='ourMonsterImage'></img>
          <img src='../src/assets/Moon-icon.png' className='ourMonsterElement'></img>
          <div className='ourMonsteHeader0'></div>
        </div>
      </div>
      <div className={className1}>
        <div className='card1'>
          <p className='ourMonsterText'>{ourMonster[1]}</p>
          <img src={imageMonster[1]} className='ourMonsterImage'></img>
          <img src='../src/assets/Moon-icon.png' className='ourMonsterElement'></img>
          <div className="ourMonsteHeader1"></div>
        </div>
      </div>
      <div className={className2}>
        <div className='card2'>
          <p className='ourMonsterText'>{ourMonster[2]}</p>
          <img src={imageMonster[2]} className='ourMonsterImage'></img>
          <img src='../src/assets/Moon-icon.png' className='ourMonsterElement'></img>
          <div className="ourMonsteHeader2"></div>
        </div>
      </div>
    </div>
  )
}

export default App
