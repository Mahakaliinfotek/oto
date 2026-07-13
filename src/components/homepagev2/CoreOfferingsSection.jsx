import { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import ScrollStackCards from "../Animations/ScrollStackCards";

const MotionBox = motion.create(Box);

const offerings = [
    {
        id: "long-distance",
        title: "Long-distance bulk transportation",
        description:
            "Long-distance bulk transportation in trucks, trailers, & tippers; intra-plant movement & coal-yard management.",
        icon: "/homePage/truck.webp",
    },
    {
        id: "rake-operations",
        title: "Rake operations",
        description:
            "Rake operations including loading, unloading, and sealing tarpaulin cover for trucks and rakes.",
        icon: "/homePage/train.webp",
    },
    {
        id: "multimodal-logistics",
        title: "Multimodal logistics",
        description:
            "Vessel discharge to inland destination, rake programs, and inland waterways where viable.",
        icon: "/homePage/ship-globe.webp",
    },
    {
        id: "cargo-breadth",
        title: "Cargo breadth",
        description:
            "Coal, coke, manganese ore, iron-ore fines, stone aggregates, containers, project & heavy-lift cargo, agro products, minerals, & metals.",
        icon: "/homePage/ship.webp",
    },
    {
        id: "rail-road",
        title: "Rail cum Road Transportation",
        description:
            "We transport coal from mines to nearest railway siding/PFT, seamless rack loading, & deliver it to the customer’s destination station, ensuring strict quality control & operational efficiency at every stage.",
        icon: "/homePage/rail-road.webp",
    },
    {
        id: "equipment-infra",
        title: "Equipment & infra",
        description:
            "Loaders, forklifts, hydra machines, shore cranes, dumpers, port-based warehouses, and packaging machinery.",
        icon: "/homePage/equipment-infra.webp",
    },
    {
        id: "control-safety",
        title: "Control & safety",
        description:
            "We transport coal from mines to the nearest railway siding/PFT, seamless rack loading, and deliver it to the customer’s destination station, ensuring strict quality control and operational efficiency at every stage.",
        icon: "/homePage/control-safety.webp",
        featured: true,
    },
];

export default function CoreOfferingsSection() {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                bgcolor: "#1C3A65",
                color: "#FFFFFF",
                overflow: {
                    xs: "visible",
                    md: "hidden",
                },
                pt: {
                    xs: 5,
                    md: 8,
                },
                pb: {
                    xs: 8,
                    md: 8,
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
                {/* Heading */}
                <Box
                    sx={{
                        maxWidth: {
                            xs: "330px",
                            md: "100%",
                        },
                        mx: {
                            xs: "auto",
                            md: 0,
                        },
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                        mb: {
                            xs: 3.5,
                            md: 6,
                        },
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: {
                                xs: "21px",
                                md: "40px",
                            },
                            lineHeight: 1.2,
                            fontWeight: 800,
                            mb: {
                                xs: 1,
                                md: 1.5,
                            },
                        }}
                    >
                        Core Offerings
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: {
                                xs: "310px",
                                md: "1100px",
                            },
                            mx: {
                                xs: "auto",
                                md: 0,
                            },
                            fontSize: {
                                xs: "12px",
                                md: "16px",
                            },
                            lineHeight: {
                                xs: 1.45,
                                md: 1.5,
                            },
                            color: "rgba(255,255,255,0.92)",
                        }}
                    >
                        Our diverse service portfolio is designed to provide seamless
                        end-to-end logistics support, from source movement to final
                        destination delivery.
                    </Typography>
                </Box>

                {/* Desktop grid */}
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "grid",
                        },
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: 3,
                    }}
                >
                    {offerings.map((offering) => (
                        <OfferingCard
                            key={offering.id}
                            offering={offering}
                            desktop
                        />
                    ))}
                </Box>

                {/* Mobile scroll-stacked cards */}
                <Box
                    sx={{
                        display: {
                            xs: "block",
                            md: "none",
                        },
                        position: "relative",
                    }}
                >
                    <ScrollStackCards
                        items={offerings}
                        stickyTop={{
                            xs: 50,
                            sm: 50,
                        }}
                        cardTopOffset={{
                            xs: 0,
                            sm: 0,
                        }}
                        scaleStep={0.02}
                        cardViewportHeight={{
                            xs: "100%",
                            // sm: "66vh",
                        }}
                        renderItem={(offering) => (
                            <OfferingCard offering={offering} />
                        )}
                    />
                </Box>
            </Container>
        </Box>
    );
}



function OfferingCard({ offering, desktop = false }) {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: desktop
                    ? offering.featured
                        ? "122px"
                        : "120px"
                    : "auto",

                gridColumn:
                    desktop && offering.featured
                        ? "1 / -1"
                        : "auto",

                width:
                    desktop && offering.featured
                        ? "72%"
                        : "100%",

                justifySelf:
                    desktop && offering.featured
                        ? "center"
                        : "stretch",

                display: "flex",
                alignItems: "flex-start",

                border: "1px solid rgba(190, 213, 241, 0.65)",
                borderRadius: {
                    xs: "8px",
                    md: "17px",
                },

                px: {
                    xs: 3.6,
                    sm: 4,
                    md: 5.5,
                },
                pt: {
                    xs: 3.1,
                    md: 3.1,
                },
                pb: {
                    xs: 2.6,
                    md: 2.8,
                },

                background:
                    "linear-gradient(110deg, rgba(31,61,101,0.98) 0%, rgba(54,79,113,0.96) 100%)",

                boxShadow: {
                    xs: "0 12px 28px rgba(5, 18, 40, 0.18)",
                    md: "none",
                },

                transformOrigin: "center",
                transition:
                    "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease, background 300ms ease",

                "&:hover": {
                    transform: {
                        xs: "none",
                        md: "translateY(-7px) scale(1.015)",
                    },
                    borderColor: {
                        xs: "rgba(190,213,241,0.65)",
                        md: "#FFFFFF",
                    },
                    boxShadow: {
                        xs: "0 12px 28px rgba(5,18,40,0.18)",
                        md: "0 18px 38px rgba(4,17,38,0.3)",
                    },
                    background: {
                        xs:
                            "linear-gradient(110deg, rgba(31,61,101,0.98) 0%, rgba(54,79,113,0.96) 100%)",
                        md:
                            "linear-gradient(115deg, #294C78 0%, #46658B 100%)",
                    },

                    "& .offering-icon": {
                        bgcolor: "#FF8A16",
                        transform: {
                            xs: "none",
                            md: "translate(-5px, -5px) rotate(-12deg) scale(1.08)",
                        },
                        boxShadow: {
                            xs: "none",
                            md: "0 8px 18px rgba(255,138,22,0.3)",
                        },
                    },

                    "& .offering-icon-image": {
                        transform: {
                            xs: "none",
                            md: "scale(1.08)",
                        },
                        filter:"none",
                    },
                },
            }}
        >
            {/* Icon overlapping the card border */}
            <Box
                className="offering-icon"
                sx={{
                    position: "absolute",
                    top: {
                        xs: "-9px",
                        md: "-8px",
                    },
                    left: {
                        xs: "-8px",
                        md: "-9px",
                    },

                    width: {
                        xs: 36,
                        md: 42,
                    },
                    height: {
                        xs: 36,
                        md: 42,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    bgcolor: {
                        xs: "#FF8A16",
                        md: "#FFFFFF",
                    },
                    borderRadius: {
                        xs: "9px",
                        md: "7px",
                    },

                    transformOrigin: "center",
                    transition:
                        "transform 300ms ease, background-color 300ms ease, box-shadow 300ms ease",
                }}
            >
                <Box
                    className="offering-icon-image"
                    component="img"
                    src={offering.icon}
                    alt=""
                    sx={{
                        width: {
                            xs: 40,
                            md:40,
                        },
                        height: {
                            xs: 40,
                            md: 40,
                        },
                        objectFit: "contain",
                        transition: "transform 300ms ease",
                        filter:desktop?"invert(1) brightness(0)":"none",
                    }}
                />
            </Box>

            <Box sx={{ width: "100%" }}>
                <Typography
                    component="h3"
                    sx={{
                        fontSize: {
                            xs: "14px",
                            sm: "15px",
                            md: "16px",
                        },
                        lineHeight: 1.3,
                        fontWeight: {xs:400,md:600},
                        mb: {
                            xs: 1,
                            md: 1.5,
                        },
                    }}
                >
                    {offering.title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: {
                            xs: "12px",
                            sm: "13px",
                            md: "13px",
                        },
                        lineHeight: {
                            xs: 1.38,
                            md: 1.45,
                        },
                        color: "rgba(255,255,255,0.95)",
                    }}
                >
                    {offering.description}
                </Typography>
            </Box>
        </Box>
    );
}

// function MobileOfferingStack({ offerings }) {
//     const stackRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: stackRef,
//         offset: ["start start", "end end"],
//     });

//     return (
//         <Box
//             ref={stackRef}
//             sx={{
//                 display: {
//                     xs: "block",
//                     md: "none",
//                 },
//                 position: "relative",

//                 /*
//                  * Controls how much scrolling is available.
//                  * Increase this value for slower stacking.
//                  */
//                 height: {
//                     xs: `${offerings.length * 62}vh`,
//                     sm: `${offerings.length * 52}vh`,
//                 },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: {
//                         xs: "block",
//                         md: "none",
//                     },
//                     position: "relative",
//                 }}
//             >
//                 <ScrollStackCards
//                     items={offerings}
//                     stickyTop={{
//                         xs: 90,
//                         sm: 105,
//                     }}
//                     cardTopOffset={{
//                         xs: 0,
//                         sm: 0,
//                     }}
//                     scaleStep={0.02}
//                     cardViewportHeight={{
//                         xs: "72vh",
//                         sm: "66vh",
//                     }}
//                     renderItem={(offering) => (
//                         <OfferingCard offering={offering} />
//                     )}
//                 />
//             </Box>
//         </Box>
//     );
// }

function ScrollStackCard({
    offering,
    index,
    totalCards,
    scrollProgress,
}) {
    /*
     * Card 1 is visible immediately.
     *
     * Every later card begins below the sticky area and moves upward
     * during its assigned part of the section scroll.
     */
    const start =
        index === 0 ? 0 : (index - 1) / (totalCards - 1);

    const end =
        index === 0 ? 0 : index / (totalCards - 1);

    const y = useTransform(
        scrollProgress,
        index === 0 ? [0, 0.01] : [start, end],
        index === 0 ? ["0%", "0%"] : ["115%", "0%"]
    );

    /*
     * Slightly reduce the previous card while the next card arrives.
     * The next card still completely covers it.
     */
    const scaleStart =
        index / (totalCards - 1);

    const scaleEnd =
        index === totalCards - 1
            ? 1
            : (index + 1) / (totalCards - 1);

    const scale = useTransform(
        scrollProgress,
        index === totalCards - 1
            ? [0, 1]
            : [scaleStart, scaleEnd],
        index === totalCards - 1
            ? [1, 1]
            : [1, 0.97]
    );

    return (
        <MotionBox
            style={{
                y,
                scale,
            }}
            sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                zIndex: index + 1,
                transformOrigin: "center top",
                willChange: "transform",
            }}
        >
            <OfferingCard offering={offering} />
        </MotionBox>
    );
}