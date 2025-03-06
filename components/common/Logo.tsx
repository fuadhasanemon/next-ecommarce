import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props  {
	children?: React.ReactNode;
	className?: string;
}
const Logo = ({children, className}: Props) => {
	return <div>
		<Link href="/">
		<h2 className={cn("text-2xl text-black font-bold tracking-wider uppercase", className)}>{children}</h2>
		
		</Link>
	</div>;
};

export default Logo;
