import React from "react";
import { Box, Typography } from "@mui/material";
import Icon1 from "../../assets/oto/truck-tickNA.png"
import Icon2A from "../../assets/oto/box-tickA.png"
import Icon3 from "../../assets/oto/routingNA.png"
import Icon4 from "../../assets/oto/shield-tickNA.png"

import Icon1A from "../../assets/oto/truck-tickA.png"
import Icon2 from "../../assets/oto/box-tickNA.png"
import Icon3A from "../../assets/oto/routingA.png"
import Icon4A from "../../assets/oto/shield-tickA.png"

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
export default function StatsSection() {

    const extractNumber = (value) => {
        const numberPart = value.match(/[\d,.]+/)[0];  // get only numeric portion
        return parseFloat(numberPart.replace(/,/g, ""));  // remove commas, keep decimals
    };
    const extractUnit = (value) => value.replace(/[\d.,\s]/g, "");
    const items = [
        {
            iconNA: Icon1,
            iconA: Icon1A,
            value: "2000",
            label: "Total no of truck",
            // active: false,
        },
        {
            iconA: Icon2A,
            iconNA: Icon2,
            value: "68,938.15 mts",
            label: "Material supplied",
            // active: true,     // highlighted card
        },
        {
            iconNA: Icon3,
            iconA: Icon3A,
            value: "6,839 km",
            label: "Total kms",
            // active: false,
        },
        {
            iconNA: Icon4,
            iconA: Icon4A,
            value: "50",
            label: "Total rakes",
            // active: false,
        },
    ];
    const [hoverIndex, setHoverIndex] = React.useState(null);

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
            {items.map((item, index) => {

                const { ref, inView } = useInView({
                    triggerOnce: true,    // animate only once
                    threshold: 0.3        // 30% visibility required
                });
                const isActive = hoverIndex === index;

                return (
                    <Box
                        key={index}
                        ref={ref}
                        sx={{
                            width: { xs: "45%", md: "22%" }, // 2 per row on mobile, 4 per row on desktop
                            bgcolor: isActive ? "#0a2540" : "#E6EEFA",
                            color: isActive ? "#fff" : "#1b1b1b",
                            borderRadius: "8px",
                            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                            p: { xs: 2, md: 2 },
                            textAlign: "center",


                        }}

                        // COMMENT: hover event listeners
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => setHoverIndex(index)}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                width: { xs: 45, md: 60 },
                                height: { xs: 45, md: 60 },
                                borderRadius: "50%",
                                bgcolor: isActive ? "#E6EEFA" : "#fff",
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
                                src={isActive ? item.iconA : item.iconNA}
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
                            {inView ? (
                                <CountUp
                                    start={extractNumber(item.value) - 60}
                                    end={extractNumber(item.value)}
                                    duration={4}
                                    decimals={item.value.includes('.') ? 2 : 0}
                                    separator=","
                                    suffix={` ${extractUnit(item.value)}`}
                                />
                            ) : (
                                // COMMENT: show 0 until visible
                                "0"
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "11px", md: "14px" },
                                fontWeight: isActive ? 600 : 400,
                                opacity: isActive ? 0.95 : 0.8,
                                fontFamily: "Inter",
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                )
            })}
        </Box>
    );
}
