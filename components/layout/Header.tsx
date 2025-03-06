import Head from "next/head";
import React from "react";
import HeaderMenu from "../common/HeaderMenu";
import Logo from "../common/Logo";
import Container from "../common/Container";
import MobileMenu from "../common/MobileMenu";
import SearchBar from "../common/SearchBar";
import CartIcon from "../common/CartIcon";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";

const Header = async () => {
	const user = await currentUser();

	return (
		<header className=" shadow-sm border-b border-gray-400 py-3">
			<Container className="flex justify-between items-center gap-7 text-lightColor ">
				<HeaderMenu />
				<div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
					<MobileMenu />
					<Logo>Logo</Logo>
				</div>
				<div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
					<SearchBar />
					<CartIcon />
					<ClerkLoaded>
						<SignedIn>
							<Link href={'/orders'} className='group relative' >
								<ListOrdered className='w-5 h-5 group-hover:text-black hoverEffect' />
								<span className='absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
							</Link>
							<UserButton />
						</SignedIn>
					{
						!user && (
							<SignInButton mode="modal" >
								<Button className="text-sm font-semibold hoverEffect">Login</Button>
							</SignInButton>
						)
					}
					</ClerkLoaded>
				</div>
			</Container>
		</header>
	);
};

export default Header;
