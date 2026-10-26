import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const NotFound = () => {
	return (
		<section className="bg-white rounded-2xl w-fit mx-auto px-20 py-6 space-y-8 flex flex-col items-center">
			<h3 className="text-3xl font-semibold">কোনো পণ্য পাওয়া যায়নি।</h3>
			<Link href={"/"}>
				<Button className={"bg-primary rounded-xl"}>
					<Icon icon={"akar-icons:arrow-left"} />
					হোম পেজে ফিরে যান
				</Button>
			</Link>
		</section>
	);
};

export default NotFound;
