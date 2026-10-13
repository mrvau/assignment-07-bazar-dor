import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Spinner } from "@heroui/react";
import Marquee from "@/components/Marquee";

const notoSansBengali = Noto_Sans_Bengali({
	variable: "--font-noto-bengali",
	subsets: ["bengali"],
});

export const metadata: Metadata = {
	title: "বাজার দর",
	description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের মূল্য তালিকা।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${notoSansBengali.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				<Suspense
					fallback={
						<div className="flex items-center justify-center py-2">
							<Spinner color="success" size="lg" />
						</div>
					}>
					<Navbar />
					<Marquee />
				</Suspense>
				<main className="bg-light min-h-screen py-6 md:py-10">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
