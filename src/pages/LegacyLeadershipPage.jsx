import { Box } from "@mui/material";
import PhilosophySection from "../components/legacyLeadership/PhilosophySection";
import CultureSection from "../components/legacyLeadership/CultureSection";
import FamilyCommitmentSection from "../components/legacyLeadership/FamilyCommitmentSection";
import JoinUsSection from "../components/legacyLeadership/JoinUsSection";
import FooterSection from "../components/legacyLeadership/FooterSection";
import HeroSection from "../components/legacyLeadership/HeroSection";
import Header from "../layouts/Header";

export default function LegacyLeadershipPage() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.light" }}>
    <Header isDark={false}/>
      <HeroSection />
      <PhilosophySection />
      <CultureSection />
      <FamilyCommitmentSection />
      <JoinUsSection />
      <FooterSection />
    </Box>
  );
}
