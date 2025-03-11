import { productData } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import { Repeat } from "lucide-react";

interface Props {
	selectedTab: string;
	onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
	return (
		<div className="flex items-center gap-1.5 text-sm font-semibold">
			<div className="flex items-center gap-1.5 ">
				{productData?.map((item) => (
					<Button
						onClick={() => onTabSelect(item?.title)}
						className={`cursor-pointer rounded-full bg-transparent border text-black hover:bg-black hover:text-white hoverEffect ${selectedTab === item?.title && "bg-black text-white"}`}
						key={item?.title}
					>
						{item?.title}
					</Button>
				))}
			</div>
			<Button className="cursor-pointer rounded-full bg-transparent border text-black hover:bg-black hover:text-white hoverEffect">
				<Repeat />
			</Button>
		</div>
	);
};

export default HomeTabbar;
