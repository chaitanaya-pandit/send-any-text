
import { Route,Routes } from 'react-router-dom'
import Sender from './pages/Sender'
import Home from './pages/Home'
import Reciever from './pages/Reciever'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/sender' element={<Sender/>}/>
      <Route path='/receiver' element={<Reciever/>}/>
    </Routes>
  )
}

export default App