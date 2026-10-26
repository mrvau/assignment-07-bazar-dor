import Content from "@/components/Content";
import { convertToBangla } from "@/lib/utility";
import { Product } from "@/types";
import { notFound } from "next/navigation";

const getCategoryProducts = async (category: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?category=${category}`,
	);

	return response.json();
};

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
	const { category } = await params;
	const products: Product[] = await getCategoryProducts(category);

	if (!products.length) {
		return notFound();
	}

	const { categoryIcon, categoryNameBn } = products[0];
	return (
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
	);
};

export default CategoryPage;
