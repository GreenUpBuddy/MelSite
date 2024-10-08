"use client"
import { MyAppBar } from "../nav/appbar";
import { Stack, Typography, Paper, List, ListItem, ListItemButton, Fab, Grid, Button} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ServiceCard} from "../components/serviceCard";


//get times from DB
let list = ["time1","time2"];


let GridSelect = () => {
    return(
    <Stack style={{justifyContent: "center", width: "30vw", height: "36vw"}}>
        <span style={{paddingBottom: 20}}>
        <ServiceCard
        name= {"serv 1"}
        details= {"temp dets"}
        price= {"price 1"}
        width={"30vw"}
        image= {"https://placehold.co/350x350"}/>
        </span>
        <span style={{paddingBottom: 20}}>
        <ServiceCard
        name= {"serv 2"}
        details= {"temp dets"}
        price= {"price 2"}
        width={"30vw"}
        height={"10vw"}
        image= {"https://placehold.co/350x350"}/>
        </span>
        <span style={{paddingBottom: 20}}>
        <ServiceCard
        name= {"serv 3"}
        details= {"temp dets"}
        price= {"price 3"}
        width={"30vw"}
        image= {"https://placehold.co/350x350"}/>
        </span>
    </Stack>);
}
let ConfirmSelect = (props) => {
    return(<>
        <Paper component={Stack} justifyContent={"center"} style={{width: "60vw", height: "5vw", textAlign: "center"}}>
            <Typography variant="h5">
                Date: {props.date} Time: {props.time} Service: {props.service + "               "}
                {<Fab component={Button} variant="extended" size="medium" color="primary">Book Now</Fab>}
            </Typography>
        </Paper>
    </>);
}
//make listItem buttons and link to date for booking page

function handleIt(){
    console.log("hehe haw haw")
}
export default function Book(){
    return(<>
        <div style={{paddingBottom: 50}}>
        <MyAppBar/>
        <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>Select a Date:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onAccept={handleIt} />
            </LocalizationProvider>
        </div>
        <Stack style={{paddingTop: 25,paddingBottom: 20}}>
        <span style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "30px",paddingTop: "20px" }}>
        <Paper elevation={8} square={false} style={{ width: '50vw', maxWidth: '800px', height: '36vw', overflow: "auto", paddingBottom: '20px' }}>
            <Stack>
                <List>
                {list.map((item, index) => (
                <ListItem key={item}>
                    <ListItemButton style={{justifyContent: "center"}}>
                        <Typography justifyContent="center">{item}</Typography>
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
            </Stack>
        </Paper>
        <GridSelect/>
        </span>
        <Stack style={{paddingTop: 20, justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: '20px' }}>
            <ConfirmSelect  date="1/1/1111" time="12:00 PM" service="serv 1"/>
        </Stack>
        <div style={{paddingTop: 20, paddingBottom: 20}}>
        <Paper elevation={8} square={false} style={{ width: '90vw', maxWidth: '800px', height: '13vw', overflow: "auto", margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            <Typography gutterBottom variant="h4">
                Dont see your preferred time or date?
            </Typography>
            <Typography gutterBottom variant="h4">
                Call and inquire with me!
            </Typography>
            <Typography gutterBottom variant="h4">
                PHONE or EMAIL
            </Typography>
        </Paper>
        </div>
        </Stack>
        </div>
    </>);
}