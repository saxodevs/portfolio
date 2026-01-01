import { useEffect, useState } from 'react';
import './App.css';
import Index from './Index';


function App() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {


    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [setLoading])

  return (
    <>

      {
        loading ? <div className=' absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] border-4 border-t-4 border-t-primary border-b-4 border-b-primary border-white/20 rounded-full h-10 w-10   animate-spin'></div>

          : <Index />
      }

    </>
  )
}

export default App
