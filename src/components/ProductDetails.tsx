import { DIRECTION_MAP, UNIT_MAP } from "@/constants";
import { convertToBangla } from "@/lib/utility";
import ProductPriceDetails from "./ProductPriceDetails";
import { Product } from "@/types";
import { Icon } from "@iconify/react";
import { Breadcrumbs, BreadcrumbsItem } from "@heroui/react";

const getProduct = async (id: string) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`);
	return response.json();
};

const ProductDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const product: Product = await getProduct(id);

	const { nameBn, categoryNameBn, image, change, today, category, yesterday, markets, unit } =
		product;

	const { dir, pct } = change;

	const unitBn = UNIT_MAP[unit as keyof typeof UNIT_MAP];
	const { color, icon } = DIRECTION_MAP[dir as keyof typeof DIRECTION_MAP];
	console.log(product);
	return (
		<section className="space-y-8">
			<Breadcrumbs>
				<BreadcrumbsItem href="/">হোম</BreadcrumbsItem>
				<BreadcrumbsItem href={`/categories/${category}`}>{categoryNameBn}</BreadcrumbsItem>
				<BreadcrumbsItem>{nameBn}</BreadcrumbsItem>
			</Breadcrumbs>
			<div className="flex flex-col md:flex-row items-center justify-between bg-white py-4 px-6 rounded-2xl text-center md:text-left">
				<div className="flex flex-col md:flex-row items-center gap-4">
					<div className="text-4xl bg-primary/10 p-4 rounded-xl">{image}</div>
					<div className="space-y-2">
						<div>
							<h3 className="text-4xl font-bold">{nameBn}</h3>
							<span className="text-secondary/70">
								প্রতি {unitBn} · {categoryNameBn}
							</span>
						</div>
						<p>
							গতকালের তুলনায় আজ দাম{" "}
							<span className="font-semibold">{dir === "up" ? "বেড়েছে" : "কমেছে"}</span> ·{" "}
							{convertToBangla(Math.abs(today - yesterday))} টাকা
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center bg-primary/10 px-4 py-2 rounded-xl text-secondary/70">
					<span>আজকের দাম</span>
					<span className="text-4xl font-semibold text-secondary">{convertToBangla(today)}</span>
					<span>টাকা / {unitBn}</span>
					<div className={`${color} flex items-center gap-1 font-medium`}>
						<Icon icon={icon} />
						{convertToBangla(pct)} %
					</div>
				</div>
			</div>
			<ProductPriceDetails markets={markets} unit={unitBn} />
		</section>
	);
};

export default ProductDetails;
