import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Category } from "@/types";
import { Button, Drawer } from "@heroui/react";
import NavItems from "./NavItems";

const getCategories = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
	return response.json();
};

const Navbar = async () => {
	const categories: Category[] = await getCategories();
	return (
		<>
			<Drawer>
				<Button className="absolute top-4 left-2 flex md:hidden items-center justify-center border border-primary/70 text-primary/70 w-10 h-10 rounded-lg cursor-pointer bg-transparent">
					<Menu />
				</Button>
				<MobileMenu categories={categories} />
			</Drawer>
			<nav className="hidden md:block py-1 border-b border-secondary/10">
				<NavItems categories={categories} />
			</nav>
		</>
	);
};

export default Navbar;
