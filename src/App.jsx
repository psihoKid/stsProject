import './App.css'
import Header from './Elements/Header'
import HeroSection from './Elements/Hero'
import MissionSection from './Elements/MissionSection'
import ProductDevelopment from './Elements/ProductDevelopment'
import ApproachSection from './Elements/ApproachSection'
import DevelopmentFeatures from './Elements/DevelopmentFeatures'
import InfrastructureSecurity from './Elements/InfrastructureSecurity'
import Footer from './Elements/Footer'
function App() {


  return (
    <>
      <div className="font-inter scroll-smooth">
        <Header />
        <main>
          <HeroSection />
          <MissionSection />
          <ProductDevelopment />
          <ApproachSection />
          <DevelopmentFeatures />
          <InfrastructureSecurity />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
