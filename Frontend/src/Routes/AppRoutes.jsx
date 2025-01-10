import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../Components/Pages/Login/Login'
import Register from '../Components/Pages/Register/Register'
import Home from '../Components/Pages/Home/Home'
import Chat from '../Components/Pages/Projects/Chat/Chat'


const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/login' element={<Login></Login>} />
                <Route path='/register' element={<Register></Register>} />

                <Route path='/project' element={<Chat></Chat>} />


            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes