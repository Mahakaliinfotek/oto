import React from "react";
import { Box, Typography } from "@mui/material";

// Images
import FleetOwnersImg from "../../assets/oto/page_U1.png";
import ClientsImg from "../../assets/oto/page_U2.png";

export default function USPsSection() {
    return (
        <Box sx={{ width: "100%", mt: 0, mb: 3 }}>

            {/* Title */}
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "36px" },
                    fontWeight: 700,
                    color: "#1B335B",
                    mb: 3,
                    fontFamily: "Inter",
                }}
            >
                What makes us different 
            </Typography>

            {/* ROW 1 — FLEET OWNERS */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 0,
                    mb: 3,
                }}
            >
                {/* IMAGE */}
                <Box
                    sx={{
                        flex: 1,
                        borderTopLeftRadius: { xs: "8px", md: "8px" },
                        borderTopRightRadius: { xs: "8px", md: "0px" },     // NEW
                        borderBottomLeftRadius: { xs: "0px", md: "8px" },
                        borderBottomRightRadius: { xs: "0px", md: "0px" },  // NEW
                        overflow: "hidden",
                        position: "relative",

                        boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.20)',
                    }}
                >
                    <Box
                        component="img"
                        src={FleetOwnersImg}
                        alt="Fleet owners"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",

                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,

                            background: 'linear-gradient(360deg, rgba(0, 0, 0, 0) 11%, black 100%)',
                            zIndex: 1,
                        }}
                    />
                    <Typography
                        sx={{
                            position: "absolute",
                            top: "1%",
                            left: "27%",
                            fontWeight: 700,
                            fontSize: { xs: 16, md: 30 },
                            color: "white",
                            mb: 1,
                            zIndex: 2
                        }}
                    >
                        For fleet owners
                    </Typography>

                </Box>

                {/* TEXT BOX */}
                <Box
                    sx={{
                        flex: 1,
                        background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                        p: 2.5,
                        borderTopRightRadius: { xs: "0px", md: "8px" },
                        borderTopLeftRadius: { xs: "0px", md: "0px" },       // NEW
                        borderBottomRightRadius: { xs: "8px", md: "8px" },
                        borderBottomLeftRadius: { xs: "8px", md: "0px" },    // NEW
                        mt: { xs: "-4px", md: 0 },
                        fontFamily: "Inter",
                    }}
                >




                    <Typography
                        sx={{
                            fontSize: { xs: 13, md: 22 },
                            lineHeight: 1.6,
                            color: "white",
                        }}
                    >
                        • Spot advance payment & hassle free transactions. This fast, predictable
                        settlement encourages bulk truck placement and long-term relationships.
                    </Typography>
                </Box>
            </Box>

            {/* ROW 2 — CLIENTS */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 0,
                }}
            >
                {/* IMAGE */}
                <Box
                    sx={{
                        flex: 1,
                        borderTopLeftRadius: { xs: "8px", md: "8px" },
                        borderTopRightRadius: { xs: "8px", md: "0px" },     // NEW
                        borderBottomLeftRadius: { xs: "0px", md: "8px" },
                        borderBottomRightRadius: { xs: "0px", md: "0px" },  // NEW
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src={ClientsImg}
                        alt="Clients"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}

                    />
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,

                            background: 'linear-gradient(360deg, rgba(0, 0, 0, 0) 11%, black 100%)',
                            zIndex: 1,
                        }}
                    />
                    <Typography
                        sx={{
                            position: "absolute",
                            top: "1%",
                            left: "35%",
                            fontWeight: 700,
                            fontSize: { xs: 16, md: 30 },
                            color: "white",
                            mb: 1,
                            zIndex: 2
                        }}
                    >
                        For clients
                    </Typography>

                </Box>

                {/* TEXT */}
                <Box
                    sx={{
                        flex: 1,
                        background: 'linear-gradient(270deg, #1B335B 0%, #2A508E 50%, #1B335B 100%)',
                        px: 2.5,
                        py: 2.5,
                        borderTopRightRadius: { xs: "0px", md: "8px" },
                        borderTopLeftRadius: { xs: "0px", md: "0px" },       // NEW
                        borderBottomRightRadius: { xs: "8px", md: "8px" },
                        borderBottomLeftRadius: { xs: "8px", md: "0px" },    // NEW
                        fontFamily: "Inter",
                        mt: { xs: "-4px", md: 0 },
                    }}
                >


                    <Typography
                        sx={{
                            fontSize: { xs: 13, md: 22 },
                            lineHeight: 1.6,
                            color: "white",
                            mb: 1,
                        }}
                    >
                        <strong>• Shipment integrity by design:</strong> double-layer protection with
                        tarpaulin and net covering, plus camera and GPS tracking. This gives route
                        visibility and deters manipulation during transit.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 13, md: 22 },
                            lineHeight: 1.6,
                            color: "white",
                            mb: 1,
                        }}
                    >
                        <strong>• On-port efficiency:</strong> licensed stevedoring at Vizag combined
                        with our equipment and trained crews to improve turnaround times and cargo
                        quality.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 13, md: 22 },
                            lineHeight: 1.6,
                            color: "white",
                        }}
                    >
                        <strong>• Cargo Security:</strong> standardized sealing, auditable hand-offs,
                        and supervisor-led safety checks for consistent execution.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
