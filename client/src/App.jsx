import './App.css'
import Home from './components/Home'
import Error from './components/Error'
import Form_Field from './components/Form_Field'

import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form-field' element={<Form_Field />} />

                {/* 404 Page */}
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
