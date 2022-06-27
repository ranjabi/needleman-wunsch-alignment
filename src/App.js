import './App.css'
import Main from './Main'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'

const docs = () => {
  return (
    <div className="container mx-auto bg-white p-8 my-20 rounded-xl">
      <h1 className='text-center text-lg'>Penggunaan Program</h1>
      <br />
      <p>Isi sequence 1 dan sequence 2 dengan barisan DNA. Pastikan panjang sequence 2 kurang dari panjang sequence 1.</p>
      <br />
      <p>Terdapat tiga test case yang sudah disediakan. Klik tombol pada masing-masing test case untuk melihat hasil dari penyelarasan DNA.</p>
      <br />
      <p>Setelah menekan tombol Submit, maka akan muncul hasil dari traceback matriks. Terdapat juga runtime dan hasil alignment sequence DNA. Warna hijau pada matriks menunjukkan path yang diambil saat traceback.</p>
      <br />
      <p>More on: <a href='https://github.com/ranjabi/needleman-wunsch-alignment'>https://github.com/ranjabi/needleman-wunsch-alignment</a>.</p>
      <br />
      <p>Made by <a href="https://github.com/ranjabi">Fikri Ranjabi</a>.</p>
    </div>
  )
}

function App() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    console.log('sss')
    setClick(!click)
  }

  return (
    <div className="bg-slate-400 min-h-screen pb-8">
      <Navbar handleClick={handleClick}/>
        { click === true ? docs() : null }
      <div className="container mx-auto bg-white p-8 mt-8 rounded-xl">
        <Main />
      </div>
    </div>
  )
}

export default App
