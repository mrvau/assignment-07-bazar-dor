import PriceRaised from "./PriceRaised";
import PriceDown from "./PriceDown";
import { Product } from "@/types";

const getProducts = async () => {
	const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
	return response.json();
};

const ProductsSection = async () => {
	const products: Product[] = await getProducts();

	return (
		<>
			<PriceRaised
				topRaisedProducts={products.sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)}
			/>
			<PriceDown
				topDownProducts={products.sort((a, b) => a.change.pct - b.change.pct).slice(0, 6)}
			/>
		</>
	);
};

export default ProductsSection;
