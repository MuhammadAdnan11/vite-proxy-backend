import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((Response)=>{
    setJokes(Response.data)
  })
  .catch((error )=>{
    console.log(error)
  })
})


  return(<>
    <h2>Getting Jokes from Backend</h2>
    <p>Jokes: {jokes.length}</p>

    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
  </>)
}

export default App
