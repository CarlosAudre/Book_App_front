import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import MainLayout from './components/layout/MainLayout'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
function App(){
  return(
    <Router>
        <Routes>
            <Route element={<MainLayout/>}> {/*Esse é o molde que ficará a maior parte das pg, com a sidebar e topbar  */}
                <Route path='/' element={<Home/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/login' element={<Cadastro/>}/>
            
        </Routes>
    </Router>
  )
}

export default App