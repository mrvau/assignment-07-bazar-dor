import Content from "@/components/Content";
import { convertToBangla } from "@/lib/utility";
import { Product } from "@/types";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const getCategoryProducts = async (category: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?category=${category}`,
	);

	return response.json();
};

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
	const { category } = await params;
	const products: Product[] = await getCategoryProducts(category);
	const { categoryIcon, categoryNameBn } = products.length > 0 ? products[0] : {};
	return (
		<>
			{products.length > 0 ? (
				<section className="space-y-6 md:space-y-10">
					<div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-4 text-3xl bg-white px-6 py-4 rounded-2xl text-center md:text-left border border-secondary/10">
						<div className="bg-primary/10 p-2 md:p-4 rounded-2xl">{categoryIcon}</div>
						<div className="space-y-1">
							<h3 className="font-bold">{categoryNameBn}</h3>
							<p className="text-base text-secondary/70">
								{convertToBangla(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
							</p>
						</div>
					</div>
					<Content products={products} type="sortable" />
				</section>
			) : (
				<section className="bg-white rounded-2xl w-fit mx-auto px-20 py-6 space-y-8 flex flex-col items-center">
					<h3 className="text-3xl font-semibold">কোনো পণ্য পাওয়া যায়নি।</h3>
					<Link href={"/"}>
						<Button className={"bg-primary rounded-xl"}>
							<Icon icon={"akar-icons:arrow-left"} />
							হোম পেজে ফিরে যান
						</Button>
					</Link>
				</section>
			)}
		</>
	);
};

export default CategoryPage;
