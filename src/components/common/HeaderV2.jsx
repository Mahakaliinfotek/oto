import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        label: "Businesses",
        path: "/businesses",
        icon: BusinessRoundedIcon,
    },
    {
        label: "Media & CSR",
        path: "/csr",
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

    useEffect(() => {
        setDrawerOpen(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

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
                        {navigationItems.slice(0, 4).map((item) => (
                            <Box
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    position: "relative",
                                    color: isActive(item.path) ? "#19365E" : "#4D607B",
                                    fontSize: "13px",
                                    fontWeight: isActive(item.path) ? 700 : 500,
                                    lineHeight: 1,
                                    textDecoration: "none",
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
                                        transform: isActive(item.path)
                                            ? "scaleX(1)"
                                            : "scaleX(0)",
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
                        ))}

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
                                key={item.path}
                                component={Link}
                                to={item.path}
                                onClick={() => setDrawerOpen(false)}
                                sx={{
                                    position: "relative",
                                    minHeight: 76,
                                    px: {
                                        xs: 3.5,
                                        sm: 4,
                                    },
                                    display: "grid",
                                    gridTemplateColumns: "36px minmax(0, 1fr)",
                                    alignItems: "center",
                                    columnGap: 2,
                                    color: active ? "#19365E" : "#858585",
                                    bgcolor: active
                                        ? "rgba(25,54,94,0.035)"
                                        : "#FFFFFF",
                                    textDecoration: "none",
                                    transition:
                                        "background-color 220ms ease, color 220ms ease",

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        width: active ? "4px" : 0,
                                        bgcolor: "#19365E",
                                        transition: "width 220ms ease",
                                    },

                                    "&:hover": {
                                        bgcolor: "rgba(25,54,94,0.045)",
                                        color: "#19365E",

                                        "& .mobile-nav-icon": {
                                            color: "#19365E",
                                            transform: "translateX(2px)",
                                        },
                                    },
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