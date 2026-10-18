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
		<section>
			<div>
				<span>{categoryIcon}</span>
				<span>{categoryNameBn}</span>
			</div>
		</section>
	);
};

export default CategoryPage;
