import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-background flex justify-between items-center py-0 px-[100px] border-b-2 border-primary-black'>
      <div className='flex gap-8 text-primary-black'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <Image alt='Logo Image' src='/logo.svg' width={210} height={30} />
      <button className='p-8 right-0 bg-primary-black text-background font-medium'>
        Book apointment
      </button>
    </nav>
  )
}

export default Navbar
