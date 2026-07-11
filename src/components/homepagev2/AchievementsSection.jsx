import { Box, Container, Typography } from "@mui/material";

const milestones = [
  {
    id: "01",
    title: "2019 Company was established",
    description:
      "OTO is founded, built on an entrepreneurial mandate to own the port-to-plant link.",
    icon: "/homePage/achievement-1.webp",
  },
  {
    id: "02",
    title: "Stevedoring license at Visakhapatnam",
    description: "Enabling integrated pier-to-plant control.",
    icon: "/homePage/achievement-2.webp",
  },
  {
    id: "03",
    title: "Cargo capability expansion",
    description:
      "From coal and coke to ores, minerals, containers, project/heavy lifts, & agro cargo dedicated gear & trained teams.",
    icon: "/homePage/achievement-3.webp",
  },
  {
    id: "04",
    title: "Process and tech Optimization",
    description:
      "GPS tracking and safety sealing adopted at scale; emphasis on fuel optimization and carbon-conscious routing.",
    icon: "/homePage/achievement-4.webp",
  },
  {
    id: "05",
    title: "East Coast operating footprint",
    description:
      "Active across Visakhapatnam, Gangavaram, and other prominent ports with multimodal capability.",
    icon: "/homePage/achievement-5.webp",
  },
];

export default function AchievementsSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#193B6C",
        py: {
          xs: 6,
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
        <Typography
          component="h2"
          sx={{
            color: "#FFFFFF",
            fontSize: {
              xs: "26px",
              md: "42px",
            },
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: {
              xs: "-0.4px",
              md: "-0.8px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            mb: {
              xs: 4.5,
              md: 5.5,
            },
          }}
        >
          Achievements &amp; Milestones
        </Typography>

        <Box
          sx={{
            position: "relative",
          }}
        >
          {milestones.map((item, index) => (
            <AchievementRow
              key={item.id}
              item={item}
              isLast={index === milestones.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function AchievementRow({ item, isLast }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: {
          xs: "56px 1fr",
          md: "105px 1fr 72px",
        },
        columnGap: {
          xs: 2.5,
          md: 3.5,
        },
        alignItems: "start",
        py: {
          xs: 1.5,
          md: 1.8,
        },
        px: {
          xs: 0,
          md: 2.2,
        },
        borderRadius: {
          xs: 0,
          md: "14px",
        },
        transition:
          "background-color 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease",

        "&:hover": {
          backgroundColor: {
            xs: "transparent",
            md: "rgba(255,255,255,0.04)",
          },
          transform: {
            xs: "none",
            md: "translateY(-1px)",
          },
          boxShadow: {
            xs: "none",
            md: "0 6px 18px rgba(0,0,0,0.08)",
          },

          "& .achievement-number": {
            bgcolor: "#FF9A1F",
            borderColor: "#FFFFFF",
          },

          "& .achievement-icon": {
            filter:
              "brightness(0) saturate(100%) invert(67%) sepia(93%) saturate(1480%) hue-rotate(349deg) brightness(101%) contrast(102%)",
            transform: "scale(1.05)",
          },
        },
      }}
    >
      {/* Left number + vertical line */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          minHeight: {
            xs: "96px",
            md: "102px",
          },
        }}
      >
        {!isLast && (
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: 56,
                md: 72,
              },
              bottom: {
                xs:-40,
                md: -25,
              },
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              bgcolor: "rgba(255,255,255,0.22)",
            }}
          />
        )}

        <Box
          className="achievement-number"
          sx={{
            width: {
              xs: 56,
              md: 72,
            },
            height: {
              xs: 56,
              md: 72,
            },
            borderRadius: "50%",
            bgcolor: "rgba(175, 175, 175, 0.47)",
            border: "1px solid rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: {
              xs: "18px",
              md: "20px",
            },
            fontWeight: 800,
            lineHeight: 1,
            transition:
              "background-color 0.28s ease, border-color 0.28s ease, transform 0.28s ease",
          }}
        >
          {item.id}
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          pt: {
            xs: 0.5,
            md: 0.8,
          },
          pb: {
            xs: 2.3,
            md: 2.2,
          },
          borderBottom: !isLast
            ? "1px solid rgba(255,255,255,0.12)"
            : "none",
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#FFFFFF",
            fontSize: {
              xs: "19px",
              md: "17px",
            },
            lineHeight: {
              xs: 1.3,
              md: 1.35,
            },
            fontWeight: 700,
            mb: {
              xs: 1.2,
              md: 0.7,
            },
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.96)",
            fontSize: {
              xs: "15px",
              md: "13.5px",
            },
            lineHeight: {
              xs: 1.45,
              md: 1.45,
            },
            maxWidth: {
              xs: "100%",
              md: "96%",
            },
          }}
        >
          {item.description}
        </Typography>
      </Box>

      {/* Right icon - desktop only */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          pt: 1.1,
        }}
      >
        <Box
          className="achievement-icon"
          component="img"
          src={item.icon}
          alt=""
          sx={{
            width: 44,
            height: 44,
            objectFit: "contain",
            transition: "transform 0.28s ease, filter 0.28s ease",
          }}
        />
      </Box>
    </Box>
  );
}