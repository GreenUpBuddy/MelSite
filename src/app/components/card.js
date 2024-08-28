import * as React from 'react';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

//props.name
export const DataCard = (props) => {
  let link = props.name;
  const key = (link == "reiki") ? 1 : 2;
  return (
    <Card sx={{ maxWidth: props.width }}>
      <CardActionArea key={"card" + key} component={Link} href={`date/${link}`} >
        <Image
          unoptimized
          component="img"
          height="140"
          width="200"
          src={props.image}
          alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                {props.name}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom textAlign={"center"}>
                {props.price}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {props.details}
            </Typography>   
        </CardContent>
      </CardActionArea>
    </Card>
  );
}