import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const Home = () => {
	return (
		<>
			<Hero />
			<Suspense
				fallback={
					<div className="flex items-center justify-center py-2">
						<Spinner color="success" size="lg" />
					</div>
				}>
				<ProductsSection />
			</Suspense>
		</>
	);
};

export default Home;
