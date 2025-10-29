import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import MainLayout from './components/layout/MainLayout'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import BookPage from './components/pages/BookPage'
import ExplorePage from './components/pages/ExplorePage'
import SavedBooks from './components/pages/SavedBooks'
import Config from './components/pages/Config'

function App(){
  return(
    <Router basename="/Book_App_front">
        <Routes>
            <Route element={<MainLayout/>}> 
                <Route path='/' element={<Home/>}/>
                <Route path='/book/:id' element={<BookPage/>}/>
                <Route path='/explore' element={<ExplorePage/>}/>
                <Route path='/saved_books' element={<SavedBooks/>}/>
                <Route path='/config' element={<Config/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Cadastro/>}/>
        </Routes>
    </Router>
  )
}

export default App
