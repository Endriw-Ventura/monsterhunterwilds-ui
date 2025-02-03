import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MonsterDetails from "../pages/MonsterDetails";
import NotFound from "../pages/NotFound";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/MonsterDetails" element={<MonsterDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}