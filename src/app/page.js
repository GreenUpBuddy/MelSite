import Image from "next/image";
import styles from "./page.module.css";
import { MyAppBar } from "./nav/appbar";
import { DataCard } from "./components/card";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Stack, Typography, Chip, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import ContactForm from "./components/contact";

export default function Home() {
  const energy = JSON.parse(
    JSON.stringify(require("/public/images/energy.jpeg"))
  );
  const egg = JSON.parse(JSON.stringify(require("/public/images/egg.jpeg")));
  const house = JSON.parse(
    JSON.stringify(require("/public/images/house.jpeg"))
  );
  const about = JSON.parse(
    JSON.stringify(require("/public/images/about.jpeg"))
  );
  const tarot = JSON.parse(
    JSON.stringify(require("/public/images/tarot.jpeg"))
  );

  return (
    <>
      <MyAppBar />
      <Stack spacing={4} alignItems="center" sx={{ padding: { xs: 2, md: 5 } }}>
        <Card sx={{ maxWidth: "90vw", padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Image Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                width={400}
                height={540}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "10px",
                }}
                src={about}
                alt="Melody Sawyer"
              />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography
                  variant="body1"
                  fontFamily={"Open Sans"}
                  sx={{
                    fontSize: { xs: "1em", md: "1.3em" },
                    textAlign: { xs: "center", md: "justify" },
                  }}
                >
                  Welcome! My name is Melody Sawyer, and I am a 40-year-old
                  healer, mother of five, and a passionate advocate for
                  spiritual well-being. I am on a continual journey of
                  self-discovery and growth, deeply rooted in the wisdom of
                  indigenous ceremonies and enriched by my certification as a
                  Reiki Master. As a curandera, I incorporate the traditions of
                  Mexican shamanism into my healing ceremonies, believing
                  wholeheartedly in the transformative power of prayer and
                  faith. My spiritual path has been profoundly shaped by the
                  guidance of my ancestors and spirit guides, and I embrace my
                  clairvoyant abilities as a gift that enhances the healing
                  experiences I offer. The sacredness of ceremony holds a
                  special place in my heart, and I find joy in the rituals of
                  burning herbs and using tools such as an eagle feather and an
                  abalone shell. The loss of my husband deepened my spiritual
                  connection, awakening me to my true purpose: helping others
                  heal and fostering a deeper connection with the divine. I am
                  dedicated to creating a safe and nurturing space for all who
                  seek guidance and renewal on their own spiritual journeys.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <div style={{ paddingBottom: 40 }}>
          <Typography variant="h4" textAlign="center">
            Services
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ px: { xs: 2, sm: 4 } }}
          >
            {[
              {
                name: "Reiki Energy Healing",
                details:
                  "An ancient technique used for stress reduction and relaxation, which has been shown to have many benefits for both physical and mental health. Non-invasive therapy that involves me placing my hands near the body. I use 4 sacred herbs, stones and prayer to create a healing experience focused on clearing blockages....",
                price: "$120",
                image: energy,
              },
              {
                name: "House Clearing & Blessing",
                details:
                  "A house blessing is a ceremonial practice aimed at purifying and instilling positive energy within a home,  conducted by a spiritual leader or healer.This ritual may involve the use of prayers, the burning of sage or resin, and the sprinkling of cleanings waters....",
                price: "$90",
                image: house,
              },
              {
                name: "Egg Limpia",
                details:
                  "An egg limpia, also known as an egg cleansing, is a traditional practice in various cultures, particularly in Latin America, where an egg is used as a tool for spiritual cleansing and healing. The process involves rolling a raw egg over the body while setting the intention to absorb negative energy or ailments....",
                price: "$90",
                image: egg,
              },
              {
                name: "Tarot Card Reading",
                details:
                  "These readings are designed to illuminate your path, offering clarity and guidance on your life's journey. Whether you're facing a crossroads, seeking answers to pressing questions, or simply looking to explore your inner self, my intuitive approach to tarot provides a unique and transformative experience....",
                price: "$65",
                image: tarot,
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <DataCard
                  name={service.name}
                  details={service.details}
                  price={
                    <Chip label={service.price} color="success" size="small" />
                  }
                  image={service.image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <span>
          <ContactForm />
        </span>

        <Typography variant="h3" gutterBottom paddingTop={5}>
          Reviews
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "A Profound Inner Exploration - My first reiki experience was an unexpected journey deep within myself. While unsure of what to expect, I was open and ready for the exploration. The session began with a focus on healing, but soon transitioned into a powerful feeling of empowerment. This sense of inner strength blossomed into a wave of love, peace, and joy. Then came shift. Sadness arose, which I believe signaled a clearing of my heart chakra. Instead of resisting it, I embraced the feeling, allowing for a deeper acceptance - both of myself and those around me. With this acceptance came a profound sense of love, joy, and overall happiness. The session with Melody was truly transformative. Her ability to create a peaceful environment allowed me to fully surrender to the experience. This experience opened my eyes to the power of energy healing. I feel lighter, more centered, and ready to embrace life with a newfound sense of acceptance. Reiki is something I would like to incorporate into my life.",
            "First off...the whole experience was so peaceful. I was actually in a heightened emotional state when you came over. Been dealing with somethings that have made me feel very down, a little depressed, and allowing my inner critic to take over. After I felt like my chest surprisingly felt really open like the pressure had been let out. After you left, I felt a little emotional. The next day I was feeling like I know something needed to shift. So I chatted with my husband and it's funny...we had a good heart to heart, I cried and after that I just immediately got into action. I don't know what you did to me but a switch turned on and sent me in the right direction. I feel hopeful and empowered and I want to thank you for your warmth, compassion, the love, and creating a safe space for me to get some healing!!!!!",
            "I had one reiki session with melody and can not praise the experience enough. This was my first experience with reiki so I did not know what to fully expect. Melody was very warm and inviting and made me feel very comfortable just upon our initial meeting. She was very knowledgeable and walked me through what the session would entail and gave a bit of her personal background and experiences with reiki as well which I think elevated the experience. After our session we had a debrief which felt necessary and she was very thoughtful and supportive with her insight, it truly did close out the session in a positive way. I would 100% recommend going to melody, the calmness and support she provided for what can feel very vulnerable was unmatched.",
          ].map((review, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={4}
                sx={{
                  padding: 2,
                  backgroundColor: "#f5f5f5",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // optional: if you add a name/date/footer later
                }}
              >
                <Typography
                  variant="body1"
                  fontFamily={"Open Sans"}
                  fontSize={"1.15em"}
                >
                  {review}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
