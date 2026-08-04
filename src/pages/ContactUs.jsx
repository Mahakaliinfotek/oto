import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toast";

const API_URL =
  "https://orange-manatee-552356.hostingersite.com/api/send-email";

const colors = {
  primary: "#193B6C",
  primaryDark: "#122E56",
  primaryLight: "#2D5D9D",
  pageBackground: "#F5F7FA",
  softBackground: "#F8FAFD",
  border: "#D5DEEA",
  text: "#26354A",
  secondaryText: "#667085",
  lightText: "#E2E2E2",
  iconAccent: "#D9E5F5",
};

const contactDetails = [
  {
    id: "address",
    icon: <LocationOnOutlinedIcon />,
    title: "Corporate Office",
    content: (
      <>
        Door No. 43-4-12/1, 2nd Floor, Vyshnavi Magnum,
        <br />
        Opp. Indian Oil, Dondaparthy, Railway New Colony,
        <br />
        Visakhapatnam – 530016, Andhra Pradesh, India
      </>
    ),
  },
  {
    id: "phone",
    icon: <PhoneOutlinedIcon />,
    title: "Phone",
    content: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
        <Link
          href="tel:08912539553"
          underline="none"
          sx={{
            color: "inherit",
            width: "fit-content",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          0891-2539553
        </Link>
      </Box>
    ),
  },
  {
    id: "email",
    icon: <MailOutlineOutlinedIcon />,
    title: "Email",
    content: (
      <Link
        href="mailto:info@mahakaliudyog.com"
        underline="none"
        sx={{
          color: "inherit",
          overflowWrap: "anywhere",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        info@mahakaliudyog.com
      </Link>
    ),
  },
//   {
//     id: "hours",
//     icon: <AccessTimeOutlinedIcon />,
//     title: "Business Hours",
//     content: (
//       <>
//         Monday to Saturday
//         <br />
//         10:00 AM – 6:00 PM
//       </>
//     ),
//   },
];

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, "Name must contain at least 2 characters")
        .max(80, "Name cannot exceed 80 characters")
        .required("Name is required"),

      company: Yup.string()
        .trim()
        .max(100, "Company name cannot exceed 100 characters"),

      email: Yup.string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),

      phone: Yup.string()
        .transform((value) =>
          typeof value === "string"
            ? value.replace(/[\s-]/g, "")
            : value
        )
        .matches(/^[0-9+()]+$/, "Enter a valid phone number")
        .min(7, "Phone number is too short")
        .max(15, "Phone number is too long")
        .required("Phone number is required"),

      message: Yup.string()
        .trim()
        .min(10, "Message must contain at least 10 characters")
        .max(2000, "Message cannot exceed 2000 characters")
        .required("Message is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload = {
          form_type: "enquiry",
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim().toLowerCase(),
          phone: values.phone.trim(),
          description: values.message.trim(),
          enquired_company: "Oshiyamaa Transport Operator",
        };

        const response = await axios.post(API_URL, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        toast.success(
          response?.data?.message || "Enquiry submitted successfully!"
        );

        resetForm();
      } catch (error) {
        console.error("Contact form submission failed:", error);

        const message =
          error?.response?.data?.message ||
          "Failed to submit your enquiry. Please try again.";

        toast.error(message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",

      "& fieldset": {
        borderColor: colors.border,
      },

      "&:hover fieldset": {
        borderColor: colors.primary,
      },

      "&.Mui-focused fieldset": {
        borderColor: colors.primary,
        borderWidth: "1.5px",
      },
    },

    "& .MuiInputLabel-root": {
      fontFamily: "Manrope, sans-serif",
      color: colors.secondaryText,
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colors.primary,
    },

    "& .MuiInputBase-input": {
      fontFamily: "Manrope, sans-serif",
      color: colors.text,
    },

    "& .MuiFormHelperText-root": {
      mx: 0.5,
      fontFamily: "Manrope, sans-serif",
    },
  };

  return (
    <Box
      component="main"
      id="contact-section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: colors.pageBackground,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* PAGE HEADER */}
      <Box
        sx={{
          position: "relative",
          px: { xs: 2, sm: 4, md: 8 },
          pt: { xs: 7, md: 10 },
          pb: { xs: 12, md: 15 },
          color: "#FFFFFF",
          textAlign: "center",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #193B6C 0%, #234D87 55%, #2D5D9D 100%)",

          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 220, md: 380 },
            height: { xs: 220, md: 380 },
            borderRadius: "50%",
            top: { xs: -120, md: -210 },
            right: { xs: -100, md: -120 },
            backgroundColor: "rgba(255,255,255,0.06)",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            borderRadius: "50%",
            bottom: { xs: -110, md: -180 },
            left: { xs: -90, md: -100 },
            backgroundColor: "rgba(255,255,255,0.05)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 760,
            mx: "auto",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              mb: 1.5,
              px: 2,
              py: 0.8,
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50px",
              backgroundColor: "rgba(255,255,255,0.08)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Get in touch
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "32px",
                sm: "42px",
                md: "54px",
              },
              lineHeight: 1.12,
              fontWeight: 800,
              mb: 2,
            }}
          >
            Let’s start a conversation
          </Typography>

          <Typography
            sx={{
              maxWidth: 660,
              mx: "auto",
              color: "rgba(255,255,255,0.8)",
              fontSize: {
                xs: "15px",
                md: "18px",
              },
              lineHeight: 1.7,
            }}
          >
            Have a business enquiry, partnership proposal or question for our
            team? Share your details and we will get back to you.
          </Typography>
        </Box>
      </Box>

      {/* CONTENT CARD */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          mt: { xs: -7, md: -9 },
          px: { xs: 2, sm: 3, md: 5 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 0.85fr) minmax(480px, 1.15fr)",
            },
            overflow: "hidden",
            borderRadius: { xs: "20px", md: "28px" },
            backgroundColor: "#FFFFFF",
            boxShadow: "0 24px 70px rgba(25, 59, 108, 0.12)",
          }}
        >
          {/* CONTACT DETAILS */}
          <Box
            sx={{
              p: {
                xs: 3,
                sm: 4,
                md: 6,
              },
              backgroundColor: colors.softBackground,
              borderRight: {
                xs: "none",
                md: `1px solid ${colors.border}`,
              },
              borderBottom: {
                xs: `1px solid ${colors.border}`,
                md: "none",
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: colors.primary,
                fontSize: {
                  xs: "25px",
                  md: "32px",
                },
                fontWeight: 800,
                mb: 1.2,
              }}
            >
              Contact information
            </Typography>

            <Typography
              sx={{
                color: colors.secondaryText,
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Reach us directly using the contact information below or complete
              the enquiry form.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {contactDetails.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: { xs: 2, md: 2.4 },
                    border: `1px solid ${colors.border}`,
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    transition:
                      "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: colors.primary,
                      boxShadow: "0 12px 30px rgba(25, 59, 108, 0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      color: colors.primary,
                      backgroundColor: "#EAF0F8",

                      "& svg": {
                        fontSize: 23,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: colors.primary,
                        fontSize: "15px",
                        fontWeight: 700,
                        mb: 0.6,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      sx={{
                        color: colors.secondaryText,
                        fontSize: "14px",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.content}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* CONTACT FORM */}
          <Box
            sx={{
              p: {
                xs: 3,
                sm: 4,
                md: 6,
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: colors.primary,
                fontSize: {
                  xs: "25px",
                  md: "32px",
                },
                fontWeight: 800,
                mb: 1,
              }}
            >
              Send us an enquiry
            </Typography>

            <Typography
              sx={{
                color: colors.secondaryText,
                fontSize: {
                  xs: "14px",
                  md: "15px",
                },
                lineHeight: 1.65,
                mb: 4,
              }}
            >
              Fields marked with an asterisk are required.
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 2.2,
                }}
              >
                <TextField
                  fullWidth
                  required
                  name="name"
                  label="Full name"
                  placeholder="Enter your full name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.name &&
                    Boolean(formik.errors.name)
                  }
                  helperText={
                    formik.touched.name &&
                    formik.errors.name
                  }
                  sx={fieldStyles}
                />

                <TextField
                  fullWidth
                  name="company"
                  label="Company"
                  placeholder="Company name (optional)"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.company &&
                    Boolean(formik.errors.company)
                  }
                  helperText={
                    formik.touched.company &&
                    formik.errors.company
                  }
                  sx={fieldStyles}
                />

                <TextField
                  fullWidth
                  required
                  type="email"
                  name="email"
                  label="Email address"
                  placeholder="Enter your email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.email &&
                    Boolean(formik.errors.email)
                  }
                  helperText={
                    formik.touched.email &&
                    formik.errors.email
                  }
                  sx={fieldStyles}
                />

                <TextField
                  fullWidth
                  required
                  type="tel"
                  name="phone"
                  label="Phone number"
                  placeholder="Enter your phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phone &&
                    Boolean(formik.errors.phone)
                  }
                  helperText={
                    formik.touched.phone &&
                    formik.errors.phone
                  }
                  sx={fieldStyles}
                />

                <TextField
                  fullWidth
                  required
                  multiline
                  minRows={6}
                  name="message"
                  label="Your message"
                  placeholder="Tell us how we can help..."
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message &&
                    Boolean(formik.errors.message)
                  }
                  helperText={
                    formik.touched.message
                      ? formik.errors.message
                      : `${formik.values.message.length}/2000 characters`
                  }
                  inputProps={{
                    maxLength: 2000,
                  }}
                  sx={{
                    ...fieldStyles,
                    gridColumn: {
                      xs: "auto",
                      sm: "1 / -1",
                    },

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "#FFFFFF",
                      alignItems: "flex-start",

                      "& fieldset": {
                        borderColor: colors.border,
                      },

                      "&:hover fieldset": {
                        borderColor: colors.primary,
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: colors.primary,
                        borderWidth: "1.5px",
                      },
                    },
                  }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={formik.isSubmitting}
                endIcon={
                  !formik.isSubmitting ? <SendRoundedIcon /> : null
                }
                sx={{
                  mt: 3.5,
                  minHeight: 54,
                  borderRadius: "12px",
                  backgroundColor: colors.primary,
                  color: "#FFFFFF",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: {
                    xs: "15px",
                    md: "17px",
                  },
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "none",
                  transition:
                    "background-color 0.25s ease, transform 0.25s ease",

                  "&:hover": {
                    backgroundColor: colors.primaryDark,
                    boxShadow: "none",
                    transform: "translateY(-1px)",
                  },

                  "&.Mui-disabled": {
                    backgroundColor: "#9BAAC0",
                    color: "#FFFFFF",
                  },
                }}
              >
                {formik.isSubmitting
                  ? "Sending enquiry..."
                  : "Submit Enquiry"}
              </Button>

              <Typography
                sx={{
                  mt: 2,
                  color: colors.secondaryText,
                  fontSize: "12px",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                By submitting this form, you agree that our team may contact
                you regarding your enquiry.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;