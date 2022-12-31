import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link
      href={href}
      className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400"
    >
      {text}
    </Link>
  );
};

export default NavItem;
