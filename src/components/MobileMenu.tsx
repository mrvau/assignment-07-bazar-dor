import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";
import logo from "@/../public/logo-icon.png";
import {
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerDialog,
	DrawerFooter,
	DrawerHeader,
	DrawerHeading,
} from "@heroui/react";

interface MobileMenuProps {
	categories: Category[];
}

const MobileMenu = ({ categories }: MobileMenuProps) => {
	return (
		<DrawerBackdrop>
			<DrawerContent placement="left">
				<DrawerDialog>
					<DrawerCloseTrigger className="text-primary border border-primary p-2 rounded-full cursor-pointer bg-transparent">
						<X />
					</DrawerCloseTrigger>
					<DrawerHeader>
						<DrawerHeading>
							<Link href="/" className="flex items-center gap-2">
								<div className="flex items-center justify-center w-10 h-10 bg-primary p-2 rounded-lg">
									<Image src={logo} alt="Bazar Dor Logo" className="w-full h-auto" />
								</div>
								<div>
									<p className="font-bold text-2xl text-secondary">বাজার দর</p>
								</div>
							</Link>
						</DrawerHeading>
					</DrawerHeader>
					<DrawerBody>
						<nav className="flex flex-col gap-2">
							{categories.map((category) => (
								<Link
									href={`/categories/${category.slug}`}
									key={category.id}
									className="px-2 py-1 rounded-lg hover:bg-primary/10 text-lg">
									<span className="mr-2">{category.icon}</span>
									<span>{category.nameBn}</span>
								</Link>
							))}
						</nav>
					</DrawerBody>
					<DrawerFooter className="flex flex-col items-center gap-2 text-center">
						<Link href="/sign-in" className="btn bg-gray-100 w-full">
							সাইন ইন
						</Link>
						<Link
							href="/sign-up"
							className="btn bg-primary text-white hover:shadow hover:shadow-primary/70 w-full">
							সাইন আপ
						</Link>
					</DrawerFooter>
				</DrawerDialog>
			</DrawerContent>
		</DrawerBackdrop>
	);
};

export default MobileMenu;

{
	/*
	<div className="absolute top-0 left-0 bg-white p-4 border-r border-primary w-3/4 h-screen flex flex-col justify-between">
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-1">
						<div className="flex items-center justify-center w-10 h-10 bg-primary p-2 rounded-lg">
							<Image src={logo} alt="Bazar Dor Logo" className="w-full h-auto" />
						</div>
						<div>
							<p className="font-bold text-2xl text-secondary">বাজার দর</p>
						</div>
					</Link>
					<div
						className="text-primary border border-primary p-1 rounded-lg cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						<X />
					</div>
				</div>
				<div>
					<ul className="flex flex-col gap-4">
						{categories.map((category) => (
							<li key={category.id} className="px-2 py-1 rounded-lg hover:bg-primary/10">
								<Link href={`/categories/${category.slug}`}>
									<span className="mr-2">{category.icon}</span>
									<span>{category.nameBn}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex flex-col items-center gap-2 text-center">
				<Link href="/sign-in" className="btn bg-gray-100 w-full">
					সাইন ইন
				</Link>
				<Link
					href="/sign-up"
					className="btn bg-primary text-white hover:shadow hover:shadow-primary/70 w-full">
					সাইন আপ
				</Link>
			</div>
		</div>
	*/
}
