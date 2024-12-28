import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../Components/Pages/Login/Login'
import Register from '../Components/Pages/Register/Register'


const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<h1>Home</h1>} />
                <Route path='/login' element={<Login></Login>} />
                <Route path='/register' element={<Register></Register>} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes