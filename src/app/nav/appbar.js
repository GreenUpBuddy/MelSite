import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Image from "next/image";
import { MuiDrawer } from './drawer';
import { Toolbar } from '@mui/material';

export const MyAppBar = () => {
  const img = require("/public/images/image_50339841_cleaned_resized.png");

  return (
    <Box sx={{ paddingBottom: { xs: 7, md: 15 } }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          top: 0, 
          left: 0, 
          height: { xs: "60px", md: "80px" },  
          width: "100vw",
          backgroundColor: "#222",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between",  // Ensures spacing between elements
            alignItems: "center", 
            padding: "0 16px",  // Adds some space
            width: "100%",
          }}
        >
          {/* Left-Aligned Drawer Icon */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MuiDrawer />
          </Box>

          {/* Centered Logo with Dynamic Sizing */}
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Image 
              unoptimized 
              key={0} 
              src={img} 
              alt="Logo"
              width={250}  // Desktop size
              height={60}
              style={{
                width: "auto", 
                maxWidth: "50%",  // Adjusts for smaller screens
                height: "auto",
                maxHeight: "60px",
              }} 
            />
          </Box>

          {/* Empty Box to Balance the Toolbar */}
          <Box sx={{ width: "40px" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
