import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { cp } from "fs";

interface SocialMediaProps {
	className?: string;
	iconClassName?: string;
	tooltipClassName?: string;
}

const socialLinks = [
	{
		title: "Github",
		href: "https://github.com",
		icon: <Github className="w-3 h-3" />,
	},
	{
		title: "Twitter",
		href: "https://twitter.com",
		icon: <Twitter className="w-3 h-3" />,
	},
	{
		title: "Linkedin",
		href: "https://linkedin.com",
		icon: <Linkedin className="w-3 h-3" />,
	},
	{
		title: "Facebook",
		href: "https://facebook.com",
		icon: <Facebook className="w-3 h-3" />,
	},
	{
		title: "Instagram",
		href: "https://instagram.com",
		icon: <Instagram className="w-3 h-3" />,
	},
	{
		title: "Youtube",
		href: "https://youtube.com",
		icon: <Youtube className="w-3 h-3" />,
	},
];

const SocialMedia = ({
	className,
	iconClassName,
	tooltipClassName,
}: SocialMediaProps) => {
	return (
		<TooltipProvider>
			<div className={cn("flex items-center gap-2", className)}>
				{socialLinks.map((item) => (
					<Tooltip key={item.title}>
						<TooltipTrigger asChild>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"border rounded-full p-1 hover:border-white hoverEffect",
									iconClassName
								)}
								href={item?.href}
							>
								{item?.icon}
							</Link>
						</TooltipTrigger>
						<TooltipContent
							className={cn(
								"bg-white text-black font-semibold",
								tooltipClassName
							)}
						>
							{item?.title}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	);
};

export default SocialMedia;
