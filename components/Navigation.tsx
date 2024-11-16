'use client'
// Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo/logo.png';
import Link from 'next/link';

interface MenuItem {
    label: string;
    href: string;
}
const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Wedding Services', href: '/services' },
    { label: 'Publications', href: '/blog' },
    { label: 'Suppliers', href: '/suppliers' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
];

const Navigation: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href={'/'}><Image src={logo} alt="Logo" width={100} height={40} /></Link>
                <div className="lg:hidden">
                    <button
                        onClick={handleMenuToggle}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <ul
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6`}
                >
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-gray-700 hover:text-pink-500"
                            >
                                {item.label}
                                </Link>
                        </li>
                    ))}
                    <div className="block sm:hidden items-center space-x-4">
                    <Link
                        href={"/signin"}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                        > 
                        Sign In
                    </Link>
                    <Link
                        href={"/signup"}
                        className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-blue-600"
                    >
                         Sign Up
                    </Link>
                    
                </div>
                </ul>
                <div className="hidden md:block lg:flex items-center space-x-4">
                    <Link
                        href={"/signin"}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                        > 
                        Sign In
                    </Link>
                    <Link
                        href={"/signup"}
                        className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-blue-600"
                    >
                         Sign Up
                    </Link>
                    
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
