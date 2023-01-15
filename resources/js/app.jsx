import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";       
import LayoutWeb from './Pages/layouts/web/LayoutWeb';
import Home from './Pages/web/Home';
import Login from './Pages/web/Login';

const App = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutWeb/>}>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(     
    <App />        
);