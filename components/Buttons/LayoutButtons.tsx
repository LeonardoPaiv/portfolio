import Image from 'next/image';
import home from '../../public/icons/Home-icon.svg.png'
import git from '../../public/icons/github.png'
import mail from '../../public/icons/mail.png'
import Link from "next/link";

const LayoutButtons = () => {

  return (
    <nav className='flex absolute top-3 left-4'>

    <button className="bg-slate-800 p-1 rounded-md mr-2">
      <Link href="/">
        <span className='flex items-center'>
        <Image alt='home' src={home} width={16} height={16} className='mr-2'/>
        Home
        </span>
        </Link>
    </button>
    <button className="bg-slate-800 p-1 rounded-md mr-2">
      <Link href="https://github.com/LeonardoPaiv">
        <span className='flex items-center'>
        <Image alt='Github' src={git} width={20} height={20} className='mr-2'/>
        Github
        </span>
        </Link>
    </button>
    <button className="bg-slate-800 p-1 rounded-md">
      <Link href="/">
        <span className='flex items-center'>
        <Image alt='Mail' src={mail} width={16} height={16} className='mr-2'/>
        Mail-me
        </span>
        </Link>
    </button>
    </nav>
  );
};

export default LayoutButtons;