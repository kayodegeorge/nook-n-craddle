import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t-2 border-primary-black flex justify-between px-24 py-16 mt-5'>
      <Image alt='Logo Image' src='/logo.svg' width={210} height={30} />
      <div className='flex gap-8 text-primary-black'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className='flex gap-2'>
        <div className='py-3 px-4 border border-primary-black rounded-[60px]'>
          Instagram
        </div>
        <div className='py-3 px-4 border-primary-black border rounded-[60px]'>
          Twitter
        </div>
      </div>
    </footer>
  )
}

export default Footer
