import AboutPreview from "../components/sections/AboutPreview";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import CTASection from '../components/sections/CTASection'
import PhotoGrid from '../components/sections/PhotoGrid'
import ServicesPreview from "../components/sections/ServicesPreview";
import Testimonial from '../components/sections/Testimonial'
import FormContact from '../components/sections/FormContact'

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutPreview/>
      <TrustBar/>
      <ServicesPreview/>
      <Testimonial/>
      <PhotoGrid/>
      <CTASection/>
      <FormContact/>
    </>
  )
}