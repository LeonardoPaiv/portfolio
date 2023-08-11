import Link from "next/link";

const LiNavigate = ({ label, link }: { label: string; link: string }) => {
  return (
    <li
      className={`text-lg transition-all hover:cursor-pointer hover:text-2xl
     hover:bg-slate-600 hover:p-2 hover:rounded-md`}
    >
      <Link href={link}>{label}</Link>
    </li>
  );
};

export default LiNavigate;
