import React, {useState} from 'react';
import reactLogo from "./assets/react.svg";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

const HomePage: React.FC = () => {

    const [email, setEmail] = useState('');
    const history = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleLoginClick = () => {
        history( '/empty', // Path of the page you want to navigate to
             {
        state: {
            email: email
        } }) // State object containing email);
    };

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Coursera connect</h1>
            <div>
                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} // Set the value of TextField to the email state variable
                           onChange={handleEmailChange} />
            </div>
            <br />
            <Button variant="contained" onClick={handleLoginClick}>Log in</Button>
        </>
    );
};

export default HomePage;