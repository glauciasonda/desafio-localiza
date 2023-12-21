import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home.js"
import Detail from "../Pages/Detail/Detail.js"
import MyBooking from "../Pages/MyBooking/MyBooking.js"

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/:idEvent" element={<Detail/>} />
                    <Route path="/booking" element={<MyBooking />} />

                </Routes>
            </BrowserRouter>
        </>
        
    )
}
export default Router