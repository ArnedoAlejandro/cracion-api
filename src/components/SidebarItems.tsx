"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props{
  icon: React.ReactNode,
  path: string,
  title: string
}

const SidebarItems = ( { icon, path, title } : Props) => {

  const pathName = usePathname()


  return (
      <li>
        <Link
          href={path}
          className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gray-100 text-gray-600 group ${path === pathName ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : ""}`}
        >
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>


  );
};

export default SidebarItems;
