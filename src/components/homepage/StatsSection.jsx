import React from "react";
import { Box, Typography } from "@mui/material";

export default function StatsSection() {
    const items = [
        {
            value: "2000",
            label: "Total no of truck",
            active: false,
        },
        {
            value: "68,938.15 mts",
            label: "Material supplied",
            active: true,     // highlighted card
        },
        {
            value: "6,839 km",
            label: "Total kms",
            active: false,
        },
        {
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
                gap: { xs: 2, md: 3 },
                my: 4,
            }}
        >
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        width: { xs: "47%", md: "22%" }, // 2 per row on mobile, 4 per row on desktop
                        bgcolor: item.active ? "#0a2540" : "#eef4ff",
                        color: item.active ? "#fff" : "#1b1b1b",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                        p: { xs: 2, md: 3 },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
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
