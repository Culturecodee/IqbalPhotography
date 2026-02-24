import AboutPreview from '../components/sections/AboutPreview'
import Reveal from '../components/sections/Reveal'

export default function Portfolio() {
  return (
    <>
    <Reveal>
      <section className='pt-24 px-9 md:pt-24 md:px-36'>
        <h1 className='font-serif text-brand-gold text-4xl md:text-5xl mt-2 tracking-tight'>Get to know us better</h1>
        <p className='font-serif text-gray-700 text-2xl md:text-3xl mt-2'>Let's get to know each other better to create unforgettable memories.</p>
      </section>
      <AboutPreview/> 
    </Reveal>
    </>
  )
}