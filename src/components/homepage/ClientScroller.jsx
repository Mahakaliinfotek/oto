import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import your client logos
import C1 from "../../assets/oto/c1.png";
import C2 from "../../assets/oto/c2.png";
import C3 from "../../assets/oto/c3.png";
import C4 from "../../assets/oto/c4.png";
import C5 from "../../assets/oto/c5.png";
import C6 from "../../assets/oto/c6.png";
import C7 from "../../assets/oto/c7.png";
import C8 from "../../assets/oto/c8.png";
import C9 from "../../assets/oto/c9.png";

const clients = [C1, C2, C3, C4, C5, C6,C7,C8,C9];

export default function ClientsScroller() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollAmount = 200;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ width: "100%", mt: 4 }}>
            {/* Title */}
            <Typography
                sx={{
                    fontSize: { xs: 22, md: 26 },
                    fontWeight: 700,
                    color: "#0b2c58",
                    mb:{xs:0,md: 2},
                    fontFamily: "Inter",
                }}
            >
                Clients
            </Typography>

            {/* Scroller Wrapper */}
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* LEFT ARROW */}
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "absolute",
                        left: 0,
                        zIndex: 3,
                        bgcolor: "white",
                        width: 35,
                        height: 35,
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                {/* SCROLLABLE CLIENT LIST */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 2,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        px: {xs:0,md:6}, // leave space for arrows
                        py: 2,
                        "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
                        width: "100%",
                    }}
                >
                    {clients.map((logo, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: { xs: 90, md: 130 },
                                height: { xs: 90, md: 130 },
                                bgcolor: "#f7f7f7",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
                                flexShrink: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt={`Client ${index}`}
                                sx={{
                                    width: "95%",
                                    height: "95%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* RIGHT ARROW */}
                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "absolute",
                        right: 0,
                        zIndex: 3,
                        bgcolor: "white",
                        width: 35,
                        height: 35,
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
}
