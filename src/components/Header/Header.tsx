import React from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  title?: string;
  navItems?: NavItem[];
};

const Header: React.FC<Props> = ({
  title = "مرحبا بك!",
  navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "حول", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ],
}) => {
  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-4 px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition">
          تسجيل دخول
        </button>
      </div>
    </header>
  );
};

export default Header;