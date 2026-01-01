import { Footer } from "./Components/Footer"
import { AboutSection } from "./Components/Sections/AboutSection"
import { ContactSection } from "./Components/Sections/ContactSection"
import { HomeSection } from "./Components/Sections/HomeSection"
import { PortfolioSection } from "./Components/Sections/PortfolioSection"
import { ResumeSection } from "./Components/Sections/ResumeSection"
import { ServicesSection } from "./Components/Sections/ServicesSection"
import TopBar from "./Components/TopBar"

const Index = () => {
    return (
        <div >
            <TopBar />


            <HomeSection />
            <AboutSection />
            <ResumeSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />




        </div>
    )
}
export default Index