"use client";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ categories }: { categories: Category[] }) => {
	const pathname = usePathname();
	return (
		<div className="flex flex-col md:flex-row md:items-center container gap-2">
			{categories.map((category) => (
				<Link
					href={`/categories/${category.slug}`}
					key={category.id}
					className={`px-2 py-1 rounded-lg hover:bg-primary/10 ${pathname.includes(category.slug) && "bg-primary text-white"}`}>
					<span className="mr-2">{category.icon}</span>
					<span>{category.nameBn}</span>
				</Link>
			))}
		</div>
	);
};

export default NavItems;
