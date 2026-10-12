import { Menu } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Category } from "@/types";
import { Button, Drawer } from "@heroui/react";

const getCategories = async (): Promise<Category[]> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
		return response.json();
	} catch (e) {
		console.error("Error fetching categories: ", e);
		throw new Error("Failed to fetch categoris");
	}
};

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<>
			<Drawer>
				<Button className="absolute top-4 left-2 flex md:hidden items-center justify-center border border-primary/70 text-primary/70 w-10 h-10 rounded-lg cursor-pointer bg-transparent">
					<Menu />
				</Button>
				<MobileMenu categories={categories} />
			</Drawer>
			<nav className="hidden md:flex items-center gap-2 p-2 container">
				{categories.map((category) => (
					<Link
						href={`/categories/${category.slug}`}
						key={category.id}
						className="px-2 py-1 rounded-lg hover:bg-primary/10">
						<span className="mr-2">{category.icon}</span>
						<span>{category.nameBn}</span>
					</Link>
				))}
			</nav>
		</>
	);
};

export default Navbar;
