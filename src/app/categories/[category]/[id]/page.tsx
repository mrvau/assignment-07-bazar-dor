import ProductDetails from "@/components/ProductDetails";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const ProductDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => (
	<Suspense
		fallback={
			<div className="flex flex-col items-center mt-10">
				<Spinner color="success" size="xl" />
				<span className="text-secondary/70">Loading...</span>
			</div>
		}>
		<ProductDetails params={params} />
	</Suspense>
);

export default ProductDetailsPage;
