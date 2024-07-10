"use client"

import { signIn } from "next-auth/react";
import { Button,Fab} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';



export default function Admin(){
    return(<>
        <Fab component={Button} onClick={ () => signIn("google")} variant="extended" size="medium" color="primary">
            <PersonIcon/>
            SIGN IN
        </Fab>
    </>);
}