import React from "react";
import CompanyStrip from "../common/CompanyStrip";
import { Stack } from "@mui/material";

export const CompanyStripHomePage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#fff",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: { xs: 2, md: 6 },
          width: { xs: "45px", sm: "80px", md: "150px" },
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0) 100%)",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: { xs: 2, md: 6 },
          width: { xs: "45px", sm: "80px", md: "150px" },
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0) 100%)",
        },
      }}
    >
      <CompanyStrip
        speed="10"
        height={{ xs: 30, md: 40 }}
        width="90%"
      />
    </Stack>
  );
};