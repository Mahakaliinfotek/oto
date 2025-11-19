import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Replace this with your background + inside image
import historyBg from "../../assets/images/history/historybg.png";
import historyImg from "../../assets/images/history/history.png";
import { useNavigate } from "react-router-dom";

export default function HistorySection() {
    const navigate=useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${historyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 4 },
                textAlign: "center",
                color: "#fff",
            }}
        >
            {/* Section Header */}
            <Typography
                sx={{
                    fontSize: { xs: 26, md: 34 },
                    fontWeight: 700,
                }}
            >
                Our History
            </Typography>

            <Typography
                sx={{
                    mt: 1,
                    mb: 5,
                    fontSize: { xs: 15, md: 17 },
                    opacity: 0.9,
                }}
            >
                A journey built on vision, values, and continuous evolution.
            </Typography>

            {/* Content Box */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "stretch",
                    width: "100%",
                    maxWidth: 1000,
                    mx: "auto",
                    background: "rgba(0,0,0,0.0)",
                }}
            >
                {/* LEFT IMAGE */}
                <Box
                    sx={{
                        flex: 1,
                        height: { xs: 250, md: 360 },
                        backgroundImage: `url(${historyImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* RIGHT TEXT BOX */}
                <Box
                    sx={{
                        flex: 1,
                        background: "#00445B",
                        px: { xs: 3, md: 5 },
                        py: { xs: 3, md: 4 },
                        textAlign: "center",
                        color: "#fff",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        flexDirection:"column"
                    }}
                    // border={1}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 20,
                            mb: 1.5,
                            maxWidth:"300px",
                            
                        }}
                    >
                        From One Desk in Kolkata to a Global Resource Network
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 15,
                            lineHeight: 1.6,
                            opacity: 0.95,
                            textAlign:"left"
                        }}
                    >
                        What began in <b>1984</b> as a humble trading firm is now a diversified conglomerate operating across mining, logistics, imports, exports, and digital commerce.For <b>four decades</b>, we’ve expanded from India’s eastern coal belt to global mineral hubs, combining traditional expertise with next-gen platforms like Indiazona.


                    </Typography>

                    {/* Click to Read More */}
                    <Typography
                        sx={{
                            mt: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 18,
                            // fontWeight: 500,
                            cursor: "pointer",
                        }}

                        onClick={() => navigate("/about-us")}
                    >
                        Discover Our Journey
                        <ArrowForwardIcon fontSize="small" />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
