
import './App.css'
import { Home } from './components/appRick/home'
import RickProvider from './components/provider/rickProvider'



function App() {
  return (
   <div className='w-screen h-screen'>
    <RickProvider>
      <Home />
    </RickProvider>
   </div>
  )
}

export default App
