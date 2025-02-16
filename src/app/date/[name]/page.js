import { MyAppBar } from '../../nav/appbar';
import { Paper, Stack, Typography, Chip, Fab, IconButton } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
    const reiki =  "An ancient technique used for stress reduction and relaxation.  It has been shown to have many benefits for both physical and mental health.  It’s a non-invasive therapy that involves me placing my hands near the body. I use 4 sacred herbs, stones and prayer to create a healing experience focused on clearing chakra blockages. \nThe Experience\nSet an intention for the session\nGrounding meditation (laying down)\nChakra clearing\nClosing ceremony\nDiscussion at the end\nNote: this practice is supportive of people from all different beliefs."
    const details = "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section."
    const house = "A house blessing is a ceremonial practice aimed at purifying and instilling positive energy within a home,  conducted by a spiritual leader or healer.This ritual may involve the use of prayers, the burning of sage or resin, and the sprinkling of cleanings waters."
    const egg = "An egg limpia, also known as an egg cleansing, is a traditional practice in various cultures, particularly in Latin America, where an egg is used as a tool for spiritual cleansing and healing. The process involves rolling a raw egg over the body while setting the intention to absorb negative energy or ailments. After the cleansing, the egg is often broken into a glass of water to reveal patterns that are interpreted to assess the individual’s emotional and spiritual state. The benefits of an egg limpia may include emotional relief, a sense of renewed energy, and alleviation of stress or anxiety. Practitioners believe that this ritual can help clear away bad energies and promote overall well-being, making it a holistic approach to self-care and personal empowerment.";
    let nameR = "Reiki Energy Healing"
    let nameH = "House Clearing & Blessing"
    let nameE = "Egg Limpia"
    let name = params.name.replaceAll("%20"," ");

    const images = {
        energy: JSON.parse(
        JSON.stringify(
          require("/public/images/energy.jpeg")
        )
      ),
      eggPic:  JSON.parse(
        JSON.stringify(
          require("/public/images/egg.jpeg")
        )
      ),
      housePic: JSON.parse(
        JSON.stringify(
          require("/public/images/house.jpeg")
        )
      ),};
    let currImg = name.includes("Reiki") ? images['energy'] : name.includes("House") ? images['housePic'] : images['eggPic']
    return (
        <main style={{overflow: false}}>
            <MyAppBar/>
            <div style={{paddingBottom:750}}>
                <Stack alignItems="center">
                    <Paper elevation={8} square={false} style={{position: 'absolute', top: "15%",width: '60vw'}}>
                        <IconButton style={{marginLeft: 15,marginTop:15}} aria-label="delete" color="primary" size="large" component={Link} href={`/`}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Stack style={{paddingTop:20}} alignItems="center">
                            <Image unoptimized src={currImg} width={400} height={400} alt="placeholder"/>
                            <Typography style={{paddingTop:10}} gutterBottom variant="h5" component="div">
                                {(name == "reiki") ? nameR : (name.includes("House")) ? nameH : name}
                            </Typography>
                            <span>
                                <Chip color="success" label={(name.includes("Reiki")) ? "$ 120" : (name.includes("House")) ? "$50" : (name.includes("Egg")) ? "$90"
                                :"NOT FOUND"} size='small'/>
                            </span>
                            <Typography gutterBottom align="center" style={{ paddingTop: 10,marginLeft:60,marginRight:60}} variant="body1" component="span">
                                {(name.includes("Reiki")) ? reiki : (name.includes("House")) ? house : name.includes("Egg") ? egg :details}
                            </Typography>
                            {/* <span  style={{marginBottom: 20}}>
                            <Fab component={Link} href='/book' style={{alignItems: "center"}} variant="extended" size="medium" color="primary">
                                <CalendarMonthIcon/>
                                Book Now
                            </Fab>
                            </span> */}
                        </Stack>
                    </Paper>
                </Stack>
            </div>
        </main>
    );
}
