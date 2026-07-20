import { Box, Container, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";
import RevealAnimation from "../Animations/RevealAnimation";

const businesses = [
  {
    id: "mahakali-group",
    logo: "/homePage/mahakali-group.webp",
    description:
      "Four decades of trusted coal and coke solutions since 1984.",
    path: "/businesses/mahakali-group",
  },
  {
    id: "oto",
    logo: "/homePage/oto.webp",
    description:
      "End-to-end bulk logistics & stevedoring experts.",
    path: "/businesses/oto",
  },
  {
    id: "indiazona",
    logo: "/homePage/indiazona.webp",
    description:
      "Where buyers discover more and sellers grow faster",
    path: "/businesses/indiazona",
  },
  {
    id: "mahakali-infotech",
    logo: "/homePage/mahakali-infotech.webp",
    description:
      "Building reliable digital systems that power business growth.",
    path: "/businesses/mahakali-infotech",
  },
  {
    id: "mahakali-industries",
    logo: "/homePage/minter.webp",
    description:
      "Reliable coke supply with precise screening for steel industries.",
    path: "/businesses/mahakali-industries",
  },
  {
    id: "rse",
    logo: "/homePage/rse.webp",
    description:
      "Powering industries with reliable coal solutions since 2003.",
    path: "/businesses/rse",
  },
  {
    id: "mun",
    logo: "/homePage/mun.webp",
    description:
      "Reliable limestone and minerals supply from Oman.",
    path: "/businesses/mun",
  },
];

export default function BusinessesSection() {
  return (
    <Box
      component="section"
      id="businesses"
      sx={{
        bgcolor: "#F7F7F7",
        py: {
          xs: 4,
          md: 7,
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
          distance={24}
          duration={0.6}
        >
          <Box
            sx={{
              mb: {
                xs: 3.5,
                md: 4,
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
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
                fontWeight: 800,
                mb: {
                  xs: 1.3,
                  md: 1,
                },
              }}
            >
              Our Businesses
            </Typography>

            <Typography
              sx={{
                maxWidth: {
                  xs: "315px",
                  md: "900px",
                },
                mx: {
                  xs: "auto",
                  md: 0,
                },
                color: "#19365E",
                fontSize: {
                  xs: "11px",
                  md: "14px",
                },
                lineHeight: {
                  xs: 1.45,
                  md: 1.5,
                },
              }}
            >
              Discover the diverse ventures we operate, each built with quality,
              innovation, &amp; customer commitment at its core.
            </Typography>
          </Box>
        </RevealAnimation>

        <RevealAnimation
          fade
          slide
          direction="up"
          distance={2}
          duration={0.55}
          delay={0.1}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: {
                xs: 1.6,
                md: 2,
              },
            }}
          >
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
              />
            ))}
          </Box>
        </RevealAnimation>
      </Container>
    </Box>
  );
}

function BusinessCard({ business }) {
  return (
    <Box
      component={Link}
      // to={business.path}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: {
          xs: "76px",
          md: "158px",
        },
        height: "100%",
        bgcolor: "#FFFFFF",
        border: "1px solid rgba(25,54,94,0.1)",
        borderRadius: {
          xs: "7px",
          md: "17px",
        },
        px: {
          xs: 1.5,
          md: 2.8,
        },
        pt: {
          xs: 3.6,
          md: 2.2,
        },
        pb: {
          xs: 1.5,
          md: 2.2,
        },
        color: "#19365E",
        textDecoration: "none",
        overflow: "visible",
        transition:
          "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease",

        "&:hover": {
          transform: {
            xs: "none",
            md: "translateY(-5px)",
          },
          borderColor: {
            xs: "rgba(25,54,94,0.1)",
            md: "#FF8A16",
          },
          boxShadow: {
            xs: "none",
            md: "0 12px 26px rgba(25,54,94,0.12)",
          },

          "& .business-logo": {
            transform: {
              xs: "none",
              md: "translateY(-2px) scale(1.03)",
            },
            boxShadow: {
              xs: "0 2px 5px rgba(18,45,79,0.08)",
              md: "0 7px 16px rgba(18,45,79,0.13)",
            },
          },

          "& .business-arrow": {
            transform: "translateX(4px)",
            color: "#FF8A16",
          },
        },
      }}
    >
      <Box
        className="business-logo"
        sx={{
          position: {
            xs: "absolute",
            md: "relative",
          },
          top: {
            xs: "-8px",
            md: "auto",
          },
          left: {
            xs: "14px",
            md: "auto",
          },
          width: {
            xs: "86px",
            md: "98px",
          },
          height: {
            xs: "36px",
            md: "38px",
          },
          mb: {
            xs: 0,
            md: 2,
          },
          px: 1,
          bgcolor: "#FFFFFF",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 5px rgba(18,45,79,0.08)",
          transition: "transform 260ms ease, box-shadow 260ms ease",
          overflow:"hidden"
        }}
      >
        <Box
          component="img"
          src={business.logo}
          alt=""
          loading="lazy"
          sx={{

            width: "180%",
            height: "180%",
            objectFit: "contain",
            display: "block",
            // border:"1px solid red"
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "#19365E",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "14px",
          },
          lineHeight: {
            xs: 1.4,
            md: 1.45,
          },
          fontWeight: 400,
          minHeight: {
            xs: "auto",
            md: "42px",
          },
          pr: {
            xs: 0,
            md: 1,
          },
          mt: { xs: 1, md: 0 }
        }}
      >
        <Box
          component="span"
        >
          {business.description}
        </Box>
      </Typography>

      <Box
        sx={{
          mt: {
            xs: 0,
            md: "auto",
          },
          position: {
            xs: "absolute",
            md: "relative",
          },
          top: {
            xs: "11px",
            md: "auto",
          },
          right: {
            xs: "10px",
            md: "auto",
          },
          display: "inline-flex",
          alignItems: "center",
          gap: {
            xs: 0.15,
            md: 0.5,
          },
          color: "#19365E",
          fontSize: {
            xs: "7px",
            md: "12px",
          },
          lineHeight: 1,
          fontWeight: 600,
        }}
      >
        Click to Read More

        <KeyboardArrowRightRoundedIcon
          className="business-arrow"
          sx={{
            fontSize: {
              xs: 11,
              md: 18,
            },
            transition: "transform 220ms ease, color 220ms ease",
          }}
        />
      </Box>
    </Box>
  );
}