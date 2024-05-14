import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import RecruiterHomePage from "./recruiterHomePage.tsx";
import HomePage from "./homePage.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <div>

                <hr />

                <Routes>
                    <Route path="/" Component={HomePage}>

                    </Route>
                    <Route path="/empty" Component={RecruiterHomePage} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
