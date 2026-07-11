// import CompanyStrip from "../components/common/CompanyStrip";
import { Box } from "@mui/material";
import { CompanyStripHomePage } from "../components/homepagev2/CompanyStripHomePage";
import HeroSection from "../components/homepagev2/HeroSection";
import DifferenceSection from "../components/homepagev2/DifferenceSection";
import CoreOfferingsSection from "../components/homepagev2/CoreOfferingsSection";
import StevedoringSection from "../components/homepagev2/StevedoringSection";
import AchievementsSection from "../components/homepagev2/AchievementsSection";

export default function HomePageV2() {
  return (
    <Box
        sx={{
            bgcolor: "#F7F7F7",
        }}
    >
      <HeroSection />
      <CompanyStripHomePage />
      <DifferenceSection />
      <CoreOfferingsSection />
      <StevedoringSection />
      <AchievementsSection />
    </Box>
  );
}