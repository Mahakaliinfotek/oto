import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const fleetOwnerCards = [
    {
        id: "fleet-owners",
        title: "For fleet owners",
        description:
            "Spot advance payment & hassle free transactions. This fast, predictable settlement encourages bulk truck placement and long-term relationships.",
        icon: "/homePage/fleet-owner.webp",
        desktopOrder: 1,
        mobileOrder: 2,
    },
    {
        id: "shipment-integrity",
        title: "Shipment integrity by design",
        description:
            "Double-layer protection with tarpaulin and net covering, plus camera and GPS tracking. This gives route visibility and deters manipulation during transit.",
        icon: "/homePage/shipment.webp",
        desktopOrder: 2,
        mobileOrder: 3,
    },
    {
        id: "port-efficiency",
        title: "On-port efficiency",
        description:
            "Licensed stevedoring at Vizag combined with our equipment and trained crews to improve turnaround times and cargo quality.",
        icon: "/homePage/port-efficiently.webp",
        desktopOrder: 3,
        mobileOrder: 4,
    },
    {
        id: "cargo-security",
        title: "Cargo Security",
        description:
            "Standardized sealing, auditable hand-offs, and supervisor-led safety checks for consistent execution.",
        icon: "/homePage/cargo.webp",
        desktopOrder: 4,
        mobileOrder: 1,
    },
];

const clientCards = [
    {
        id: "client-reliability",
        title: "Reliable cargo movement",
        description:
            "Structured coordination, disciplined execution, and clear operational visibility across every stage of cargo movement.",
        icon: "/homePage/client-reliability.svg",
        desktopOrder: 1,
        mobileOrder: 1,
    },
    {
        id: "client-safety",
        title: "Safety-led operations",
        description:
            "Defined processes, trained teams, and regular checks help maintain operational safety and cargo integrity.",
        icon: "/homePage/client-safety.svg",
        desktopOrder: 2,
        mobileOrder: 2,
    },
    {
        id: "client-coordination",
        title: "End-to-end coordination",
        description:
            "Road, rail, port, and equipment operations are aligned through a single coordinated logistics workflow.",
        icon: "/homePage/client-coordination.svg",
        desktopOrder: 3,
        mobileOrder: 3,
    },
    {
        id: "client-execution",
        title: "Consistent execution",
        description:
            "Standardized operating methods help improve predictability, turnaround time, and service quality.",
        icon: "/homePage/client-execution.svg",
        desktopOrder: 4,
        mobileOrder: 4,
    },
];

export default function DifferenceSection() {
    const [activeTab, setActiveTab] = useState("fleet");

    const cards = activeTab === "fleet" ? fleetOwnerCards : clientCards;

    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 5.5,
                    md: 6.5,
                },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "center",
                            md: "center",
                        },
                        justifyContent: "space-between",
                        gap: {
                            xs: 3,
                            md: 4,
                        },
                        mb: {
                            xs: 3.2,
                            md: 4.3,
                        },
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            color: "#19365E",
                            fontSize: {
                                xs: "24px",
                                sm: "28px",
                                md: "40px",
                            },
                            lineHeight: 1.15,
                            fontWeight: 800,
                            letterSpacing: {
                                xs: "-0.3px",
                                md: "-0.8px",
                            },
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        What makes us different
                    </Typography>

                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "305px",
                            },
                            maxWidth: "305px",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            bgcolor: "#19365E",
                            borderRadius: "999px",
                            p: "5px",
                        }}
                    >
                        <Button
                            onClick={() => setActiveTab("fleet")}
                            disableRipple
                            sx={{
                                height: "43px",
                                borderRadius: "999px",
                                bgcolor: activeTab === "fleet" ? "#FFFFFF" : "transparent",
                                color: activeTab === "fleet" ? "#19365E" : "#FFFFFF",
                                fontSize: "14px",
                                lineHeight: 1,
                                fontWeight: 700,
                                textTransform: "none",
                                whiteSpace: "nowrap",

                                "&:hover": {
                                    bgcolor:
                                        activeTab === "fleet"
                                            ? "#FFFFFF"
                                            : "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            For Fleet Owners
                        </Button>

                        <Button
                            onClick={() => setActiveTab("clients")}
                            disableRipple
                            sx={{
                                height: "43px",
                                borderRadius: "999px",
                                bgcolor: activeTab === "clients" ? "#FFFFFF" : "transparent",
                                color: activeTab === "clients" ? "#19365E" : "#FFFFFF",
                                fontSize: "14px",
                                lineHeight: 1,
                                fontWeight: 700,
                                textTransform: "none",

                                "&:hover": {
                                    bgcolor:
                                        activeTab === "clients"
                                            ? "#FFFFFF"
                                            : "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            Clients
                        </Button>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(4, minmax(0, 1fr))",
                        },
                        gap: {
                            xs: 1.25,
                            md: 2,
                        },
                    }}
                >
                    {cards.map((card) => (
                        <Box
                            key={`${activeTab}-${card.id}`}
                            sx={{
                                order: {
                                    xs: card.mobileOrder,
                                    md: card.desktopOrder,
                                },
                                minHeight: {
                                    xs: "140px",
                                    md: "207px",
                                },
                                display: "flex",
                                flexDirection: {
                                    xs: "row",
                                    md: "column",
                                },
                                alignItems: "flex-start",
                                gap: {
                                    xs: 2.2,
                                    md: 2.3,
                                },
                                borderRadius: {
                                    xs: "9px",
                                    md: "18px",
                                },
                                px: {
                                    xs: 2.2,
                                    sm: 2.5,
                                    md: 3,
                                },
                                py: {
                                    xs: 2.3,
                                },
                                color: "#FFFFFF",
                                backgroundImage: {
                                    xs: "linear-gradient(110deg, #19365E 0%, #214C92 100%)",
                                    md: "linear-gradient(110deg, #19365E 0%, #19365E 100%)",
                                },
                                backgroundColor: "#19365E",
                                backgroundRepeat: "no-repeat",

                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease, background-image 0.3s ease",

                                "&:hover": {
                                    background: {
                                        xs: "linear-gradient(110deg, #19365E 0%, #214C92 100%)",
                                        md: "linear-gradient(110deg, #19365E 0%, #214C92 100%)",
                                    },
                                    transform: {
                                        xs: "none",
                                        md: "translateY(-2px)",
                                    },
                                    boxShadow: {
                                        xs: "none",
                                        md: "0 14px 28px rgba(25, 54, 94, 0.22)",
                                    },

                                    // Change icon wrapper background
                                    "& .difference-card-icon": {
                                        bgcolor: "#FF8A16",
                                        borderRadius: "10px",
                                        transform: {
                                            xs: "none",
                                            md: "translateY(-2px) scale(1.06)",
                                        },
                                    },

                                    // Small image animation
                                    "& .difference-card-icon-image": {
                                        transform: {
                                            xs: "none",
                                            md: "scale(1.08)",
                                        },
                                    },
                                },
                            }}
                        >
                            <Box
                                className="difference-card-icon"
                                sx={{
                                    width: {
                                        xs: 38,
                                        md: 45,
                                    },
                                    height: {
                                        xs: 38,
                                        md: 45,
                                    },
                                    flexShrink: 0,
                                    borderRadius: {
                                        xs: "10px",
                                        md: "8px",
                                    },
                                    bgcolor: {
                                        xs: "#FF8A16",
                                        md: "transparent",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    transition:
                                        "background-color 0.3s ease, transform 0.3s ease, border-radius 0.3s ease",
                                }}
                            >
                                <Box
                                    className="difference-card-icon-image"
                                    component="img"
                                    src={card.icon}
                                    alt=""
                                    sx={{
                                        width: {
                                            xs: 45,
                                            md: 45,
                                        },
                                        height: {
                                            xs: 45,
                                            md: 45,
                                        },
                                        objectFit: "contain",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontSize: {
                                            xs: "14px",
                                            md: "16px",
                                        },
                                        lineHeight: 1.3,
                                        fontWeight: {xs:500,md:700},
                                        mb: {
                                            xs: 1,
                                            md: 1.1,
                                        },
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "12px",
                                            md: "13.5px",
                                        },
                                        lineHeight: {
                                            xs: 1.42,
                                            md: 1.4,
                                        },
                                        fontWeight: 400,
                                        color: "rgba(255,255,255,0.96)",
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}