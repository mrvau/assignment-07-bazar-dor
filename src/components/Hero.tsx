import { date } from "@/lib/utility";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import hero from "@/../public/bazar-hero.png";
const Hero = () => {
	return (
		<section className="container py-6 md:py-10">
			<Card className="md:flex-row justify-between">
				<div className="flex flex-col items-center md:items-start gap-8">
					<CardHeader className="text-center md:text-left items-center md:items-start gap-4">
						<Chip className="bg-primary/30 text-primary font-semibold lg:text-sm">{date()}</Chip>
						<CardTitle className="text-3xl lg:text-4xl font-bold leading-10">
							আজকের বাজারের দাম এক নজরে
						</CardTitle>
						<CardDescription className="lg:text-sm lg:w-lg">
							চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
							সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
						</CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href="#all-products" className="btn bg-primary text-white font-semibold">
							সব পণ্য দেখুন
						</Link>
					</CardFooter>
				</div>

				<div className="md:w-sm lg:w-md lg:flex lg:justify-end">
					<Image
						src={hero}
						alt="Hero Image"
						className="w-full lg:w-8/10 lg:object-fit lg:object-[0%_25%]"
					/>
				</div>
			</Card>
		</section>
	);
};
export default Hero;
