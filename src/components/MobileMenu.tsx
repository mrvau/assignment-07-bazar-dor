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
import NavItems from "./NavItems";

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
					<DrawerHeader className="pb-6 border-b border-secondary/10">
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
						<nav className="text-lg">
							<NavItems categories={categories} />
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
