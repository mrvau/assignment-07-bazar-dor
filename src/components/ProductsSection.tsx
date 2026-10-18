import Content from "./Content";
import { Product } from "@/types";

const getProducts = async () => {
	const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
	return response.json();
};

const ProductsSection = async () => {
	const products: Product[] = await getProducts();

	return (
		<>
			<Content products={products} direction="up" title="আজ দাম বেড়েছে" />
			<Content products={products} direction="down" title="আজ দাম কমেছে" />
			<Content products={products} title="সব পণ্য" />
		</>
	);
};

export default ProductsSection;
