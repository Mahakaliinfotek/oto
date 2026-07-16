import { Box, Container, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { motion } from "framer-motion";
import RevealAnimation from "../Animations/RevealAnimation";

const MotionBox = motion.create(Box);

const clientLogos = [
    {
        id: "greenko",
        image: "/homePage/c1.webp",
        alt: "Greenko",
    },
    {
        id: "client-two",
        image: "/homePage/c2.webp",
        alt: "Client",
    },
    {
        id: "client-three",
        image: "/homePage/c3.webp",
        alt: "Client",
    },
    {
        id: "client-four",
        image: "/homePage/c4.webp",
        alt: "Client",
    },
    {
        id: "vsl",
        image: "/homePage/c5.webp",
        alt: "VSL",
    },
    {
        id: "dalmia",
        image: "/homePage/c6.webp",
        alt: "Dalmia",
    },
];

const visionCards = [
    {
        id: "mission",
        title: "Our Mission",
        description:
            "We strive to build enterprises rooted in fairness, innovation, efficiency, and uncompromising integrity - for our customers, partners, vendors, society, and the environment.",
    },
    {
        id: "values",
        title: "Our Values & Ethics",
        description:
            "Our principles guide everything we do: taking ownership, acting with integrity, respecting everyone, embracing innovation, and promoting equality across all levels.",
    },
    {
        id: "md-desk",
        title: "From MD’s Desk",
        description:
            "A message of empowerment, accountability, and sustainable growth - highlighting how our people, partners, and customers shape our legacy of excellence.",
    },
];

export default function ClientsVisionSection() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: "#F7F7F7",
                overflow: "hidden",
                pt: {
                    xs: 3.5,
                    md: 5,
                },
                pb: {
                    xs: 5,
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
                <RevealAnimation
                    fade
                    slide
                    direction="up"
                    distance={25}
                    duration={0.6}
                >
                    <Typography
                        component="h2"
                        sx={{
                            color: "#19365E",
                            fontSize: {
                                xs: "20px",
                                sm: "24px",
                                md: "38px",
                            },
                            lineHeight: 1.2,
                            fontWeight: 600,
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                            mb: {
                                xs: 2.2,
                                md: 3,
                            },
                        }}
                    >
                        Our Clients
                    </Typography>
                </RevealAnimation>
            </Container>

            <ClientsMarquee />

            <Container
                maxWidth="lg"
                sx={{
                    
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 2,
                    },
                    mt: {
                        xs: 4.5,
                        md: 7,
                    },
                }}
            >
                <RevealAnimation
                    fade
                    slide
                    direction="up"
                    distance={35}
                    duration={0.7}
                >
                    <Box
                        sx={{
                            bgcolor: "#1C3A65",
                            color: "#FFFFFF",
                            borderRadius: {
                                xs: "24px",
                                md: "14px",
                            },
                            px: {
                                xs: 2.5,
                                sm: 4,
                                md: 6.5,
                            },
                            py: {
                                xs: 4,
                                md: 10,
                            },
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "0.9fr 1.1fr",
                            },
                            alignItems: "center",
                            gap: {
                                xs: 4,
                                md: 7,
                            },
                        }}
                    >
                        <VisionIntro />

                        <Box
                            sx={{
                                display: "grid",
                                gap: {
                                    xs: 1.4,
                                    md: 1.5,
                                },
                            }}
                        >
                            {visionCards.map((card, index) => (
                                <RevealAnimation
                                    key={card.id}
                                    fade
                                    slide
                                    direction="left"
                                    distance={25}
                                    delay={index * 0.1}
                                    duration={0.55}
                                >
                                    <VisionCard card={card} />
                                </RevealAnimation>
                            ))}
                        </Box>
                    </Box>
                </RevealAnimation>
            </Container>
        </Box>
    );
}

function ClientsMarquee() {
    const repeatedLogos = [...clientLogos, ...clientLogos,...clientLogos,...clientLogos];

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                bgcolor: "#FFFFFF",
                overflow: "hidden",
                py: {
                    xs: 1.25,
                    md: 1.6,
                },

                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: {
                        xs: "35px",
                        md: "110px",
                    },
                    zIndex: 3,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
                },

                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: {
                        xs: "35px",
                        md: "110px",
                    },
                    zIndex: 3,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(270deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
                },
            }}
        >
            <MotionBox
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 24,
                    ease: "linear",
                    repeat: Infinity,
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "max-content",
                    willChange: "transform",
                }}
            >
                {repeatedLogos.map((client, index) => (
                    <Box
                        key={`${client.id}-${index}`}
                        sx={{
                            width: {
                                xs: 74,
                                sm: 92,
                                md: 120,
                            },
                            height: {
                                xs: 36,
                                md: 50,
                            },
                            mx: {
                                xs: 1,
                                md: 1.5,
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <Box
                            component="img"
                            src={client.image}
                            alt={client.alt}
                            loading="lazy"
                            sx={{
                                maxWidth: "100%",
                                maxHeight:"100%",
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    </Box>
                ))}
            </MotionBox>
        </Box>
    );
}

function VisionIntro() {
    return (
        <Box
            sx={{
                textAlign: {
                    xs: "center",
                    md: "left",
                },
                px: {
                    xs: 0.5,
                    md: 0,
                },
            }}
        >
            <Typography
                component="h3"
                sx={{
                    fontSize: {
                        xs: "20px",
                        sm: "23px",
                        md: "29px",
                    },
                    lineHeight: {
                        xs: 1.35,
                        md: 1.3,
                    },
                    fontWeight: 700,
                    maxWidth: {
                        xs: "310px",
                        md: "500px",
                    },
                    mx: {
                        xs: "auto",
                        md: 0,
                    },
                }}
            >
                To grow our{" "}
                <Box
                    component="span"
                    sx={{
                        color: "#FF8A16",
                    }}
                >
                    multinational conglomerate into a global force
                </Box>{" "}
                in commodities and services, synonymous with trust &amp; commitment
                worldwide.
            </Typography>

            <Box
                component="button"
                type="button"
                sx={{
                    mt: {
                        xs: 2.5,
                        md: 2.8,
                    },
                    p: 0,
                    border: 0,
                    bgcolor: "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.8,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: {
                        xs: "14px",
                        md: "16px",
                    },
                    fontWeight: 400,
                    transition: "color 220ms ease, transform 220ms ease",

                    "&:hover": {
                        color: "#FF8A16",
                        transform: "translateX(2px)",
                    },

                    "&:hover .read-more-icon": {
                        transform: "translateX(3px)",
                    },
                }}
            >
                Click to Read More

                <KeyboardArrowRightRoundedIcon
                    className="read-more-icon"
                    sx={{
                        fontSize: 19,
                        transition: "transform 220ms ease",
                    }}
                />
            </Box>
        </Box>
    );
}

function VisionCard({ card }) {
    return (
        <Box
            sx={{
                minHeight: {
                    xs: "auto",
                    md: "88px",
                },
                px: {
                    xs: 1.8,
                    sm: 2.2,
                    md: 2.2,
                },
                py: {
                    xs: 1.6,
                    md: 1.7,
                },
            }}
        >
            <Typography
                component="h4"
                sx={{
                    fontSize: {
                        xs: "14px",
                        md: "16px",
                    },
                    lineHeight: 1.3,
                    fontWeight: 500,
                    mb: {
                        xs: 0.8,
                        md: 1,
                    },
                }}
            >
                {card.title}
            </Typography>

            <Typography
                sx={{
                    fontSize: {
                        xs: "11.5px",
                        sm: "12px",
                        md: "13px",
                    },
                    lineHeight: {
                        xs: 1.42,
                        md: 1.4,
                    },
                    color: "rgba(255,255,255,0.93)",
                }}
            >
                {card.description}
            </Typography>
        </Box>
    );
}