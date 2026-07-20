import { useEffect, useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Typography,
} from "@mui/material";

import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import EnergySavingsLeafRoundedIcon from "@mui/icons-material/EnergySavingsLeafRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const navigationItems = [
    {
        label: "Our Story",
        path: "https://themahakaligroup.com/about-us",
        icon: GroupsRoundedIcon,
    },
    {
        label: "Our Businesses",
        path: "/#businesses",
        icon: BusinessRoundedIcon,
    },
    {
        label: "Media & CSR",
        path: "https://themahakaligroup.com/csr",
        icon: SmartDisplayRoundedIcon,
    },
    // {
    //     label: "Sustainability",
    //     path: "/sustainability",
    //     icon: EnergySavingsLeafRoundedIcon,
    // },

];

export default function HeaderV2() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        setDrawerOpen(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    const scrollToBusinesses = () => {
        setDrawerOpen(false);

        if (location.pathname === "/") {
            const businessesSection =
                document.getElementById("businesses");

            businessesSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            return;
        }

        navigate("/#businesses");
    };

    useEffect(() => {
        if (
            location.pathname === "/" &&
            location.hash === "#businesses"
        ) {
            const timeoutId = setTimeout(() => {
                const businessesSection =
                    document.getElementById("businesses");

                businessesSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [location.pathname, location.hash]);

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: "relative",
                    zIndex: 1350,
                    width: "100%",
                    height: {
                        xs: 70,
                        md: 64,
                    },
                    bgcolor: "#FFFFFF",
                    borderTop: "1px solid rgba(25,54,94,0.12)",
                    borderBottom: "1px solid rgba(25,54,94,0.06)",
                    fontFamily: '"IBM Plex Sans", sans-serif',
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "84%",
                        },
                        maxWidth: "1360px",
                        height: "100%",
                        mx: "auto",
                        px: {
                            xs: 2.5,
                            sm: 3,
                            md: 0,
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src="/header-logo.webp"
                            alt="Oshiyamaa Transport Operator"
                            sx={{
                                width: {
                                    xs: 72,
                                    md: 100,
                                },
                                height: "auto",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    </Box>

                    {/* Desktop navigation */}
                    <Box
                        component="nav"
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            alignItems: "center",
                            gap: {
                                md: 4.5,
                                lg: 5.5,
                            },
                        }}
                    >
                        {navigationItems.slice(0, 4).map((item) => {
                            const isSectionLink = Boolean(item.sectionId);

                            return (
                                <Box
                                    key={item.label}
                                    component={isSectionLink ? "button" : Link}
                                    {...(!isSectionLink && {
                                        to: item.path,
                                    })}
                                    onClick={
                                        isSectionLink
                                            ? scrollToBusinesses
                                            : undefined
                                    }
                                    sx={{
                                        position: "relative",
                                        p: 0,
                                        border: 0,
                                        background: "none",
                                        color: "#4D607B",
                                        fontFamily: "inherit",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        lineHeight: 1,
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        transition: "color 220ms ease",

                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            bottom: "-9px",
                                            height: "2px",
                                            borderRadius: "10px",
                                            bgcolor: "#19365E",
                                            transform: "scaleX(0)",
                                            transformOrigin: "center",
                                            transition: "transform 220ms ease",
                                        },

                                        "&:hover": {
                                            color: "#19365E",

                                            "&::after": {
                                                transform: "scaleX(1)",
                                            },
                                        },
                                    }}
                                >
                                    {item.label}
                                </Box>
                            );
                        })}

                        <Button
                            component={Link}
                            to="/contact"
                            disableElevation
                            sx={{
                                minWidth: 112,
                                height: 36,
                                px: 2.5,
                                borderRadius: "999px",
                                bgcolor: "#EAF2FA",
                                color: "#19365E",
                                fontFamily: '"IBM Plex Sans", sans-serif',
                                fontSize: "13px",
                                fontWeight: 700,
                                textTransform: "none",
                                transition:
                                    "background-color 220ms ease, color 220ms ease, transform 220ms ease",

                                "&:hover": {
                                    bgcolor: "#19365E",
                                    color: "#FFFFFF",
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>

                    {/* Mobile menu button */}
                    <IconButton
                        onClick={() => setDrawerOpen((previous) => !previous)}
                        aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={drawerOpen}
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                            width: 44,
                            height: 44,
                            p: 0,
                            color: "#19365E",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: 30,
                                height: 24,
                            }}
                        >
                            {[0, 1, 2].map((line) => (
                                <Box
                                    key={line}
                                    sx={{
                                        position: "absolute",
                                        left: 0,
                                        width: "100%",
                                        height: "3px",
                                        borderRadius: "8px",
                                        bgcolor: "#19365E",
                                        transition:
                                            "top 260ms ease, transform 260ms ease, opacity 180ms ease",
                                        top:
                                            line === 0
                                                ? drawerOpen
                                                    ? "10px"
                                                    : "1px"
                                                : line === 1
                                                    ? "10px"
                                                    : drawerOpen
                                                        ? "10px"
                                                        : "19px",
                                        transform:
                                            drawerOpen && line === 0
                                                ? "rotate(45deg)"
                                                : drawerOpen && line === 2
                                                    ? "rotate(-45deg)"
                                                    : "rotate(0)",
                                        opacity: drawerOpen && line === 1 ? 0 : 1,
                                    }}
                                />
                            ))}
                        </Box>
                    </IconButton>
                </Box>
            </Box>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    zIndex: 1300,

                    "& .MuiDrawer-paper": {
                        zIndex: 1300,
                    },
                }}
                PaperProps={{
                    sx: {
                        width: {
                            xs: "70%",
                            sm: "430px",
                        },
                        maxWidth: "430px",
                        mt: "70px",
                        height: "calc(100% - 70px)",
                        bgcolor: "#FFFFFF",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "28px",
                        boxShadow: "-12px 14px 40px rgba(16,42,78,0.12)",
                        overflow: "hidden",
                    },
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            top: "70px",
                            bgcolor: "rgba(255,255,255,0.66)",
                            backdropFilter: "blur(4px)",
                        },
                    },
                }}
            >
                <Box
                    component="nav"
                    sx={{
                        pt: 0,
                        fontFamily: '"IBM Plex Sans", sans-serif',
                    }}
                >
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <Box
                                key={item.label}
                                component={item.sectionId ? "button" : Link}
                                {...(!item.sectionId && {
                                    to: item.path,
                                })}
                                onClick={() => {
                                    if (item.sectionId === "businesses") {
                                        scrollToBusinesses();
                                    } else {
                                        setDrawerOpen(false);
                                    }
                                }}
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    minHeight: 76,
                                    px: {
                                        xs: 3.5,
                                        sm: 4,
                                    },
                                    border: 0,
                                    display: "grid",
                                    gridTemplateColumns:
                                        "36px minmax(0, 1fr)",
                                    alignItems: "center",
                                    columnGap: 2,
                                    color: "#858585",
                                    bgcolor: "#FFFFFF",
                                    fontFamily: "inherit",
                                    textAlign: "left",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <Icon
                                    className="mobile-nav-icon"
                                    sx={{
                                        fontSize: 28,
                                        color: active ? "#19365E" : "#A7A7A7",
                                        transition: "color 220ms ease, transform 220ms ease",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontFamily: '"IBM Plex Sans", sans-serif',
                                        fontSize: {
                                            xs: "18px",
                                            sm: "22px",
                                        },
                                        lineHeight: 1.2,
                                        fontWeight: active ? 700 : 400,
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Drawer>
        </>
    );
}