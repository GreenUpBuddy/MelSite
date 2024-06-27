import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export const ServiceCard = (props) => {
    return(
    <>
        <Card sx={{ maxWidth: "25vw" }}>
        <CardActionArea component={Button} >
            <CardContent>
                <img style={{}} width= {80} height={80} src="https://placehold.co/350x350"/>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name + " "}
                    {props.price}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </>
);}