import Content from "./Content";
import { Product } from "@/types";

const getProducts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
	return response.json();
};

const ProductsSection = async () => {
	const products: Product[] = await getProducts();

	return (
		<>
			<Content products={products} type="up" title="আজ দাম বেড়েছে" />
			<Content products={products} type="down" title="আজ দাম কমেছে" />
			<Content products={products} type="all" title="সব পণ্য" />
		</>
	);
};

export default ProductsSection;
