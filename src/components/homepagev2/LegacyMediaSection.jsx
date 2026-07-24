import { Box, Container, Typography } from "@mui/material";

const NAVY = "#1C3A65";
const PILL = "#E8EEF5";

const linkStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: {
    xs: 140,
    sm: 168,
    md: 214,
  },
  minHeight: {
    xs: 48,
    md: 46,
  },
  px: 3,
  borderRadius: "999px",
  bgcolor: PILL,
  color: "#17345C",
  fontSize: {
    xs: "16px",
    sm: "18px",
    md: "16px",
  },
  lineHeight: 1,
  fontWeight: 600,
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color 200ms ease, transform 200ms ease",

  "&:hover": {
    bgcolor: "#DCE6F1",
    transform: "translateY(-1px)",
  },

  "&:focus-visible": {
    outline: "3px solid #F59A23",
    outlineOffset: "3px",
  },
};

export default function LegacyMediaSection() {
  return (
    <Box component="section" aria-label="Our legacy and media">
      <Box
        sx={{
          bgcolor: NAVY,
          color: "#FFFFFF",
          py: {
            xs: 5.2,
            md: 8,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 3,
              sm: 4,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 495px",
              },
              alignItems: "center",
              gap: {
                xs: 5.8,
                md: 7,
              },
            }}
          >
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "30px",
                    md: "40px",
                  },
                  lineHeight: 1.15,
                  fontWeight: 700,
                  mb: {
                    xs: 3.1,
                    md: 2.5,
                  },
                }}
              >
                Our Legacy
              </Typography>

              <Typography
                sx={{
                  maxWidth: 480,
                  fontSize: {
                    xs: "19px",
                    md: "17px",
                  },
                  lineHeight: {
                    xs: 1.48,
                    md: 1.45,
                  },
                  fontWeight: 400,
                }}
              >
                From a single desk in Kolkata in 1984 to a trusted global
                resource network spanning four decades
              </Typography>
            </Box>

            <Box
              sx={{
                minHeight: {
                  xs: 103,
                  md: 101,
                },
                bgcolor: "#FFFFFF",
                color: "#17345C",
                border: "1px solid rgba(23,52,92,0.16)",
                borderRadius: {
                  xs: "9px",
                  md: "14px",
                },
                px: {
                  xs: 2,
                  sm: 4,
                  md: 3.8,
                },
                py: 2.1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.2 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "38px",
                        md: "30px",
                      },
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    45
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ color: "#F28C1B", fontSize: "20px", fontWeight: 600 }}
                  >
                    +
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    mt: 0.8,
                    fontSize: {
                      xs: "16px",
                      sm: "19px",
                      md: "16px",
                    },
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  Years of operations
                </Typography>
              </Box>

              <Box
                component="a"
                href="https://themahakaligroup.com/about-us"
                sx={linkStyles}
              >
                View Journey
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          py: {
            xs: 3,
            md: 5.7,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2.7,
              sm: 4,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              minHeight: {
                xs: 167,
                md: 183,
              },
              bgcolor: NAVY,
              color: "#FFFFFF",
              borderRadius: {
                xs: "37px",
                md: "17px",
              },
              px: {
                xs: 3,
                sm: 6.2,
                md: 9.2,
              },
              py: {
                xs: 4.7,
                md: 4,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "28px",
                    md: "40px",
                  },
                  lineHeight: 1.15,
                  fontWeight: 700,
                  mb: {
                    xs: 1.2,
                    md: 2.4,
                  },
                }}
              >
                Media and CSR
              </Typography>
              <Typography
                sx={{
                  maxWidth: {
                    xs: 180,
                    sm: 235,
                    md: 420,
                  },
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "17px",
                  },
                  lineHeight: 1.35,
                }}
              >
                Recognition that reflects our impact
              </Typography>
            </Box>

            <Box
              component="a"
              href="https://themahakaligroup.com/csr"
              sx={linkStyles}
            >
              View More
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
