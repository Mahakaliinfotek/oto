import React from "react";
import { Box, Typography } from "@mui/material";

// Desktop BG
import AchievementsBg from "../../assets/oto/AchievementsDesktop.png";

// Mobile top image
import AchievementsMobileImg from "../../assets/oto/AchievementsMobile.png";

export default function Achievements() {
    return (
        <Box sx={{ width: "100%", mt: 6 }}>
            {/* -------------------------- SECTION TITLE -------------------------- */}
            {/* <Typography
                sx={{
                    fontSize: { xs: 22, md: 30 },
                    fontWeight: 700,
                    color: "#0b4f66",
                    mb: { xs: 2, md: 3 },
                    px: { xs: 2, md: 0 },
                    fontFamily: "Inter",
                }}
            >
                Achievements & milestones
            </Typography> */}
            {/* ========================= DESKTOP VIEW ========================= */}
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    width: "100%",
                    height: "650px",
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                {/* BACKGROUND IMAGE */}
                <Box
                    component="img"
                    src={AchievementsBg}
                    alt="Achievements background"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

                {/* TITLE OVER IMAGE */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        fontSize: 26,
                        fontWeight: 700,
                        color: "white",
                        zIndex: 5,
                        fontFamily: "Inter",
                    }}
                >
                    Achievements & milestones
                </Typography>

                {/* ABSOLUTE LAYER FOR CARDS */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* ===== CENTER CARD ===== */}
                    <Box
                        sx={{
                            bgcolor: "white",
                            p: 3,
                            borderRadius: "10px",
                            width: "260px",
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                            position: "relative",
                            zIndex: 10,
                            fontFamily: 'IBM Plex Sans',
                        }}
                    >
                        <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#1B335B', }}>
                            2019
                        </Typography>
                        <Typography sx={{ lineHeight: 1.2, color: '#1B335B', fontSize: { xs: 14, md: 18 }, fontFamily: 'IBM Plex Sans', fontWeight: '500', wordWrap: 'break-word' }}>
                            OTO is founded, built on an entrepreneurial mandate to own
                            the port-to-plant link.
                        </Typography>
                    </Box>

                    {/* ===== TOP CARD ===== */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "12%",
                            background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                            color: "white",
                            width: "260px",          // SAME WIDTH AS CENTER
                            p: 2.5,
                            borderRadius: "10px",
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                            fontFamily: 'IBM Plex Sans',
                        }}
                    >
                        <Typography fontWeight={700}>
                            Stevedoring license at Visakhapatnam
                        </Typography>
                        <Typography sx={{ mt: 0.5, color: 'white', fontSize: { xs: 14, md: 16 }, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                            Enabling integrated pier-to-plant control.
                        </Typography>
                    </Box>

                    {/* ===== BOTTOM CARD ===== */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "4%",
                            background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                            color: "white",
                            width: "260px",         // SAME WIDTH AS CENTER
                            p: 2.5,
                            borderRadius: "10px",
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                            fontFamily: 'IBM Plex Sans',
                        }}
                    >
                        <Typography fontWeight={700}>
                            Process and tech
                        </Typography>
                        <Typography sx={{ mt: 0.5, color: 'white', fontSize: { xs: 14, md: 16 }, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                            GPS tracking and safety sealing adopted at scale; emphasis on fuel optimization and carbon-conscious routing.
                        </Typography>
                    </Box>

                    {/* ===== LEFT CARD (TALLER) ===== */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: "18%",
                            background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                            color: "white",
                            width: "230px",
                            minHeight: "180px",     // SLIGHTLY TALLER
                            height: "240px",
                            p: 2.5,
                            borderRadius: "10px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                            fontFamily: 'IBM Plex Sans',
                        }}
                    >
                        <Typography fontWeight={700}>East Coast operating footprint</Typography>
                        <Typography sx={{ mt: 0.5, color: 'white', fontSize: { xs: 14, md: 16 }, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                            Active across Visakhapatnam, Gangavaram, and other prominent ports with multimodal capability.
                        </Typography>
                    </Box>

                    {/* ===== RIGHT CARD (TALLER) ===== */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: "18%",
                            background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                            color: "white",
                            width: "230px",
                            minHeight: "180px",    // SLIGHTLY TALLER
                            p: 2.5,
                            borderRadius: "10px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                            fontFamily: 'IBM Plex Sans',
                        }}
                    >
                        <Typography fontWeight={700}>Cargo capability expansion</Typography>
                        <Typography sx={{ mt: 0.5, color: 'white', fontSize: { xs: 14, md: 16 }, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                            From coal and coke to ores, minerals, containers, project/heavy lifts, and agro cargo with dedicated gear and trained teams.
                        </Typography>
                    </Box>
                </Box>
            </Box>



            {/* ========================= MOBILE VIEW ========================= */}
            <Box sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",   // NOW THIS WORKS
                justifyContent: "center",
                // px: 1,
                position: "relative",
                fontFamily: 'IBM Plex Sans', fontWeight: '400',
            }}>

                {/* IMAGE WRAPPER (relative) */}
                <Box
                    sx={{
                        width: "100%",
                        position: "relative",
                        // borderRadius: "8px",
                        overflow: "hidden",
                    }}
                >
                    {/* MOBILE TOP IMAGE */}
                    <Box
                        component="img"
                        src={AchievementsMobileImg}
                        alt="Achievements top"
                        sx={{
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    {/* GRADIENT OVERLAY */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: 'linear-gradient(180deg, black 0%, rgba(102, 102, 102, 0) 100%)',
                            zIndex: 2,
                        }}
                    />

                    {/* TITLE OVER IMAGE */}
                    <Typography
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontWeight: 700,
                            fontSize: 20,
                            textAlign: "center",
                            zIndex: 3,
                        }}
                    >
                        Achievements & milestones
                    </Typography>
                </Box>

                {/* CENTER WHITE CARD */}
                <Box
                    sx={{
                        bgcolor: "white",
                        p: 3,
                        borderRadius: "10px",
                        width: "90%",
                        textAlign: "center",
                        mt: -4,                     // Lifts card over image
                        mb: 1,
                        position: "relative",
                        zIndex: 4,                  // Above gradient + image
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                >
                    <Typography sx={{ fontSize: 26, fontWeight: 700 ,fontFamily: 'IBM Plex Sans',color: '#1B335B',}}>2019</Typography>
                    <Typography sx={{ fontSize: 15, mt: 1, lineHeight: 1.5 ,fontFamily: 'IBM Plex Sans', fontWeight: '400',color: '#1B335B',}}>
                        OTO is founded, built on an entrepreneurial mandate to own
                        the port-to-plant link.
                    </Typography>
                </Box>

                {/* MOBILE STACK CARDS */}
                {[
                    {
                        title: "Stevedoring license at Visakhapatnam",
                        text: "Enabling integrated pier-to-plant control.",
                    },
                    {
                        title: "Cargo capability expansion",
                        text: "From coal and coke to ores, minerals, containers, project/heavy lifts, and agro cargo with dedicated gear and trained teams.",
                    },
                    {
                        title: "East Coast operating footprint",
                        text: "Active across Visakhapatnam, Gangavaram, and other prominent ports with multimodal capability.",
                    },
                    {
                        title: "Process and tech",
                        text: "GPS tracking and safety sealing adopted at scale; emphasis on fuel optimization and carbon-conscious routing.",
                    },
                ].map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                            color: "white",
                            width: "90%",
                            p: 2,
                            mt: 1,
                            textAlign:"center",
                            borderRadius: "10px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        <Typography fontWeight={700} sx={{fontFamily: 'IBM Plex Sans',}}>{item.title}</Typography>
                        <Typography sx={{fontFamily: 'IBM Plex Sans', fontWeight: '400', fontSize: 14, mt: 1 }}>{item.text}</Typography>
                    </Box>
                ))}
            </Box>

        </Box>
    );
}
