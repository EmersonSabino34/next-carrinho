import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#1D1D1D] h-15 flex items-center p-2 text-white">
      <ul className="gap-5 flex">
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#171b52] transition-colors duration-300">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#171b52] transition-colors duration-300">
          <Link href="/carrinho">Meu Carrinho</Link>
        </li>
      </ul>
    </header>
  );
}
