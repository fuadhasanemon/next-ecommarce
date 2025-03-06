"use client";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
	const pathname = usePathname();
	console.log('====================================');
	console.log('pathname', pathname);
	console.log('====================================');
	return (
		<div className="hidden md:inline-flex gap-7 width-1/3 items-center text-sm capitalize font-semibold text-gray-600 ">
			{headerData?.map((item) => (
				<Link key={item?.title} href={item?.href} className={`hover:text-black hoverEffect relative group ${pathname === item?.href && "text-black"}`} >
					{item?.title}
					<span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:left-0 group-hover:w-full ${pathname === item?.href ? "!left-0 w-full" : "group-hover:w-full" } `} /> 
				</Link>
			))}
		</div>
	);
};

export default HeaderMenu;
