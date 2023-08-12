import Image from 'next/image';
import home from '../../public/Home-icon.svg.png'
import Link from "next/link";

const BackMain = () => {

  return (
    <button className="absolute top-3 left-4 bg-slate-800 p-1 rounded-md">
      <Link href="/">
        <span className='flex items-center'>
        <Image alt='home' src={home} width={16} height={16} className='mr-2'/>
        Home
        </span>
        </Link>
    </button>
  );
};

export default BackMain;
