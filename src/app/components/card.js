import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Link from "next/link";

//props.name
export const DataCard = (props) => {
  let link = props.name;
  const key = link === "reiki" ? 1 : 2;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: {
          xs: 350, // small screen (phones)
          sm: 400, // tablets
          md: 600, // desktops and up
        },
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardActionArea
        component={Link}
        href={`date/${link}`}
        key={"card" + key}
        sx={{ height: "100%" }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: "0 0 auto" }}>
            <Image
              unoptimized
              component="img"
              width="100%"
              height="240"
              style={{ borderRadius: "10px", objectFit: "cover" }}
              src={props.image}
              alt={props.name}
            />
          </Box>

          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
            {props.name}
          </Typography>

          <Typography variant="overline" display="block" gutterBottom>
            {props.price}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Open Sans"
            fontSize="1em"
            sx={{ mt: "auto" }}
          >
            {props.details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
