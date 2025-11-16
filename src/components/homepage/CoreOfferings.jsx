import React from "react";
import { Box, Typography } from "@mui/material";

export default function CoreOfferings() {
    const data = [
        {
            number: 1,
            title: "Long-distance bulk transportation",
            description:
                "Long-distance bulk transportation in trucks, trailers, and tippers; intra-plant movement and coal-yard management.",
        },
        {
            number: 2,
            title: "Stevedoring & Port Handling",
            description: (
                <>
                    At Visakhapatnam, we deliver full-spectrum stevedoring services –
                    specialising in bulk cargo dealing, high-discharge-rate operations,
                    and seamless movement, coordination with port authorities.
                    <br />
                    <br />
                    Our differentiated value propositions include:
                    <ul style={{ marginTop: "8px", paddingLeft: "20px", }}>
                        <li style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                            <strong>Bulk-cargo expertise:</strong> handling coal, minerals and
                            other heavy commodities with precision and operational rigor.
                        </li>
                        <li style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                            <strong>Optimised discharge rate:</strong> engineered workflows and
                            equipment ensure rapid and predictable vessel turnaround, minimising
                            berth time.
                        </li>
                        <li style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                            <strong>Zero demurrage focus:</strong> proactive planning, berth
                            readiness and liaison with terminal and rail logistics ensure demurrage
                            is mitigated.
                        </li>
                        <li style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                            <strong>Secured storage & custom-bonding:</strong> dedicated bonded
                            yards and secure storage facilities ensure integrity of cargo and
                            regulatory compliance. 24×7 CCTV surveillance along with trained
                            security guards.
                        </li>
                        <li style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                            <strong>CHA services & authorities liaison:</strong> we provide Custom
                            House Agent (CHA) activities, document clearance and direct coordination
                            with port trust and terminals for smooth cargo flow.
                        </li>
                    </ul>
                    Proximity to group stevedoring and transport operations enables faster cargo
                    evacuation and predictable arrivals, strengthening our delivery assurance and end-to-end
                    logistics capabilities across India’s industrial supply chain.
                </>
            ),
        },
        {
            number: 3,
            title: "Rake operations",
            description:
                "including loading, unloading, and sealing; tarpaulin cover for trucks and rakes.",
        },
        {
            number: 4,
            title: "Rail cum Road Transportation (RCR)",
            description:
                "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        },
        {
            number: 5,
            title: "Multimodal logistics",
            description:
                "vessel discharge to inland destination, rake programs, and inland waterways where viable.",
        },
        {
            number: 6,
            title: "Cargo breadth",
            description:
                "coal, coke, manganese ore, gypsum, iron-ore fines, stone aggregates, containers, project and heavy-lift cargo, agro products, minerals, and metals.",
        },
        {
            number: 7,
            title: "Equipment & infra",
            description:
                "loaders, forklifts, hydra machines, shore cranes, dumpers; access to port-based warehouses and packaging machinery.",
        },
        {
            number: 8,
            title: "Control & safety",
            description:
                "GPS tracking, safety sealing, supervised loading/unloading with lifting, lashing, and securing protocols.",
        },
    ];

    return (
        <Box sx={{ width: "100%", mt: 4, mb: 6, background: "#EEF5FF", p: 3 }}>
            {/* Title */}
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "30px" },
                    fontWeight: 700,
                    color: "#1B335B",
                    mb: 3,
                    fontFamily: "Inter",
                }}
            >
                Core offerings
            </Typography>

            {/* Items */}
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
                {data.map((item) => (
                    <Box
                        key={item.number}
                        sx={{

                            borderRadius: "8px",
                            p: { xs: 2, md: 0 },
                            display: "flex",
                            gap: 2,
                        }}
                    >
                        {/* Number badge */}
                        <Box
                            sx={{
                                width: "32px",
                                height: "32px",
                                fontFamily: 'Inter',
                                bgcolor: "#dde6f1",
                                color: "#455F76",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                                fontSize: "14px",
                                flexShrink: 0,
                            }}
                        >
                            {item.number}
                        </Box>

                        {/* Text */}
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "15px", md: "18px" },
                                    color: "#1B335B",
                                    mb: 0.5,
                                    fontFamily: "Inter",
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "13px", md: "16px" },
                                    lineHeight: 1.55,
                                    color: "#1B335B",
                                    fontFamily: "Inter",
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
