import React from "react";
import { Box, Typography } from "@mui/material";

const items = [
    {
        num: "01",
        title: "2019 Company was established",
        text: "OTO is founded, built on an entrepreneurial mandate to own the port-to-plant link."
    },
    {
        num: "02",
        title: "Stevedoring license at Visakhapatnam",
        text: "Enabling integrated pier-to-plant control."
    },
    {
        num: "03",
        title: "Cargo capability expansion",
        text: "From coal and coke to ores, minerals, containers, project/heavy lifts, & agro cargo dedicated gear & trained teams."
    },
    {
        num: "04",
        title: "Process and tech Optimization",
        text: "GPS tracking and safety sealing adopted at scale; emphasis on fuel optimization and carbon-conscious routing."
    },
    {
        num: "05",
        title: "East Coast operating footprint",
        text: "Active across Visakhapatnam, Gangavaram, and other prominent ports with multimodal capability."
    }
];

export default function Achievements() {
    return (
        <Box sx={{ width: "100%", mt: -2 }}>

            {/* Title */}
            <Typography
                sx={{
                    fontSize: { xs: 22, md: 30 },
                    fontWeight: 700,
                    color: "#0b4f66",
                    mb: { xs: 3, md: 4 },
                    fontFamily: "Inter"
                }}
            >
                Achievements & milestones
            </Typography>

            {/* CARD LIST */}
            {items.map((item, idx) => (
                <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "row" }, position: "relative", justifyContent: "flex-end", 
                     transition: "transform 0.25s ease",

                                    // COMMENT: add the pop hover effect
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                       
                                    }
                }}>
                    {/* Number badge */}
                    <Box
                        sx={{
                            position: "absolute",
                            minWidth: {xs:"40px",md:"50px"},
                            minHeight: {xs:"40px",md:"50px"},
                            bgcolor: "#1B335B",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: 700,
                            fontSize: {xs:15,md:17},
                            fontFamily: "Inter",
                            top: {xs:"30%",md:"27%"},
                            left: {xs:"0%",md:"0"}
                        }}
                    >
                        {item.num}
                    </Box>
                    <Box
                        key={idx}
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            background: "#E8EEF5",
                            borderRadius: "8px",
                            p: { xs: 2, md: 3 },
                            mb: 2,
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: 1.5, md: 3 },
                            flex: {xs:0.93,md:0.975},
                            
                        }}
                    >


                        <Box
                            sx={{
                                width: { md: "30%", xs: "100%" },   // FIXED COLUMN WIDTH
                                display: "flex",
                                alignItems: "center",
                                pl:{xs:2,md:2},
                                // textAlign:"center",
                                gap: 3
                            }}
                        >

                            <Typography
                                sx={{
                                    fontWeight: {xs:700,md:600},
                                    fontSize: { xs: 19, md: 24 },
                                    fontFamily: "IBM Plex Sans",
                                    color: "#1B335B",
                                }}
                            >
                                {item.title}
                            </Typography>

                            {/* Divider (Desktop Only) */}
                            <Box
                                sx={{
                                    width: "1px",
                                    height: "70px",
                                    background: "#1B335B",
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Box>

                        {/* Text content */}
                        <Box sx={{ textAlign: { xs: "left", md: "left" },width: { md: "60%", xs: "100%" },pl:{xs:2,md:2},  }}>


                            <Typography
                                sx={{
                                    mt: {xs:0,md:0.5},
                                    fontSize: { xs: 18, md: 20 },
                                    color: "#1B335B",
                                    fontFamily: "IBM Plex Sans",
                                    lineHeight: 1.4,
                                    fontWeight:{xs:400,md:500},
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            ))}
        </Box>
    );
}
