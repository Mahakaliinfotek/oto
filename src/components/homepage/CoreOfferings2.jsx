import React from "react";
import { Box, Typography } from "@mui/material";
import Icon1 from "../../assets/oto/BulkCargo.png"
import Icon2 from "../../assets/oto/Discharge.png"
import Icon3 from "../../assets/oto/Demurrage.png"
import Icon4 from "../../assets/oto/Security.png"
import Icon5 from "../../assets/oto/CHA.png"
const styles = {
    labelHeader: {
        fontWeight: 700,
        fontSize: { xs: "14px", md: "23px" },
        mb: 0.5,
        // mt:1
    },
    labelDescription: {
        fontSize: { xs: "12px", md: "20px" },
        // textAlign:"justify"


    }
}
export default function CoreOfferings2() {
    // Top section items
    const topItems = [
        {
            title: "Long-distance bulk transportation",
            desc: "Long-distance bulk transportation in trucks, trailers, and tippers intra-plant movement and coal-yard management.",
        },
        {
            title: "Rake operations",
            desc: "Rake operations including loading, unloading, and sealing tarpaulin cover for trucks and rakes.",
        },
        {
            title: "Rail cum Road Transportation (RCR)",
            desc: "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        },
        {
            title: "Multimodal logistics",
            desc: "Vessel discharge to inland destination, rake programs, and inland waterways where viable.",
        },
        {
            title: "Equipment & infra",
            desc: "Loaders, forklifts, hydra machines,shore cranes,dumpers access port-based warehouses, packaging machinery.",
        },
        {
            title: "Cargo breadth",
            desc: "Coal, coke, manganese ore, gypsum, iron-ore fines, stone aggregates, containers, project and heavy-lift cargo, agro products, minerals, and metals.",
        },
        {
            title: "Control & safety",
            desc: "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        },
    ];
    const topItemsM = [
        {
            title: "Long-distance bulk transportation",
            desc: "Long-distance bulk transportation in trucks, trailers, and tippers intra-plant movement and coal-yard management.",
        },

        {
            title: "Rail cum Road Transportation (RCR)",
            desc: "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        },
        {
            title: "Control & safety",
            desc: "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        },


        {
            title: "Rake operations",
            desc: "Rake operations including loading, unloading, and sealing tarpaulin cover for trucks and rakes.",
        },
        {
            title: "Multimodal logistics",
            desc: "Vessel discharge to inland destination, rake programs, and inland waterways where viable.",
        },
        {
            title: "Cargo breadth",
            desc: "Coal, coke, manganese ore, gypsum, iron-ore fines, stone aggregates, containers, project and heavy-lift cargo, agro products, minerals, and metals.",
        },

        {
            title: "Equipment & infra",
            desc: "Loaders, forklifts, hydra machines,shore cranes,dumpers access port-based warehouses, packaging machinery.",
        },
    ];

    // Bottom 5 value proposition cards
    const valueCards = [
        {
            icon: Icon1,
            title: "Control & safety",
            desc: "We transport coal from mines to the nearest railway siding/PFT and deliver with strict quality control."
        },
        {
            icon: Icon2,
            title: "Optimised discharge rate",
            desc: "Engineered workflows & equipment ensure rapid and predictable vessel turnaround."
        },
        {
            icon: Icon3,
            title: "Zero demurrage focus",
            desc: "Proactive planning & seamless terminal coordination minimise demurrage."
        },
        {
            icon: Icon4,
            title: "CHA services & liaison",
            desc: "We provide CHA documentation, clearance & coordination with terminals."
        },
        {
            icon: Icon5,
            title: "Secured storage & customs",
            desc: "Bonded yards, secure storage, CCTV surveillance, trained security guards."
        }
    ];

    return (
        <Box sx={{ width: "100%", pb: 6 }}>

            {/* TITLE */}
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "30px" },
                    fontWeight: 700,
                    color: "#1B335B",
                    mb: 3,
                    fontFamily: "Inter",
                    textAlign: { xs: "center", md: "left" }
                }}
            >
                Core offerings
            </Typography>

            {/* TOP SECTION */}
            <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", gap: { xs: 1.5, md: 2 }, alignItems: "stretch" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 1.5, md: 2 },
                        alignItems: "stretch"

                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", flex: 0.7, gap: 2, alignItems: "stretch" }}>
                        {topItems.slice(0, 1).map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: "#E8EEF5",
                                    p: 2,
                                    borderRadius: "8px",
                                    minHeight: "120px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: "14px", md: "16px" },
                                        color: "#1B335B",
                                        mb: 0.5,
                                        ...styles.labelHeader
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "12px", md: "14px" },
                                        color: "#1B335B",
                                        lineHeight: 1.4,
                                        ...styles.labelDescription
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "stretch" }}>
                            <Box sx={{ flex: 0.5 }}>
                                {topItems.slice(2, 3).map((item, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            bgcolor: "#1B335B",
                                            // bgcolor: "#E8EEF5",

                                            p: 2,
                                            borderRadius: "8px",
                                            minHeight: "120px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                            height: "100%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: { xs: "14px", md: "16px" },
                                                color: "white",
                                                mb: 2,
                                                ...styles.labelHeader
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "12px", md: "14px" },
                                                color: "white",
                                                lineHeight: 1.4,
                                                ...styles.labelDescription
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 0.5, gap: 2, alignItems: "stretch" }}>
                                {topItems.slice(3, 4).map((item, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            bgcolor: "white",
                                            // bgcolor: "#E8EEF5",

                                            p: 2,
                                            borderRadius: "8px",
                                            minHeight: "120px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                            height: "100%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: { xs: "14px", md: "16px" },
                                                color: "#1B335B",
                                                mb: 0.5,
                                                ...styles.labelHeader
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "12px", md: "14px" },
                                                color: "#1B335B",
                                                lineHeight: 1.4,
                                                ...styles.labelDescription
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                ))}
                                {topItems.slice(4, 5).map((item, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            bgcolor: "white",
                                            // bgcolor: "#E8EEF5",

                                            p: 2,
                                            borderRadius: "8px",
                                            minHeight: "120px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                            height: "100%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: { xs: "14px", md: "16px" },
                                                color: "#1B335B",
                                                mb: 0.5,
                                                ...styles.labelHeader
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "12px", md: "14px" },
                                                color: "#1B335B",
                                                lineHeight: 1.4,
                                                ...styles.labelDescription
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", flex: 0.3, gap: 2, alignItems: "stretch" }}>

                        {topItems.slice(1, 2).map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: "#1B335B",
                                    // bgcolor: "#E8EEF5",

                                    p: 2,
                                    borderRadius: "8px",
                                    minHeight: "120px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: "14px", md: "16px" },
                                        color: "white",
                                        mb: 0.5,
                                        ...styles.labelHeader
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "12px", md: "14px" },
                                        color: "white",
                                        lineHeight: 1.4,
                                        ...styles.labelDescription
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                        {topItems.slice(5, 6).map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    // bgcolor: "#1B335B",
                                    bgcolor: "#E8EEF5",

                                    p: 2,
                                    borderRadius: "8px",
                                    minHeight: "120px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: "14px", md: "16px" },
                                        color: "#1B335B",
                                        mb: 0.5,
                                        ...styles.labelHeader
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "12px", md: "14px" },
                                        color: "#1B335B",
                                        lineHeight: 1.4,
                                        ...styles.labelDescription
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
                <Box >
                    {topItems.slice(6, 7).map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                // bgcolor: "#1B335B",
                                bgcolor: "#E8EEF5",

                                p: 2,
                                borderRadius: "8px",
                                minHeight: "120px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.20)',
                                height: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: "#1B335B",
                                    mb: 0.5,
                                    ...styles.labelHeader
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", md: "14px" },
                                    color: "#1B335B",
                                    lineHeight: 1.4,
                                    ...styles.labelDescription
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            {/* BOTTOM DARK SECTION DESKTOP*/}
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    mt: 4,
                    bgcolor: "#1B335B",
                    borderRadius: "12px",
                    p: { xs: 2.5, md: 4 },
                    flexDirection:"column",
                    color: "#fff",
                }}
            >
                {/* Heading */}
                <Typography
                    sx={{
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 700,
                        mb: 1.5,
                        fontFamily: "Inter",
                        
                    }}
                >
                    Stevedoring & Port Handling
                </Typography>

                {/* Subtext */}
                <Typography
                    sx={{
                        fontSize: { xs: "12px", md: "22px" },
                        opacity: 0.9,
                        mb: 8,
                        fontFamily: "Inter",
                        // maxWidth: "900px",
                    }}
                >
                    At Visakhapatnam, we deliver full-spectrum stevedoring services – specialising in bulk cargo dealing,
                    high-discharge-rate operations, and seamless movement, coordination with port authorities.
                    Our differentiated value propositions include:
                </Typography>

                {/* VALUE PROPOSITION CARDS */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 2 },
                        justifyContent: "space-between",
                        flexWrap: { xs: "nowrap", md: "wrap" },
                    }}
                >
                    {valueCards.map((card, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    md: "1 1 calc(20% - 16px)"  // 5 cards in one row on desktop
                                },
                                bgcolor: "#E8EEF5",
                                color: "#1B335B",
                                borderRadius: "8px",
                                p: { xs: 2, md: 2.5 },
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
                                minHeight: { xs: "auto", md: "210px" },
                                position: "relative"
                            }}
                        >
                            {/* ICON SECTION */}
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    bgcolor: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // mb: 1.2,
                                    position: "absolute",
                                    top: "-15%",
                                    left: "33%"
                                }}
                            >
                                <Box
                                    component="img"
                                    src={card.icon}
                                    alt="icon"
                                    sx={{
                                        width: 45,
                                        height: 45,
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "13px", md: "18px" },
                                    mb: 0.8,
                                    lineHeight: 1.3,
                                    fontFamily: "Inter",
                                    mt: 2
                                }}
                            >
                                {card.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", md: "16px" },
                                    color: "#1B335B",
                                    opacity: 0.9,
                                    lineHeight: 1.4,
                                    fontFamily: "Inter",
                                }}
                            >
                                {card.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Bottom paragraph */}
                <Typography
                    sx={{
                        mt: 3,
                        fontSize: { xs: "12px", md: "22px" },
                        opacity: 0.9,
                        fontFamily: "Inter",
                        lineHeight: 1.5,
                        fontWeight: 600
                    }}
                >
                    Proximity to group stevedoring and transport operations enables faster cargo evacuation and predictable
                    arrivals, strengthening our delivery assurance and end-to-end logistics capabilities across India’s
                    industrial supply chain.
                </Typography>
            </Box>
            {/* MOBILE CORE OFFERRINGS */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    flexDirection: "row",
                    gap: 2,
                    mt: 2,
                    alignItems: "stretch",
                }}
            >
                {/* LEFT COLUMN (3 cards) */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        flex: 1,
                        height: "100%",
                    }}
                >
                    {topItemsM.slice(0, 3).map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                bgcolor: idx === 0 ? "#1B335B" : (idx === 1 ? "#fff" : "#E8EEF5"),
                                color: idx === 0 ? "#fff" : "#1B335B",
                                p: 2,
                                borderRadius: "6px",
                                minHeight: "160px",
                                boxShadow: "0px 4px 8px rgba(0,0,0,0.12)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "13px",
                                    textAlign: "center",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "11px",
                                    mt: 0.5,
                                    textAlign: "center",
                                    opacity: 0.95,
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* RIGHT COLUMN (4 cards) */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        flex: 1,
                        height: "100%",
                    }}
                >
                    {topItemsM.slice(3, 7).map((item, idx) => {
                        const isDark = item.title === "Multimodal logistics";

                        return (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: isDark ? "#1B335B" : (idx === 3 ? "#fff" : "#E8EEF5"),
                                    color: isDark ? "#fff" : "#1B335B",
                                    p: 2,
                                    borderRadius: "6px",
                                    minHeight: "120px",
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "13px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "11px",
                                        mt: 0.5,
                                        textAlign: "center",
                                        opacity: 0.95,
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
                        {/* BOTTOM DARK SECTION MOBILE*/}
            <Box
                sx={{
                   display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    mt: 3,
                    bgcolor: "#1B335B",
                    borderRadius: "12px",
                    p: 2.5,
                    color: "white",
                }}
            >
                {/* Title */}
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 1,
                        fontFamily: "Inter",
                    }}
                >
                    Stevedoring & Port Handling
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        fontSize: "14.5px",
                        lineHeight: 1.45,
                        opacity: 0.9,
                        textAlign: "center",
                        mb: 3,
                        fontFamily: "Inter",
                    }}
                >
                    At Visakhapatnam, we deliver full-spectrum stevedoring services – specialising
                    in bulk cargo dealing, high-discharge-rate operations, and seamless movement,
                    coordination with port authorities. Our differentiated value propositions include:
                </Typography>

                {/* CARDS SECTION */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                    }}
                >
                    {/* LEFT COLUMN */}
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 5.5 }}>
                        {valueCards.slice(0, 2).map((card, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: "#E8EEF5",
                                    color: "#1B335B",
                                    p: 2,
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    gap: 1,
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        bgcolor: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt:-5
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={card.icon}
                                        alt=""
                                        sx={{ width: 30, height: 30 }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "13px",
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "11px",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {card.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* RIGHT COLUMN */}
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                        {valueCards.slice(2, 4).map((card, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: "#E8EEF5",
                                    color: "#1B335B",
                                    p: 2,
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    gap: 1,
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        bgcolor: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                         mt:-5
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={card.icon}
                                        alt=""
                                        sx={{ width: 30, height: 30 }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "13px",
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "11px",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {card.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* FULL-WIDTH LAST CARD */}
                <Box
                    sx={{
                        mt: 5,
                        bgcolor: "#E8EEF5",
                        color: "#1B335B",
                        p: 2,
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 1,
                    }}
                >
                    {/* Icon */}
                    <Box
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            bgcolor: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                             mt:-5
                        }}
                    >
                        <Box
                            component="img"
                            src={valueCards[4].icon}
                            alt=""
                            sx={{ width: 30, height: 30 }}
                        />
                    </Box>

                    <Typography sx={{ fontWeight: 700, fontSize: "13px" }}>
                        {valueCards[4].title}
                    </Typography>

                    <Typography sx={{ fontSize: "11px", lineHeight: 1.4 }}>
                        {valueCards[4].desc}
                    </Typography>
                </Box>
                 {/* Bottom paragraph */}
                <Typography
                    sx={{
                        mt: 3,
                        fontSize: { xs: "14.5px", md: "22px" },
                        opacity: 0.9,
                        fontFamily: "Inter",
                        lineHeight: 1.5,
                        fontWeight: 600,
                        textAlign:"center"
                    }}
                >
                    Proximity to group stevedoring and transport operations enables faster cargo evacuation and predictable
                    arrivals, strengthening our delivery assurance and end-to-end logistics capabilities across India’s
                    industrial supply chain.
                </Typography>
            </Box>
        

        
        </Box>
    );
}
