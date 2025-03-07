"use  client";
import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	const pathname = usePathname();
	const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
	return (
		<div
			className={`fixed inset-y-0 left-0 z-50 bg-black/50 shadow-xl hoverEffect w-full ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className="min-w-72 max-w-96 bg-black text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6"
				ref={sidebarRef}
			>
				<div className="flex items-center justify-between ">
					<button onClick={onClose}>
						<Logo className="text-white">Logo</Logo>
					</button>
					<button className=" hover:text-red-500 hoverEffect" onClick={onClose}>
						<X />
					</button>
				</div>
				<div className="flex flex-col gap-4">
					{headerData?.map((item) => (
						<Link
							onClick={onClose}
							key={item?.title}
							href={item?.href}
							className={`hover:text-white w-24 text-white/40 hoverEffect ${
								pathname === item?.href && "!text-white"
							}`}
						>
							{item?.title}
						</Link>
					))}
				</div>

				<SocialMedia />
			</motion.div>
		</div>
	);
};

export default Sidebar;
