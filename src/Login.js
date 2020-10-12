import React from 'react'
import "./Login.css";
import {Button} from "@material-ui/core";

function Login() {
    const signIn = e => {
        // do google login
    }
    return (
        <div className={"login"}>
            <div className="login__logo">
                <img src="https://brandpalettes.com/wp-content/uploads/2019/05/discord_logo_color.png" alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
