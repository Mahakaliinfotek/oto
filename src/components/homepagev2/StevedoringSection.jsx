import { Box, Container, Typography } from "@mui/material";

const stevedoringCards = [
  {
    id: "bulk-cargo",
    title: "Bulk-cargo expertise",
    description:
      "Handling coal, minerals & other heavy commodities with precision and operational rigor.",
    icon: "/homePage/bulk-cargo.webp",
  },
  {
    id: "optimized-discharge",
    title: "Optimized discharge rate",
    description:
      "Engineered workflows and equipment ensure rapid and predictable vessel turnaround, minimising berth time.",
    icon: "/homePage/discharge-rate.webp",
  },
  {
    id: "zero-demurrage",
    title: "Zero demurrage focus",
    description:
      "Proactive planning, berth readiness and liaison with terminal and rail logistics ensure demurrage is mitigated.",
    icon: "/homePage/demurrage.webp",
  },
  {
    id: "secured-storage",
    title: "Secured storage & custom-bonding",
    description:
      "Dedicated bonded yards and secure storage facilities ensure integrity of cargo and regulatory compliance. 24x7 CCTV surveillance along with trained security guards.",
    icon: "/homePage/storage.webp",
  },
  {
    id: "cha-services",
    title: "CHA services & authorities liaison",
    description:
      "We provide Custom House Agent (CHA) activities, document clearance and direct coordination with port trust and terminals for smooth cargo flow.",
    icon: "/homePage/cha-services.webp",
  },
];

export default function StevedoringSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#FBF7F1",
        py: {
          xs: 6,
          md: 9,
        },
        overflow: "hidden",
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
            mb: {
              xs: 5,
              md: 5.5,
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
                xs: "22px",
                sm: "26px",
                md: "40px",
              },
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: {
                xs: "-0.3px",
                md: "-0.8px",
              },
              mb: {
                xs: 1.5,
                md: 1.7,
              },
            }}
          >
            Stevedoring &amp; Port Handling
          </Typography>

          <Typography
            sx={{
              maxWidth: {
                xs: "390px",
                md: "1200px",
              },
              mx: {
                xs: "auto",
                md: 0,
              },
              color: "#19365E",
              fontSize: {
                xs: "15px",
                md: "16px",
              },
              lineHeight: {
                xs: 1.4,
                md: 1.5,
              },
            }}
          >
            At Visakhapatnam, we deliver full-spectrum stevedoring services –
            specializing in bulk cargo dealing, high-discharge-rate operations,
            and seamless movement, coordination with port authorities. Our
            differentiated value propositions include:
          </Typography>
        </Box>

        {/* Desktop cards */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "grid",
            },
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 2.5,
          }}
        >
          {stevedoringCards.map((card) => (
            <StevedoringCard key={card.id} card={card} />
          ))}
        </Box>

        {/* Mobile horizontal carousel */}
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            gap: 2,
            overflowX: "auto",
            overflowY: "visible",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            pb: 2,
            pr: 2,
            mx: -2,
            pl: 2,

            scrollbarWidth: "none",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {stevedoringCards.map((card) => (
            <Box
              key={card.id}
              sx={{
                flex: {
                  xs: "0 0 82%",
                  sm: "0 0 60%",
                },
                scrollSnapAlign: "start",
              }}
            >
              <StevedoringCard card={card} />
            </Box>
          ))}
        </Box>

        {/* Bottom information card */}
        <Box
          sx={{
            mt: {
              xs: 4,
              md: 5.5,
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            gap: {
              xs: 2,
              sm: 3,
            },
            border: "1px solid rgba(25,54,94,0.12)",
            borderRadius: {
              xs: "14px",
              md: "16px",
            },
            bgcolor: "#FFFFFF",
            px: {
              xs: 2.5,
              md: 3,
            },
            py: {
              xs: 2.5,
              md: 2.7,
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "8px",
              bgcolor: "#19365E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/homePage/proximity.webp"
              alt=""
              sx={{
                width: 30,
                height: 30,
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#19365E",
              fontSize: {
                xs: "15px",
                md: "16px",
              },
              lineHeight: 1.55,
            }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Proximity to group stevedoring and transport operations
            </Box>{" "}
            enables faster cargo evacuation &amp; predictable arrivals,
            strengthening our delivery assurance and end-to-end logistics
            capabilities across India’s industrial supply chain.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function StevedoringCard({ card }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: {
          xs: "345px",
          md: "285px",
        },
        height: "100%",
        bgcolor: "#FFFFFF",
        border: {
          xs: "1px solid #19365E",
          md: "1px solid rgba(25,54,94,0.12)",
        },
        borderRadius: {
          xs: "28px",
          md: "18px",
        },
        px: {
          xs: 3.5,
          md: 2.5,
        },
        pt: {
          xs: 3.5,
          md: 2.4,
        },
        pb: {
          xs: 3,
          md: 2.5,
        },
        transition:
          "transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease",

        "&:hover": {
          transform: {
            xs: "none",
            md: "translateY(-6px)",
          },
          borderColor: {
            xs: "#19365E",
            md: "#FF8A16",
          },
          boxShadow: {
            xs: "none",
            md: "0 10px 22px rgba(25,54,94,0.14)",
          },

          "& .stevedoring-icon": {
            bgcolor: "#FF8A16",
            transform: {
              xs: "none",
              md: "scale(1.06)",
            },
          },

          "& .stevedoring-icon-image": {
            transform: {
              xs: "none",
              md: "scale(1.08)",
            },
          },
        },
      }}
    >
      <Box
        className="stevedoring-icon"
        sx={{
          width: {
            xs: 46,
            md: 40,
          },
          height: {
            xs: 46,
            md: 40,
          },
          bgcolor: {
            xs: "#FF8A16",
            md: "#19365E",
          },
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: {
            xs: 3,
            md: 2.5,
          },
          transition:
            "background-color 280ms ease, transform 280ms ease",
        }}
      >
        <Box
          className="stevedoring-icon-image"
          component="img"
          src={card.icon}
          alt=""
          sx={{
            width: {
              xs: 30,
              md: 27,
            },
            height: {
              xs: 30,
              md: 27,
            },
            objectFit: "contain",
            transition: "transform 280ms ease",
          }}
        />
      </Box>

      <Typography
        component="h3"
        sx={{
          color: "#19365E",
          fontSize: {
            xs: "20px",
            md: "14px",
          },
          lineHeight: {
            xs: 1.3,
            md: 1.35,
          },
          fontWeight: 700,
          mb: {
            xs: 2,
            md: 1.7,
          },
        }}
      >
        {card.title}
      </Typography>

      <Typography
        sx={{
          color: "#19365E",
          fontSize: {
            xs: "17px",
            md: "12px",
          },
          lineHeight: {
            xs: 1.4,
            md: 1.35,
          },
        }}
      >
        {card.description}
      </Typography>
    </Box>
  );
}