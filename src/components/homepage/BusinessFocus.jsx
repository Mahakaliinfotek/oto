import React from "react";
import { Box, Typography } from "@mui/material";

// Images
import Img1 from "../../assets/oto/office.png";
import Img2 from "../../assets/oto/buildings.png";
import Img3 from "../../assets/oto/handshake.png";

export default function BusinessFocus() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 4 },
                width: "100%",
                mb: 8,
                mt: 2,
            }}
        >
            {/* ---------------- MOBILE TITLE (visible only on mobile) ---------------- */}
            <Typography
                sx={{
                    display: { xs: "block", md: "none" },
                   
                    fontWeight: 700,
                    mb: 0.5,
                    color: "#1B335B",
                    fontFamily: "IBM Plex Sans",
                    textAlign: "center",
                    fontSize:25
                }}
            >
                Business focus
            </Typography>

            {/* ---------------- IMAGE STACK (center on mobile, left on desktop) ---------------- */}
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "30%" },
                    height: { xs: "260px", md: "330px" },
                    minWidth: "260px",
                    mx: { xs: "auto", md: 0 }, // Center on mobile
                    order: { xs: 2, md: 1 },
                }}
            >
                {/* Image 1 */}
                <Box
                    component="img"
                    src={Img1}
                    sx={{
                        width: { xs: "180px", md: "240px" },
                        height: { xs: "180px", md: "240px" },
                        objectFit: "cover",
                        borderRadius: "8px",
                        position: "absolute",
                        top: 0,
                        left: { xs: "10%", md: 0 },
                        boxShadow: 2,
                    }}
                />

                {/* Image 2 */}
                <Box
                    component="img"
                    src={Img2}
                    sx={{
                        width: { xs: "180px", md: "230px" },
                        height: { xs: "180px", md: "230px" },
                        objectFit: "cover",
                        borderRadius: "8px",
                        position: "absolute",
                        top: { xs: "10%", md: "15%" },
                        left: { xs: "45%", md: "40%" },
                        zIndex: 2,
                        boxShadow: 2,
                    }}
                />

                {/* Image 3 */}
                <Box
                    component="img"
                    src={Img3}
                    sx={{
                        width: { xs: "220px", md: "300px" },
                        height: { xs: "140px", md: "200px" },
                        objectFit: "cover",
                        borderRadius: "8px",
                        position: "absolute",
                        top: { xs: "40%", md: "50%" },
                        left: { xs: "20%", md: "5%" },
                        boxShadow: 2,
                    }}
                />
            </Box>

            {/* ---------------- DESKTOP TITLE + TEXT BLOCK ---------------- */}
            <Box
                sx={{
                    flex: 1,
                    order: { xs: 3, md: 2 }, // Mobile: after images | Desktop: right side
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                {/* Desktop Title (hidden on mobile) */}
                <Typography
                    sx={{
                        display: { xs: "none", md: "block" },
                        fontSize: { xs: "22px", md: "30px" },
                        fontWeight: 700,
                        mb: 2,
                        color: "#1B335B",
                        fontFamily: "IBM Plex Sans",
                    }}
                >
                    Business focus
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        fontSize: { xs: "14px", md: "22px" },
                        lineHeight: 1.6,
                        fontFamily: "Inter",
                        fontWeight: 400,
                        color: "black",
                        textAlign: { xs: "justify", md: "left" },
                    }}
                >
                    OTO provides end-to-end bulk logistics on India’s East Coast:
                    long-haul road transport, multimodal movement, rake
                    loading/unloading, and licensed stevedoring at Visakhapatnam,
                    with operations across the hinterland of East Coast ports. We
                    handle import and export cargo with on-ground smooth operations,
                    equipment hiring and handling along with port coordination.
                </Typography>
            </Box>
        </Box>
    );
}
