import { MyAppBar } from '../../nav/appbar';
import { Paper, Stack, Typography, Chip, Fab, IconButton } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import Image from "next/image";
import Link from "next/link";
function Includes(word){
    return word.includes("house") || word.includes("House");
}

export default function Page({ params }) {
    const reiki =  "An ancient technique used for stress reduction and relaxation.  It has been shown to have many benefits for both physical and mental health.  It’s a non-invasive therapy that involves me placing my hands near the body. I use 4 sacred herbs, stones and prayer to create a healing experience focused on clearing chakra blockages. \nThe Experience\nSet an intention for the session\nGrounding meditation (laying down)\nChakra clearing\nClosing ceremony\nDiscussion at the end\nNote: this practice is supportive of people from all different beliefs."
    const details = "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section."
    const house = "A spiritual practice that involves burning sage or palo santo to repel negative energies and spirits."
    let nameR = "Reiki Energy Healing"
    let nameH = "House Clearing & Blessing"
    let name = params.name.toLowerCase();
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
                                {(name == "reiki") ? nameR : (Includes(name)) ? nameH : params.name}
                            </Typography>
                            <span>
                                <Chip color="success" label={(name == "reiki") ? "$ 120" : (Includes(name)) ? "$50" : "NOT FOUND"} size='small'/>
                            </span>
                            <Typography gutterBottom align="center" style={{ paddingTop: 10,marginLeft:60,marginRight:60}} variant="body1" component="span">
                                {(name == "reiki") ? reiki : (Includes(name)) ? house : details}
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
