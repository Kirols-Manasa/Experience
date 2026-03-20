import React from "react";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title = "مرحبا بك!" }) => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6">
      <h1 className="text-3xl font-extrabold text-center drop-shadow-lg">
        {title}
      </h1>
    </header>
  );
};

export default Header;