import { Box, Button, Container, Typography } from "@mui/material";
import RevealAnimation from "../Animations/RevealAnimation";

const services = [
  {
    title: "Port & Cargo Operations",
    icon: "/homePage/port-cargo.webp",
  },
  {
    title: "Multimodal Logistics & Transportation",
    icon: "/homePage/multimodal.webp",
  },
  {
    title: "Equipment & Material Handling",
    icon: "/homePage/equipment.webp",
  },
];

const statistics = [
  {
    value: "2,000",
    suffix: "+",
    label: "Trucks Handled",
  },
  {
    value: "68,938",
    suffix: "mts",
    label: "Material supplied",
  },
  {
    value: "6,839",
    suffix: "km",
    label: "Distance Covered",
    mobileLabel: "Trucks Handled",
  },
  {
    value: "50",
    suffix: "+",
    label: "Rakes Handled",
  },
];

export default function HeroSection() {
  const handleExploreServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#F7F7F7",
        pb: {
          xs: 5,
          md: 8,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: "590px",
            sm: "700px",
            md: "590px",
          },
          overflow: "hidden",
          backgroundImage: {
            xs: "url('/homePage/heroSm.webp')",
            md: "url('/homePage/heroLg.webp')",
          },
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "center bottom",
            md: "center",
          },
          backgroundRepeat: "no-repeat",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: {
              xs: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.78) 0%,
                  rgba(255,255,255,0.35) 38%,
                  rgba(255,255,255,0) 65%
                )
              `,
              md: `
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.98) 0%,
                  rgba(255,255,255,0.88) 28%,
                  rgba(255,255,255,0.2) 58%,
                  rgba(255,255,255,0) 78%
                )
              `,
            },
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            pt: {
              xs: 7.5,
              sm: 9,
              md: 13,
            },
            px: {
              xs: 2,
              sm: 3,
              md: 6,
              lg: 10,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                md: "970px",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <RevealAnimation
              delay={0.2}
              duration={2}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: {
                    xs: "1px solid rgba(25, 54, 94, 0.18)",
                    md: "none",
                  },
                  borderRadius: {
                    xs: "999px",
                    md: 0,
                  },
                  bgcolor: {
                    xs: "rgba(255,255,255,0.7)",
                    md: "transparent",
                  },
                  backdropFilter: {
                    xs: "blur(8px)",
                    md: "none",
                  },
                  px: {
                    xs: 2,
                    md: 0,
                  },
                  py: {
                    xs: 1.05,
                    md: 0,
                  },
                  mb: {
                    xs: 2.7,
                    md: 1.5,
                  },
                  // border: "1px solid red",
                }}
              >

                <Typography
                  sx={{
                    color: "#19365E",
                    fontSize: {
                      xs: "10px",
                      md: "16px",
                    },
                    lineHeight: 1.4,
                    fontWeight: {
                      xs: 700,
                      md: 500,
                    },
                    textTransform: "uppercase",
                    letterSpacing: {
                      xs: 0,
                      md: "0.15px",
                    },
                  }}
                >
                  Oshiyamaa Transport Operator
                  <Box
                    component="span"
                    sx={{
                      display: {
                        xs: "none",
                        md: "inline",
                      },
                    }}
                  >
                    {" "}
                    • Visakhapatnam
                  </Box>
                </Typography>
              </Box>

              <Typography
                component="h1"
                sx={{
                  color: "#19365E",
                  maxWidth: {
                    xs: "390px",
                    md: "960px",
                  },
                  mx: {
                    xs: "auto",
                    md: 0,
                  },
                  fontSize: {
                    xs: "24px",
                    sm: "38px",
                    md: "40px",
                    lg: "42px",
                  },
                  lineHeight: {
                    xs: 1.27,
                    md: 1.2,
                  },
                  fontWeight: 800,
                  letterSpacing: {
                    xs: "-0.6px",
                    md: "-0.8px",
                  },
                }}
              >
                End-to-end bulk logistics on{" "}
                <Box
                  component="span"
                  sx={{
                    display: {
                      xs: "block",
                      md: "inline",
                    },
                    color: "#FF8A16",
                    mt: {
                      xs: 0.35,
                      md: 0,
                    },
                  }}
                >
                  India’s East Coast.
                </Box>
              </Typography>
            </RevealAnimation>
            <RevealAnimation
              delay={0.4}
              duration={2}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(3, minmax(0, 1fr))",
                    md: "repeat(3, auto)",
                  },
                  justifyContent: {
                    xs: "stretch",
                    md: "flex-start",
                  },
                  gap: {
                    xs: 1.25,
                    sm: 2,
                    md: 3.5,
                  },
                  mt: {
                    xs: 4.2,
                    md: 4,
                  },
                }}
              >
                {services.map((service) => (
                  <Box
                    key={service.title}
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: {
                        xs: "center",
                        md: "center",
                      },
                      justifyContent: {
                        xs: "center",
                        md: "flex-start",
                      },
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      width: {
                        xs: "100%",
                        md: "200px",
                      },
                      minHeight: {
                        xs: "74px",
                        md: "70px",
                      },
                      bgcolor: "#FFFFFF",
                      borderRadius: {
                        xs: "8px",
                        md: "7px",
                      },
                      px: {
                        xs: 0.75,
                        md: 1.5,
                      },
                      pt: {
                        xs: 2.15,
                        md: 1.2,
                      },
                      pb: {
                        xs: 1.2,
                        md: 1.2,
                      },
                      gap: {
                        xs: 1,
                        md: 1.5,
                      },
                      boxShadow: {
                        xs: "0 5px 18px rgba(16, 42, 78, 0.05)",
                        md: "0 3px 10px rgba(16, 42, 78, 0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: {
                          xs: "absolute",
                          md: "absolute",
                        },
                        top: {
                          xs: "-12px",
                          md: "auto",
                        },
                        left: {
                          xs: "auto",
                          md: "-12px"
                        },
                        width: {
                          xs: 34,
                          md: 38,
                        },
                        height: {
                          xs: 34,
                          md: 38,
                        },
                        borderRadius: "50%",
                        bgcolor: "#19365E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={service.icon}
                        alt=""
                        sx={{
                          width: {
                            xs: 30,
                            md: 35,
                          },
                          height: {
                            xs: 30,
                            md: 35,
                          },
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: "#19365E",
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                        },
                        lineHeight: {
                          xs: 1.25,
                          md: 1.45,
                        },
                        fontWeight: {
                          xs: 500,
                          md: 500,
                        },
                        pl: {
                          xs: 0,
                          md: 3,
                        },
                        textAlign: {
                          xs: "center",
                          md: "left",
                        },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          display: "inline",
                        }}
                      >
                        {service.title}
                      </Box>
                    </Typography>
                  </Box>
                ))}
              </Box>
            </RevealAnimation>
            <RevealAnimation
              delay={0.6}
              duration={2}
            >
              <Button
                onClick={handleExploreServices}
                disableElevation
                sx={{
                  mt: {
                    xs: 4,
                    md: 5.5,
                  },
                  minWidth: {
                    xs: "168px",
                    md: "176px",
                  },
                  height: {
                    xs: "38px",
                    md: "44px",
                  },
                  borderRadius: "999px",
                  bgcolor: {
                    xs: "#19365E",
                  },
                  color: "#19365E",
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  fontWeight: {xs:400,md:700},
                  textTransform: "none",

                  "&:hover": {
                    bgcolor: {
                      xs: "#102A4E",
                    },
                    color: {
                      xs: "#FFFFFF",
                    },
                  },

                  color: {
                    xs: "#FFFFFF",
                  },
                }}
              >
                Explore Services
              </Button>

            </RevealAnimation>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          mt: {
            xs: "-49px",
            md: "-57px",
          },
          px: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <RevealAnimation
          delay={0.8}
          duration={2}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              bgcolor: "#FFFFFF",
              borderRadius: {
                xs: "20px",
                md: "30px",
              },
              overflow: "hidden",
              boxShadow: "0 5px 16px rgba(18, 45, 79, 0.12)",
              // border:"2px solid red"
            }}
          >
            {statistics.map((item, index) => (
              <RevealAnimation
                delay={0.8+(index*0.3)}
                // duration={2}
              >
                <Box
                  key={item.label}
                  sx={{
                    position: "relative",
                    minHeight: {
                      xs: "98px",
                      md: "154px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: {
                      xs: 2.5,
                      sm: 4,
                      md: 5,
                    },
                    borderRight: {
                      xs:
                        index % 2 === 0
                          ? "1px solid rgba(25,54,94,0.08)"
                          : "none",
                      md:
                        index !== statistics.length - 1
                          ? "1px solid rgba(25,54,94,0.1)"
                          : "none",
                    },
                    borderBottom: {
                      xs:
                        index < 2
                          ? "1px solid rgba(25,54,94,0.08)"
                          : "none",
                      md: "none",
                    },


                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 0.7,

                    }}
                  >
                    <Typography
                      sx={{
                        color: "#19365E",
                        fontSize: {
                          xs: "22px",
                          md: "40px",
                        },
                        lineHeight: 1,
                        fontWeight: 800,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {item.value}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        color: "#FF8A16",
                        fontSize: {
                          xs: "13px",
                          md: "20px",
                        },
                        lineHeight: 1,
                        fontWeight: 700,
                      }}
                    >
                      {item.suffix}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      mt: {
                        xs: 1,
                        md: 2.2,
                      },
                      color: "#19365E",
                      fontSize: {
                        xs: "12px",
                        md: "17px",
                      },
                      lineHeight: 1.35,
                      fontWeight: 400,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: {
                          xs: item.mobileLabel ? "inline" : "none",
                          md: "none",
                        },
                      }}
                    >
                      {item.mobileLabel}
                    </Box>

                    <Box
                      component="span"
                      sx={{
                        display: {
                          xs: item.mobileLabel ? "none" : "inline",
                          md: "inline",
                        },
                      }}
                    >
                      {item.label}
                    </Box>
                  </Typography>
                </Box>
              </RevealAnimation>
            ))}
          </Box>
        </RevealAnimation>
      </Container>
    </Box>
  );
}