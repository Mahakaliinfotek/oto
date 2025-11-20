import { useState } from "react";
import CompanyStrip from "../components/common/CompanyStrip";
import HeroSlider from "../components/common/HeroSlider";
import BusinessesSection from "../components/homepage/BusinessesSection";
import HistorySection from "../components/homepage/HistorySection";
import MediaCSRSection from "../components/homepage/MediaCSRSection";
import PeopleCultureSlider from "../components/homepage/PeopleCultureSlider";
import SustainabilitySection from "../components/homepage/SustainabilitySection";
import VisionSection from "../components/homepage/VisionSection";
import Header from "../layouts/Header";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";
import BusinessSidebar from "../components/homepage/BusinessSidebar";
import BusinessFocus from "../components/homepage/BusinessFocus";
import StatsSection from "../components/homepage/StatsSection";
import CoreOfferings from "../components/homepage/CoreOfferings";
import USPsSection from "../components/homepage/USPsSection";
import Achievements from "../components/homepage/Achievements";
import ClientsScroller from "../components/homepage/ClientScroller";
import CoreOfferings2 from "../components/homepage/CoreOfferings2";
import ContactUs from "../components/homepage/ContactUs"
const HomePage = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <Header />
            <HeroSlider />
            <CompanyStrip />
            <Box
                sx={{
                    width: "100%",
                    // maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    gap: 3,
                    px: { xs: 2, md: 0 },
                    py: { xs: 3, md: 6 },
                }}
            >
                {/* LEFT SIDEBAR */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <BusinessSidebar scrollToSection={scrollToSection} />
                </Box>

                {/* RIGHT CONTENT AREA */}
                <Box sx={{
                    flex: 0.99, 
                    overflowX: "hidden", 
                    scrollbarWidth: "none",         // Firefox
                    msOverflowStyle: "none",        // IE/Edge
                    "&::-webkit-scrollbar": {
                        display: "none",            // Chrome/Safari
                    },
                }}>
                    <Box id="business-focus"><BusinessFocus /></Box>
                    <Box id="stats"><StatsSection /></Box>
                    <Box id="usps"><USPsSection /></Box>
                    <Box id="core-offerings"><CoreOfferings2 /></Box>
                    <Box id="achievements"><Achievements /></Box>
                    <Box id="clients"><ClientsScroller /></Box>

                  
                </Box>
            </Box>
            <PeopleCultureSlider />
            <VisionSection />
            <BusinessesSection />
            <HistorySection />
            <SustainabilitySection />
            <MediaCSRSection />
            <CompanyStrip />
            <ContactUs/>
            {/* MOBILE HAMBURGER FLOAT BUTTON */}
            <IconButton
                onClick={() => setOpenSidebar(true)}
                sx={{
                    display: { xs: "flex", md: "none" },
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 2000,
                    bgcolor: "#1B335B",
                    color: "white",
                    "&:hover": { bgcolor: "#1B335B" },
                }}
            >
                <MenuIcon />
            </IconButton>
            {/* MOBILE DRAWER SIDEBAR */}
            <Drawer
                anchor="left"
                open={openSidebar}
                onClose={() => setOpenSidebar(false)}
                PaperProps={{
                    sx: {
                        width: "70%",
                        bgcolor: "#1B335B",
                        color: "white",
                        p: 2,
                    },
                }}
            >
                <BusinessSidebar scrollToSection={(id) => {
                    setOpenSidebar(false);      // Close menu after click
                    scrollToSection(id);
                }} />
            </Drawer>




        </>
    );
}
export default HomePage;