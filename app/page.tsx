import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='text-primary-black'>
      <Navbar />
      <section className='flex justify-between items-center px-24 py-16 h-screen'>
        <div className='text-primary-black'>
          <h1 className='text-[48px] font-bold leading-normal'>
            Trustworthy care for your little ones, Peace of mind for you
          </h1>
          <p className='mt-8 text-[20px] leading-normal'>
            Our team of dedicated and experienced caregivers is <br /> committed
            to providing exceptional services that <br /> guarantee peace of
            mind for YOU
          </p>
          <div className='mt-8'>
            <button className='p-2 bg-button border-2 border-primary-black rounded-lg gap-2'>
              Book appointment
            </button>
          </div>
        </div>
        <div className='relative h-[574px] w-[466px]'>
          <Image src='/Woman.svg' alt='Woman' fill className='object-contain' />
        </div>
      </section>
      <Footer />
    </div>
  )
}
