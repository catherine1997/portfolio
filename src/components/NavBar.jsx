
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavBar =() => {
  return (
    <div className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
      <a href="/" aria-label='Home'>
      {/* <img src={logo} className='mx-2' width={50} height={33} alt='Logo' /> */}
      <p className='text-2xl font-semibold lg:text-4xl'>BCM</p>
      </a>
      </div>

      <div className='mx-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/maigida-catherine-a4a417188"
                target='blank'
                rel='noopener noreferer'      
                aria-label='LinkedIn'      
            >
            <FaLinkedin />
            </a>

            <a href="https://github.com/catherine1997"
                target='blank'
                rel='noopener noreferer'      
                aria-label='Github'      
            >
            <FaGithub />
            </a>

            <a href="https://www.instagram.com/in/cathybaha"
                target='blank'
                rel='noopener noreferer'      
                aria-label='Instagram'      
            >
            <FaInstagram />
            </a>

            <a href="https://www.twitter.com/in/MaigidaCathy"
                target='blank'
                rel='noopener noreferer'      
                aria-label='Twitter'      
            >
            <FaTwitter/>
            </a>
      </div>
    </div>
  )
}

export default NavBar
