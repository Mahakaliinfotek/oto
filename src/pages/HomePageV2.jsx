import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

import { Box } from "@mui/material";
import { CompanyStripHomePage } from "../components/homepagev2/CompanyStripHomePage";
import HeroSection from "../components/homepagev2/HeroSection";
import DifferenceSection from "../components/homepagev2/DifferenceSection";
import CoreOfferingsSection from "../components/homepagev2/CoreOfferingsSection";
import StevedoringSection from "../components/homepagev2/StevedoringSection";
import AchievementsSection from "../components/homepagev2/AchievementsSection";
import ClientsVisionSection from "../components/homepagev2/ClientsVisionSection";
import BusinessesSection from "../components/homepagev2/BusinessesSection";

export default function HomePageV2() {
  return (
    <Box
      sx={{
        bgcolor: "#F7F7F7",
        fontFamily: '"IBM Plex Sans", sans-serif',

        "& *": {
          fontFamily: '"IBM Plex Sans", sans-serif',
        },
      }}
    >
      
      <HeroSection />
      <CompanyStripHomePage />
      <DifferenceSection />
      <CoreOfferingsSection />
      <StevedoringSection />
      <AchievementsSection />
      <ClientsVisionSection />
      <BusinessesSection />
    </Box>
  );
}