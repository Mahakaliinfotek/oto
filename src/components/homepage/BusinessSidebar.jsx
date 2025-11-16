import React from "react";
import { Box, List, ListItemButton, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function BusinessSidebar({ scrollToSection }) {
    return (
        <Box
            sx={{
                width: { xs: "100%", md: "260px" },
                position: { md: "sticky" },
                top: { md: "10px" },
                alignSelf: "flex-start",
                bgcolor: "#16345b",                 // Updated color
                borderRadius: "0 12px 12px 0",      // Rounded right side only
                color: "white",
                px: 0,
                py: 2,
                mb: { xs: 3, md: 0 },
                fontFamily: "Inter",
            }}
        >
            <List sx={{ p: 0 }}>

                {/* Business Focus */}
                <ListItemButton
                    sx={{
                        py: 1.2,
                        fontWeight: 700,
                        fontSize: "16px",
                    }}
                    onClick={() => scrollToSection("business-focus")}
                >
                    Business focus
                    <KeyboardArrowRightIcon sx={{ ml: "auto", fontSize: 20 }} />
                </ListItemButton>

                <DividerLine />

                {/* Core Offerings */}
                <ListItemButton
                    sx={{
                        py: 1.2,
                        fontWeight: 600,
                        fontSize: "15px",
                    }}
                    onClick={() => scrollToSection("core-offerings")}
                >
                    Core offerings
                    <KeyboardArrowRightIcon sx={{ ml: "auto", fontSize: 20 }} />
                </ListItemButton>

                <DividerLine />

                {/* What Makes Us Different */}
                <ListItemButton
                    sx={{
                        py: 1.2,
                        fontWeight: 600,
                        fontSize: "15px",
                    }}
                    onClick={() => scrollToSection("usps")}
                >
                    What makes us different (USPs)
                    <KeyboardArrowRightIcon sx={{ ml: "auto", fontSize: 20 }} />
                </ListItemButton>

                <DividerLine />

                {/* Achievements */}
                <ListItemButton
                    sx={{
                        py: 1.2,
                        fontWeight: 600,
                        fontSize: "15px",
                    }}
                    onClick={() => scrollToSection("achievements")}
                >
                    Achievements & milestones
                    <KeyboardArrowRightIcon sx={{ ml: "auto", fontSize: 20 }} />
                </ListItemButton>

                <DividerLine />

                {/* Clients */}
                <ListItemButton
                    sx={{
                        py: 1.2,
                        fontWeight: 600,
                        fontSize: "15px",
                    }}
                    onClick={() => scrollToSection("clients")}
                >
                    Clients
                    <KeyboardArrowRightIcon sx={{ ml: "auto", fontSize: 20 }} />
                </ListItemButton>

            </List>
        </Box>
    );
}

/* Divider component for clean repeating style */
const DividerLine = () => (
    <Box
        sx={{
            width: "100%",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.2)",
            my: 1,
        }}
    />
);
