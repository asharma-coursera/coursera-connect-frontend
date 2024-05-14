import React from 'react';
import reactLogo from "./assets/react.svg";
import {Button, TextField} from "@mui/material";

const HomePage: React.FC = () => {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Coursera connect</h1>
            <div>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <br />
            <Button variant="contained">Log in</Button>
        </>
    );
};

export default HomePage;