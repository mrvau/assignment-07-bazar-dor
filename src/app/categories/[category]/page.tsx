import { convertToBangla } from "@/lib/utility";
import { Product } from "@/types";

const getCategoryProducts = async (category: string) => {
	const response = await fetch(
		`https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
	);

	return response.json();
};

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
	const { category } = await params;
	const products: Product[] = await getCategoryProducts(category);
	const { categoryIcon, categoryNameBn } = products[0];
	return (
		<section className="container py-6 md:py-10">
			<div className="flex items-center gap-2 text-3xl bg-white py-2 px-4 rounded-lg">
				<div>
					<span>{categoryIcon}</span>
				</div>
				<div>
					<h3 className="font-bold">{categoryNameBn}</h3>
					<span className="text-base text-secondary/70">
						{convertToBangla(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
					</span>
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
