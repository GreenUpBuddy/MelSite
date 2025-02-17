import { MyAppBar } from "../../nav/appbar";
import { Paper, Stack, Typography, Chip, Fab, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
  const reiki =
    "An ancient technique used for stress reduction and relaxation.  It has been shown to have many benefits for both physical and mental health.  It’s a non-invasive therapy that involves me placing my hands near the body. I use 4 sacred herbs, stones and prayer to create a healing experience focused on clearing chakra blockages. \nThe Experience\nSet an intention for the session\nGrounding meditation (laying down)\nChakra clearing\nClosing ceremony\nDiscussion at the end\nNote: this practice is supportive of people from all different beliefs.";
  const details =
    "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section.";
  const house =
    "A house blessing is a ceremonial practice aimed at purifying and instilling positive energy within a home,  conducted by a spiritual leader or healer.This ritual may involve the use of prayers, the burning of sage or resin, and the sprinkling of cleanings waters.";
  const egg =
    "An egg limpia, also known as an egg cleansing, is a traditional practice in various cultures, particularly in Latin America, where an egg is used as a tool for spiritual cleansing and healing. The process involves rolling a raw egg over the body while setting the intention to absorb negative energy or ailments. After the cleansing, the egg is often broken into a glass of water to reveal patterns that are interpreted to assess the individual’s emotional and spiritual state. The benefits of an egg limpia may include emotional relief, a sense of renewed energy, and alleviation of stress or anxiety. Practitioners believe that this ritual can help clear away bad energies and promote overall well-being, making it a holistic approach to self-care and personal empowerment.";

  let nameR = "Reiki Energy Healing";
  let nameH = "House Clearing & Blessing";
  let nameE = "Egg Limpia";
  let name = params.name.replaceAll("%20", " ");

  const images = {
    energy: require("/public/images/energy.jpeg"),
    eggPic: require("/public/images/egg.jpeg"),
    housePic: require("/public/images/house.jpeg"),
  };

  let currImg = name.includes("Reiki")
    ? images.energy
    : name.includes("House")
    ? images.housePic
    : images.eggPic;

  return (
    <main style={{ overflow: "hidden" }}>
      <MyAppBar />
      <Stack alignItems="center" sx={{ paddingBottom: { xs: 6, md: 10 } }}>
        <Paper
          elevation={8}
          sx={{
            position: "relative",
            width: { xs: "90vw", sm: "80vw", md: "60vw" }, // Responsive width
            padding: { xs: 2, md: 4 },
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {/* Back Button */}
          <IconButton
            sx={{ position: "absolute", top: 10, left: 10 }}
            color="primary"
            component={Link}
            href={`/`}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Image */}
          <Stack alignItems="center" sx={{ pt: 2 }}>
            <Image
              unoptimized
              src={currImg}
              width={400}
              height={400}
              alt="Service Image"
              style={{ width: "100%", maxWidth: "400px", borderRadius: 10 }}
            />
          </Stack>

          {/* Title */}
          <Typography
            sx={{ pt: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
            gutterBottom
            variant="h5"
          >
            {name.includes("Reiki")
              ? nameR
              : name.includes("House")
              ? nameH
              : nameE}
          </Typography>

          {/* Price */}
          <Chip
            color="success"
            label={
              name.includes("Reiki")
                ? "$120"
                : name.includes("House")
                ? "$50"
                : name.includes("Egg")
                ? "$90"
                : "NOT FOUND"
            }
            size="small"
            sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, mb: 2 }}
          />

          {/* Description */}
          <Typography
            fontFamily={"Open Sans"}
            sx={{
              pt: 2,
              px: { xs: 2, md: 6 },
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: "center",
            }}
            variant="body1"
          >
            {name.includes("Reiki")
              ? reiki
              : name.includes("House")
              ? house
              : name.includes("Egg")
              ? egg
              : details}
          </Typography>

          {/* Book Now Button
          <Fab
            component={Link}
            href="/book"
            sx={{ mt: 3, width: { xs: "90%", md: "auto" } }}
            variant="extended"
            size="medium"
            color="primary"
          >
            <CalendarMonthIcon sx={{ mr: 1 }} />
            Book Now
          </Fab> */}
        </Paper>
      </Stack>
    </main>
  );
}
