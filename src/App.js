import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
function App() {
  const [data, setData] = useState(null)
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${keyword}&media_type=image&page=1`
      )
      .then((res) => {
        setData(res.data.collection.items)
      })
  }, [keyword])
  return (
    <div className='container my-0 mx-auto  flex flex-col justify-center align-center text-center'>
      <input
        className=' max-w-6xl w-8/12 h-14 bg-blue-300 placeholder-opacity-75 shadow-lg
        placeholder:font-thin text-lg 
        placeholder-white text-center font-Roboto'
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='type any keyword to show NASA images'
      />
      <div className='flex flex-wrap justify-center align-center w-400  max-w-screen-lg '>
        {data &&
          data.map((item) => {
            return (
              <div key={item.data[0].nasa_id}>
                <img
                  className='w-40 h-40 max-w-sm object-cover object-center rounded-lg shadow-lg mt-4 mr-4 hover:scale-150 transition-all duration-700 ease-in-out cursor-pointer'
                  src={item.links[0].href}
                  alt={item.data[0].title}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
