import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const raleway = localFont({
	src: "../fonts/Raleway.woff2",
	variable: "--font-raleway",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "E-commerce",
	description: "E-commerce website built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${raleway.variable} antialiased`}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
