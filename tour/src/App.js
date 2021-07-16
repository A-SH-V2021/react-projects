import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  
 async function fetching() {

   try {
    setLoading(true)
    const responsive=await fetch(url).then()
    const result = await responsive.json()
    setTours(result)
    setLoading(false)
   } catch (error) {
    setLoading(true)
    console.log(error); 
   }
    
  }

  const removehandle=(id)=>{
   const newItems = tours.filter(item=>item.id !== id)
   setTours(newItems)
  }

  useEffect(() => {
    fetching()
  }, [])


  if (loading) {
    return <div className='center'>
        <Loading/>
    </div> 
  }

  if (tours.length==0) {
    return <div className='title'>
      <h1>No tours</h1>
      <button className='btn' onClick={fetching}>refresh</button>
    </div>
  }

  return (
    <main>
     <Tours tours={tours} removehandle={removehandle}/>
    </main>
  )
}

export default App
