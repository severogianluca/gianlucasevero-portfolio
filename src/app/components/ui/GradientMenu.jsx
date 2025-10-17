"use client";

import Link from "next/link";
import React from "react";
import { User, Layers, FileDown, Mail } from 'lucide-react';
import {
    IoHomeOutline, IoCameraOutline,
    IoShareSocialOutline,
    IoHeartOutline
} from "react-icons/io5";

const GradientMenu = () => {
    const menuItems = [
        { title: "Home", icon: <IoHomeOutline />, gradientFrom: "#a855f7", gradientTo: "#6366f1", href: "#homepage" },
        { title: 'About me', icon: <User />, gradientFrom: '#0ea5e9', gradientTo: '#2563eb', href: "#about-me" },
        { title: "Project", icon: <Layers />, gradientFrom: "#ec4899", gradientTo: "#a855f7", href: "#project" },
        { title: 'Download CV', icon: <FileDown />, gradientFrom: '#14b8a6', gradientTo: '#06b6d4', href: "#cv" },
        // { title: 'Contact', icon: <Mail />, gradientFrom: '#6366f1', gradientTo: '#8b5cf6', href: "#contact" },

    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-5 pb-5 bg-slate-950/60 backdrop-blur-md">
            <ul className="flex gap-6">
                {menuItems.map(({ title, icon, gradientFrom, gradientTo, href }, idx) => (
                    <a key={idx} href={href} className="relative group">
                        <li
                            style={{ "--gradient-from": gradientFrom, "--gradient-to": gradientTo }}
                            className="w-[60px] h-[60px] bg-white shadow-lg rounded-full flex items-center justify-center
                         transition-all duration-500 hover:w-[180px] hover:shadow-none cursor-pointer relative"
                        >
                            {/* Sfondo gradiente all'hover */}
                            <span className="absolute inset-0 rounded-full
                               bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]
                               opacity-0 transition-all duration-500 group-hover:opacity-100"></span>

                            {/* Bagliore sfocato */}
                            <span className="absolute top-[10px] inset-x-0 h-full rounded-full
                               bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]
                               blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

                            {/* Icona */}
                            <span className="text-2xl text-gray-500 transition-all duration-500 group-hover:scale-0">
                                {icon}
                            </span>

                            {/* Titolo */}
                            <span className="absolute text-white uppercase tracking-wide text-sm
                               transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                                {title}
                            </span>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default GradientMenu;
