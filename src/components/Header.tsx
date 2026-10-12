import Image from "next/image";

import logo from "@/../public/logo-icon.png";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import AuthButtons from "./AuthButtons";
import { Spinner } from "@heroui/react";

const date = async () => {
	"use cache";
	cacheLife("days");
	return new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});
};

const Header = () => {
	return (
		<header className="border-b border-secondary/10 px-4 py-4 lg:px-0">
			<div className="container flex items-center justify-center md:justify-between">
				<Link
					href="/"
					className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-left">
					<div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary p-2 rounded-lg">
						<Image src={logo} alt="Bazar Dor Logo" className="w-full h-auto" />
					</div>
					<div>
						<p className="font-bold text-2xl text-secondary">বাজার দর</p>
						<span className="text-xs md:text-sm text-secondary/70">{date()}</span>
					</div>
				</Link>
				<Suspense fallback={<Spinner color="success" />}>
					<AuthButtons />
				</Suspense>
			</div>
		</header>
	);
};

export default Header;
