import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Rating,
    FormHelperText,
} from "@mui/material";

import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toast";

const feedbackCategories = [
    {
        value: "Website Experience",
        label: "Website Experience",
    },
    {
        value: "Products and Services",
        label: "Products and Services",
    },
    {
        value: "Customer Support",
        label: "Customer Support",
    },
    {
        value: "Business Enquiry Experience",
        label: "Business Enquiry Experience",
    },
    {
        value: "Suggestion",
        label: "Suggestion",
    },
    {
        value: "Complaint",
        label: "Complaint",
    },
    {
        value: "Other",
        label: "Other",
    },
];

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            category: "",
            rating: 0,
            feedback: "",
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
                .matches(/^[0-9+()]*$/, "Enter a valid phone number")
                .min(7, "Phone number is too short")
                .max(15, "Phone number is too long")
                .nullable(),

            category: Yup.string().required("Please select a feedback category"),

            rating: Yup.number()
                .min(1, "Please provide a rating")
                .max(5, "Rating cannot exceed 5")
                .required("Please provide a rating"),

            feedback: Yup.string()
                .trim()
                .min(10, "Feedback must contain at least 10 characters")
                .max(2000, "Feedback cannot exceed 2000 characters")
                .required("Feedback is required"),
        }),

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const payload = {
                    form_type: "feedback",

                    name: values.name.trim(),
                    email: values.email.trim().toLowerCase(),
                    phone: values.phone?.trim() || "",
                    company: values.company?.trim() || "",

                    description: values.feedback.trim(),

                    enquired_company: "Oshiyamaa Transport Operator",
                    feedback_category: values.category,
                    rating: Number(values.rating),
                };

                const response = await axios.post(
                    "https://api-dev.indiazona.in/user-service/public/email-enquiry",
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                toast.success(
                    response?.data?.message || "Feedback submitted successfully!"
                );

                resetForm();
            } catch (error) {
                console.error("Feedback submission failed:", error);

                const errorMessage =
                    error?.response?.data?.message ||
                    "Failed to submit feedback. Please try again.";

                toast.error(errorMessage);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleRatingChange = (_, newValue) => {
        formik.setFieldValue("rating", newValue || 0);
        formik.setFieldTouched("rating", true, false);
    };

    const fieldStyles = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#fff",

            "& fieldset": {
                borderColor: "#D5DEEA",
            },

            "&:hover fieldset": {
                borderColor: "#193B6C",
            },

            "&.Mui-focused fieldset": {
                borderColor: "#193B6C",
                borderWidth: "1.5px",
            },
        },

        "& .MuiInputLabel-root.Mui-focused": {
            color: "#193B6C",
        },

        "& .MuiInputBase-input": {
            fontFamily: "Manrope, sans-serif",
        },

        "& .MuiFormHelperText-root": {
            mx: 0.5,
            fontFamily: "Manrope, sans-serif",
        },
    };

    return (
        <Box
            component="section"
            id="feedback-section"
            sx={{
                width: "100%",
                px: { xs: 2, sm: 3, md: 5 },
                py: { xs: 5, md: 8 },
                backgroundColor: "#F5F7FA",
                fontFamily: "Manrope, sans-serif",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1280px",
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "minmax(0, 0.85fr) minmax(420px, 1.15fr)",
                    },
                    borderRadius: { xs: "20px", md: "28px" },
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    boxShadow: "0 20px 60px rgba(0, 68, 91, 0.08)",
                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: {
                            xs: 3,
                            sm: 4,
                            md: 6,
                        },
                        minHeight: {
                            xs: "auto",
                            md: 650,
                        },
                        color: "#fff",
                        background:
                            "linear-gradient(145deg, #193B6C 0%, #234D87 55%, #2D5D9D 100%)",
                        overflow: "hidden",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            width: 280,
                            height: 280,
                            borderRadius: "50%",
                            top: -120,
                            right: -100,
                            backgroundColor: "rgba(255,255,255,0.07)",
                        },

                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            bottom: -100,
                            left: -80,
                            backgroundColor: "rgba(255,255,255,0.06)",
                        },
                    }}
                >
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Box
                            sx={{
                                width: 58,
                                height: 58,
                                borderRadius: "16px",
                                backgroundColor: "rgba(255,255,255,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 3,
                            }}
                        >
                            <FeedbackOutlinedIcon sx={{ fontSize: 30 }} />
                        </Box>

                        <Typography
                            component="h1"
                            sx={{
                                fontFamily: "Manrope, sans-serif",
                                fontSize: {
                                    xs: "28px",
                                    sm: "34px",
                                    md: "42px",
                                },
                                lineHeight: 1.15,
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            Your feedback helps us improve
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 520,
                                color: "rgba(255,255,255,0.82)",
                                fontFamily: "Manrope, sans-serif",
                                fontSize: {
                                    xs: "15px",
                                    md: "17px",
                                },
                                lineHeight: 1.7,
                            }}
                        >
                            Share your experience, suggestion or concern with us. Every
                            response helps us improve our services and deliver a better
                            experience.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.2,
                            mt: {
                                xs: 4,
                                md: 6,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                            }}
                        >
                            <SentimentSatisfiedAltOutlinedIcon
                                sx={{
                                    mt: 0.25,
                                    color: "#CDE8DE",
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 700,
                                        mb: 0.4,
                                    }}
                                >
                                    Tell us about your experience
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.72)",
                                        fontFamily: "Manrope, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Let us know what worked well and where we can improve.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                            }}
                        >
                            <SupportAgentOutlinedIcon
                                sx={{
                                    mt: 0.25,
                                    color: "#CDE8DE",
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 700,
                                        mb: 0.4,
                                    }}
                                >
                                    Our team will review it
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.72)",
                                        fontFamily: "Manrope, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Relevant feedback will be shared with the appropriate team.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                            }}
                        >
                            <CheckCircleOutlineRoundedIcon
                                sx={{
                                    mt: 0.25,
                                    color: "#CDE8DE",
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 700,
                                        mb: 0.4,
                                    }}
                                >
                                    Your details remain private
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.72)",
                                        fontFamily: "Manrope, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    We only use your information to understand and respond to
                                    your feedback.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* RIGHT FORM */}
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
                            color: "#193B6C",
                            fontFamily: "Manrope, sans-serif",
                            fontSize: {
                                xs: "24px",
                                md: "30px",
                            },
                            fontWeight: 800,
                            mb: 1,
                        }}
                    >
                        Share your feedback
                    </Typography>

                    <Typography
                        sx={{
                            color: "#687572",
                            fontFamily: "Manrope, sans-serif",
                            fontSize: {
                                xs: "14px",
                                md: "15px",
                            },
                            lineHeight: 1.6,
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
                                type="tel"
                                name="phone"
                                label="Phone number"
                                placeholder="Phone number (optional)"
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
                                select
                                fullWidth
                                required
                                name="category"
                                label="Feedback category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.category &&
                                    Boolean(formik.errors.category)
                                }
                                helperText={
                                    formik.touched.category &&
                                    formik.errors.category
                                }
                                sx={{
                                    ...fieldStyles,
                                    gridColumn: {
                                        xs: "auto",
                                        sm: "1 / -1",
                                    },
                                }}
                            >
                                {feedbackCategories.map((category) => (
                                    <MenuItem
                                        key={category.value}
                                        value={category.value}
                                        sx={{
                                            fontFamily: "Manrope, sans-serif",
                                        }}
                                    >
                                        {category.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <Box
                                sx={{
                                    gridColumn: {
                                        xs: "auto",
                                        sm: "1 / -1",
                                    },
                                    p: 2.2,
                                    border: "1px solid",
                                    borderColor:
                                        formik.touched.rating && formik.errors.rating
                                            ? "error.main"
                                            : "#D5DEEA",
                                    borderRadius: "12px",
                                    backgroundColor: "#fff",
                                }}
                            >
                                <Typography
                                    component="label"
                                    sx={{
                                        display: "block",
                                        color: "#27302E",
                                        fontFamily: "Manrope, sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    How would you rate your experience? *
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                        alignItems: {
                                            xs: "flex-start",
                                            sm: "center",
                                        },
                                        gap: 1.5,
                                    }}
                                >
                                    <Rating
                                        name="rating"
                                        size="large"
                                        value={formik.values.rating}
                                        onChange={handleRatingChange}
                                        onBlur={() =>
                                            formik.setFieldTouched(
                                                "rating",
                                                true
                                            )
                                        }
                                        sx={{
                                            "& .MuiRating-iconFilled": {
                                                color: "#F2A900",
                                            },
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color: "#687572",
                                            fontFamily: "Manrope, sans-serif",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {formik.values.rating
                                            ? `${formik.values.rating} out of 5`
                                            : "Select a rating"}
                                    </Typography>
                                </Box>

                                {formik.touched.rating &&
                                    formik.errors.rating && (
                                        <FormHelperText error sx={{ ml: 0 }}>
                                            {formik.errors.rating}
                                        </FormHelperText>
                                    )}
                            </Box>

                            <TextField
                                fullWidth
                                required
                                multiline
                                minRows={5}
                                name="feedback"
                                label="Your feedback"
                                placeholder="Tell us about your experience, suggestion or concern..."
                                value={formik.values.feedback}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.feedback &&
                                    Boolean(formik.errors.feedback)
                                }
                                helperText={
                                    formik.touched.feedback
                                        ? formik.errors.feedback
                                        : `${formik.values.feedback.length}/2000 characters`
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
                                        ...fieldStyles[
                                        "& .MuiOutlinedInput-root"
                                        ],
                                        alignItems: "flex-start",
                                    },
                                }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={formik.isSubmitting}
                            sx={{
                                mt: 3.5,
                                minHeight: 54,
                                borderRadius: "12px",
                                backgroundColor: "#193B6C",
                                color: "#fff",
                                fontFamily: "Manrope, sans-serif",
                                fontSize: {
                                    xs: "15px",
                                    md: "17px",
                                },
                                fontWeight: 700,
                                textTransform: "none",
                                boxShadow: "none",

                                "&:hover": {
                                    backgroundColor: "#2D5D9D",
                                    boxShadow: "none",
                                },

                                "&.Mui-disabled": {
                                    backgroundColor: "#AEBFBA",
                                    color: "#fff",
                                },
                            }}
                        >
                            {formik.isSubmitting
                                ? "Submitting feedback..."
                                : "Submit Feedback"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FeedbackForm;