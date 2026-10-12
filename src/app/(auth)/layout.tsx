import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col items-center justify-center pt-6">
			<div className="px-2">{children}</div>
			<div className="mt-8">
				<Link href={"/"} className="flex items-center justify-center gap-2 text-secondary/70">
					<ArrowLeft />
					<span>হোম পেজে ফিরে যান</span>
				</Link>
			</div>
		</div>
	);
};

export default AuthLayout;
