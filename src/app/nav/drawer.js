"use client"

import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "next/link"
import { useState } from "react";

export const MuiDrawer = () =>{
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const icons = {"Home": <HomeIcon/>, "Reiki": <FavoriteIcon/>,"House Clearing & Blessing":<FavoriteIcon/>,"Egg Limpia":<FavoriteIcon/>,"Book": <EventIcon/>}
    return(
        <>
        <IconButton p={80} size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width={250} textAlign= "center" role="presentation">
                <List>
                    {["Home", "Reiki","House Clearing & Blessing","Egg Limpia"].map((text, index) => (
                    <ListItemButton key={text} component={Link} to={(text == "Home" ) ? "/" : (text == "Book") ? "/book" : "/date/" + text.toLowerCase()}>
                        <ListItemIcon>
                        {icons[text]}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    ))}
                </List>
                </Box>
            </Drawer>
       </>
    );
}