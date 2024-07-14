"use client"

import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "next/link"
import { useState } from "react";

export const MuiDrawer = () =>{
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const icons = {"Home": <HomeIcon/>, "Service 1": <FavoriteIcon/>,"Service 2":<FavoriteIcon/>,"Service 3":<FavoriteIcon/>,"Book": <EventIcon/>}
    return(
        <>
        <IconButton p={80} size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width={250} textAlign= "center" role="presentation">
                <List>
                    {["Home", "Service 1","Service 2","Service 3","Book"].map((text, index) => (
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