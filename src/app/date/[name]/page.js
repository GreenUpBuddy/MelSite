import { MyAppBar } from '../../nav/appbar';
import { Paper, Stack, Typography, Chip, Fab, IconButton } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
    const details = "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section."
    return (
        <>
            <MyAppBar/>
            <main>
                <Stack alignItems="center">
                    <Paper elevation={8} square={false} style={{position: 'absolute', top: "15%",width: '60vw'}}>
                        <IconButton style={{marginLeft: 15,marginTop:15}} aria-label="delete" color="primary" size="large" component={Link} href={`/`}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Stack style={{paddingTop:20}} alignItems="center">
                            <Image unoptimized src="https://placehold.co/350x350" width={350} height={350} alt="placeholder"/>
                            <Typography style={{paddingTop:10}} gutterBottom variant="h5" component="div">
                                {params.name.replace("%20", " ")}
                            </Typography>
                            <span>
                                <Chip style={{marginRight:10}} label="1 for 1.99" size='medium'/> 
                                <Chip label="5 for 4.99" color='primary' size='medium'/>
                            </span>
                            <Typography gutterBottom align="center" style={{ paddingTop: 10,marginLeft:60,marginRight:60}} variant="body1" component="span">
                                {details}
                            </Typography>
                            <span  style={{marginBottom: 20}}>
                            <Fab component={Link} href='/book' style={{alignItems: "center"}} variant="extended" size="medium" color="primary">
                                <CalendarMonthIcon/>
                                Book Now
                            </Fab>
                            </span>
                        </Stack>
                    </Paper>
                </Stack>
            </main>
        </>
    );
}
