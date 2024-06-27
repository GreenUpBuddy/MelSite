import Image from "next/image";
import styles from "./page.module.css";
import { MyAppBar } from "./nav/appbar";
import { DataCard } from "./components/card";
import { Stack, Typography, Chip, Paper } from "@mui/material";
import Grid from '@mui/material/Grid';

function Item (title,details,price,image) {
  return (
    <DataCard 
    name= {title}
    details= {details}
    width={500}
    price= {<><Chip label={price} size='small'/></>}
    image= {image}
    />
  )
}

export default function Home() {
  return (
    <>
      <MyAppBar/>
      <Stack>
        <img style={{paddingBottom: 20}} src="https://placehold.co/140" height={500} width={750}/>
        <Typography gutterBottom>
          THIS IS WHERE THE ABOUT SECTION WILL GO
        </Typography>
        <div style={{paddingBottom: 20}}>
        <span>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <DataCard 
            name= "s1"
            details= "det1"
            width={500}
            price= {<><Chip label={"$90"} size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          <Grid item xs={3}>
          <DataCard 
            name= "s2"
            details= "det2"
            width={500}
            price= {<><Chip label={"$90"} size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          <Grid item xs={3}>
          <DataCard 
            name= "s3"
            details= "det3"
            width={500}
            price= {<><Chip label={"$90"} size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          </Grid>
        </span>
      </div> 
      <Typography variant="h3" gutterBottom>
        Reviews
      </Typography>
      <Grid style={{paddingBottom: 20}} container spacing={8}>
          <Grid item xs={3}>
            <Paper elevation={8} style={{width: "25vw", height: "7vw"}}>
              <Typography>
                rev 1
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={8} style={{width: "25vw", height: "7vw"}}>
              <Typography>
                rev 1
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={8} style={{width: "25vw", height: "7vw"}}>
              <Typography>
                rev 1
              </Typography>
            </Paper>
          </Grid>
      </Grid>
      </Stack>
    </>
  );
}
