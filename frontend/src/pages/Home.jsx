
import Contact from "../components/Contact"
import FAQ from "../components/Faq"
import Features from "../components/Feature"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navabar"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
