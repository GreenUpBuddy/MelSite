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
    width={650}
    price= {<><Chip label={price} width={200} size='small'/></>}
    image= {image}
    />
  )
}

export default function Home() {
  return (
    <>
      <MyAppBar/>
      <Stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{paddingBottom: 20}} src="https://placehold.co/140" height={500} width={750}/>
        <Typography gutterBottom style={{ margin: '20px 0' }}>
          THIS IS WHERE THE ABOUT SECTION WILL GO
        </Typography>
        <div style={{paddingBottom: 20}}>
        <span>
        <Grid container spacing={2} style={{paddingBottom: 20, justifyContent: "center"}}>
          <Grid item xs={3}>
          <DataCard 
            name= "Reiki"
            details= "An ancient technique used for stress reduction and relaxation.  It has been shown to have many benefits for both physical and mental health.  It’s a non-invasive therapy that involves me placing my hands near the body. I use 4 sacred herbs, stones and prayer to create a healing experience focused on clearing chakra blockages."
            width={650}
            price= {<><Chip label={"$90"} color="success" size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          <Grid item xs={3}>
          <DataCard 
            name= "House Clearing & Blessing"
            details= "A spiritual practice that involves burning sage or palo santo to repel negative energies and spirits."
            width={650}
            price= {<><Chip label={"$90"} color="success" size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          <Grid item xs={3}>
          <DataCard 
            name= "s3"
            details= "det3"
            width={500}
            price= {<><Chip label={"$90"} color="success" size='small'/></>}
            image= {"https://placehold.co/140"}
            />
          </Grid>
          </Grid>
        </span>
      </div> 
      <Typography variant="h3" gutterBottom style={{ margin: '20px 0' }}>
        Reviews
      </Typography>
      <Grid style={{paddingBottom: 20, justifyContent: "center"}} container spacing={8}>
          <Grid item xs={3}>
            <Paper elevation={8} style={{ width: '25vw', padding: '20px', backgroundColor: '#f5f5f5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Typography>
                "A Profound Inner Exploration - My first reiki experience was an unexpected journey deep within myself. 
                While unsure of what to expect, I was open and ready for the exploration. The session began with a focus on healing, 
                but soon transitioned into a powerful feeling of empowerment. This sense of inner strength blossomed into a wave of love, 
                peace, and joy. Then came a shift. Sadness arose, which I believe signaled a clearing of my heart chakra. Instead of resisting 
                it, I embraced the feeling, allowing for a deeper acceptance - both of myself and those around me. With this acceptance came a 
                profound sense of love, joy, and overall happiness. The session with Melody was truly transformative. Her ability to create a 
                peaceful environment allowed me to fully surrender to the experience. This experience opened my eyes to the power of energy 
                healing. I feel lighter, more centered, and ready to embrace life with a newfound sense of acceptance. Reiki is something I 
                would like to incorporate into my life."
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={8} style={{ width: '25vw', padding: '20px', backgroundColor: '#f5f5f5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Typography>
              "First off...the whole experience was so peaceful. I was actually in a heightened emotional state when you came over. 
              Been dealing with somethings that have made me feel very down, a little depressed, and allowing my inner critic to take over. 
              After I felt like my chest surprisingly felt really open like the pressure had been let out. After you left, I felt a little emotional. 
              The next day I was feeling like I know something needed to shift. So I chatted with my husband and it's funny...we had a good heart to heart, 
              I cried and after that I just immediately got into action. I don't know what you did to me but a switch turned on and sent me in the right direction. 
              I feel hopeful and empowered and I want to thank you for your warmth, compassion, the love, and creating a safe space for me to get some healing!!!!!"
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={8} style={{ width: '25vw', padding: '20px', backgroundColor: '#f5f5f5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Typography>
              "I had one reiki session with melody and can not praise the experience enough. This was my first experience with reiki so I did not know what to fully expect. 
              Melody was very warm and inviting and made me feel very comfortable just upon our initial meeting. She was very knowledgeable and walked me through what the session would entail and gave a bit of her personal background and experiences with reiki as well which I think elevated the experience. 
              After our session we had a debrief which felt necessary and she was very thoughtful and supportive with her insight, it truly did close out the session in a positive way. I would 100% recommend going to melody, the calmness and support she provided for what can feel very vulnerable was unmatched."
              </Typography>
            </Paper>
          </Grid>
      </Grid>
      </Stack>
    </>
  );
}
