"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Category } from "@/types";

const Navbar = () => {
	const [categories, setCategories] = useState<Category[] | []>([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
				const categoriesData = await response.json();
				setCategories(categoriesData);
			} catch (e) {
				console.error("Error fetching categories: ", e);
			}
		};

		fetchCategories();
	});

	return (
		<nav className="px-4 pt-4">
			<div
				className="absolute top-4 left-2 flex md:hidden items-center justify-center border border-primary/70 text-primary/70 w-10 h-10 rounded-lg cursor-pointer"
				onClick={() => setIsMenuOpen(true)}>
				<Menu />
			</div>
			<ul className="hidden md:flex items-center gap-4">
				{categories.map((category) => (
					<li key={category.id} className="px-2 py-1 rounded-lg hover:bg-primary/10">
						<Link href={`/categories/${category.slug}`}>
							<span className="mr-2">{category.icon}</span>
							<span>{category.nameBn}</span>
						</Link>
					</li>
				))}
			</ul>

			{isMenuOpen && <MobileMenu categories={categories} setIsMenuOpen={setIsMenuOpen} />}
		</nav>
	);
};

export default Navbar;
