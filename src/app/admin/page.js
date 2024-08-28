"use client"
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { List, ListItem, Link,Button,Fab,ListItemButton, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { Paper, Stack } from '@mui/material';
import { redirect } from 'next/navigation';
import { useSession, getSession } from "next-auth/react"

//get TIMES from DB
let list = ["time1","time2"];

export default function Admin(){
    const session = useSession()
    const [tod, setTod] = React.useState('');
    const handleChange = (event) => {
        setTod(event.target.value);
    };
    // console.log(session)
    // console.log(session.user)
    if (!session.data.user) {
        redirect("/admin/signin");
    }else if(session.data.user.email != "jdsawyer1223@gmail.com"){
        redirect("/");
    }
    return(<>
        <span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onAccept={true}/>
        </LocalizationProvider>
        </span>
        <Paper component={Stack} elevation={8} style={{width: "30vw", height: "40vw", overflow: "auto"}}>
                <List>
                {list.map((item, index) => (
                <ListItem key={item}>
                    <ListItemButton style={{justifyContent: "center"}}>
                        <Typography justifyContent="center">{item}</Typography>
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
        </Paper>
        <Box>
            <TextField label="Hour" variant="outlined" />
            <TextField label="Min" variant="outlined" />
            <FormControl style={{width: "10vw"}}>
                <InputLabel id="AM/PM">AM/PM</InputLabel>
                    <Select
                    value={tod}
                    label="AM/PM"
                    onChange={handleChange}
                    >
                    <MenuItem value={"AM"}>AM</MenuItem>
                    <MenuItem value={"PM"}>PM</MenuItem>
                </Select>
            </FormControl>
            <Fab component={Button} variant="extended" size="medium" color="primary">Submit</Fab>
        </Box>
        <Fab component={Link} href="/" variant="extended" size="medium" color="primary">Home</Fab>
    </>);
}