"use client";

import { Breadcrumbs, BreadcrumbsItem } from "@heroui/react";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ productName, categoryBn }: { productName: string; categoryBn: string }) => {
	const pathname = usePathname();
	const segments = pathname.split("/").slice(2);
	return (
		<Breadcrumbs>
			<BreadcrumbsItem href="/">হোম</BreadcrumbsItem>
			{segments.map((segment, idx) => {
				const isNumber = Number.isInteger(Number(segment));
				const nameBn = isNumber ? productName : categoryBn;

				return (
					<BreadcrumbsItem key={idx} href={`/categories/${segment}`}>
						{nameBn}
					</BreadcrumbsItem>
				);
			})}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
