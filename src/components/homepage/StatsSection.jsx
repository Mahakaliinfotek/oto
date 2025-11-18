import React from "react";
import { Box, Typography } from "@mui/material";
import Icon1 from "../../assets/oto/truck-tick.png"
import Icon2 from "../../assets/oto/box-tick.png"
import Icon3 from "../../assets/oto/routing.png"
import Icon4 from "../../assets/oto/shield-tick.png"
export default function StatsSection() {
    const items = [
        {
            icon: Icon1,
            value: "2000",
            label: "Total no of truck",
            active: false,
        },
        {
            icon: Icon2,
            value: "68,938.15 mts",
            label: "Material supplied",
            active: true,     // highlighted card
        },
        {
            icon: Icon3,
            value: "6,839 km",
            label: "Total kms",
            active: false,
        },
        {
            icon: Icon4,
            value: "50",
            label: "Total rakes",
            active: false,
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                // gap: { xs: 4, md: 4 },
                rowGap: { xs: 4.5, md: 4 },      // vertical spacing
                columnGap: { xs: 2, md: 4 }, // horizontal spacing
                my: 3,
            }}
        >
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        width: { xs: "45%", md: "22%" }, // 2 per row on mobile, 4 per row on desktop
                        bgcolor: item.active ? "#0a2540" : "#E6EEFA",
                        color: item.active ? "#fff" : "#1b1b1b",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                        p: { xs: 2, md: 2 },
                        textAlign: "center",


                    }}
                >
                    {/* Icon */}
                    <Box
                        sx={{
                            width: { xs: 45, md: 60 },
                            height: { xs: 45, md: 60 },
                            borderRadius: "50%",
                            bgcolor: item.active ? "#E6EEFA" : "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            top: "-40px",   // move up safely
                            mx: "auto",     // horizontal centering
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                        }}
                    >
                        <Box
                            component="img"
                            src={item.icon}
                            alt=""
                            sx={{ width: 30, height: 30 }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            mt: "-30px",
                            fontSize: { xs: "16px", md: "22px" },
                            fontWeight: 700,
                            mb: 0.5,

                            fontFamily: "Inter",
                        }}
                    >
                        {item.value}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "11px", md: "14px" },
                            fontWeight: item.active ? 600 : 400,
                            opacity: item.active ? 0.95 : 0.8,
                            fontFamily: "Inter",
                        }}
                    >
                        {item.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
