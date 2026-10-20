"use client";

import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { convertToBangla } from "@/lib/utility";
import {
	Key,
	Label,
	ListBox,
	ListBoxItem,
	ListBoxItemIndicator,
	Select,
	SelectIndicator,
	SelectPopover,
	SelectTrigger,
	SelectValue,
} from "@heroui/react";
import { useState } from "react";

interface ContentProps {
	products: Product[];
	type: "all" | "up" | "down" | "sortable";
	title?: string;
}

const sortProducts = (products: Product[], sortBy: string | Key | null) => {
	if (sortBy === "up") {
		return products.toSorted((a, b) => b.change.pct - a.change.pct);
	}

	if (sortBy === "down") {
		return products.toSorted((a, b) => a.change.pct - b.change.pct);
	}

	if (sortBy === "low-to-high") {
		return products.toSorted((a, b) => a.today - b.today);
	}

	if (sortBy === "high-to-low") {
		return products.toSorted((a, b) => b.today - a.today);
	}

	return products;
};

const Content = ({ products, type, title }: ContentProps) => {
	const [sortBy, setSortBy] = useState<Key | null>("default");

	const sortedProducts =
		type === "sortable" ? sortProducts(products, sortBy) : sortProducts(products, type);
	const productsToRender =
		type === "all" || type === "sortable" ? sortedProducts : sortedProducts.slice(0, 6);

	console.log(sortBy);
	return (
		<section className="space-y-4">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<div
					className={`${type === "up" ? "text-error" : "text-primary"} flex items-center justify-center md:justify-start gap-2`}>
					{type && <Icon icon={`bxs:${type}-arrow`} />}
					<div className="text-secondary">
						{title && <h2 className="font-bold text-lg">{title}</h2>}
						{(type === "all" || type === "sortable") && (
							<span className="text-secondary/70 text-sm">
								মোট {convertToBangla(products.length)}টি পণ্য দেখান হচ্ছে
							</span>
						)}
					</div>
				</div>
				{type === "sortable" && (
					<Select
						value={sortBy}
						onChange={(value) => setSortBy(value)}
						placeholder="Sort By"
						className="flex-row items-center gap-2">
						<Label className="text-secondary/70">সাজান:</Label>
						<SelectTrigger>
							<SelectValue />
							<SelectIndicator />
						</SelectTrigger>
						<SelectPopover>
							<ListBox>
								<ListBoxItem textValue="default" id="default">
									ডিফল্ট
									<ListBoxItemIndicator />
								</ListBoxItem>
								<ListBoxItem textValue="low-to-high" id="low-to-high">
									দাম: কম থেকে বেশি
									<ListBoxItemIndicator />
								</ListBoxItem>
								<ListBoxItem textValue="high-to-low" id="high-to-low">
									দাম: বেশি থেকে কম
									<ListBoxItemIndicator />
								</ListBoxItem>
							</ListBox>
						</SelectPopover>
					</Select>
				)}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{productsToRender.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Content;
