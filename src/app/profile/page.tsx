"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import profile from "@/../public/profile-placeholder.png";
import { Button, Spinner } from "@heroui/react";
import { CornerDownLeft } from "lucide-react";

const ProfilePage = () => {
	const { data, isPending } = authClient.useSession();

	if (isPending) {
		return (
			<div className="flex items-center justify-center">
				<Spinner color="success" />
			</div>
		);
	}

	const handleSignOut = async () => {
		const { data, error } = await authClient.signOut({
			callbackURL: "/sign-in",
		});

		console.log(data, error);
	};
	return (
		<>
			<div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white px-4 py-6 rounded-xl">
				<div className="flex items-center gap-4">
					<div className="rounded-xl overflow-hidden">
						<Image src={data?.user.image || profile} alt="User profile" width={56} height={56} />
					</div>
					<div>
						<p className="font-semibold text-xl">{data?.user.name}</p>
						<p className="text-secondary/70">{data?.user.email}</p>
					</div>
				</div>
				<div>
					<Button
						fullWidth
						onClick={handleSignOut}
						className={
							"justify-start bg-transparent border border-error text-error hover:bg-error/10 rounded-lg"
						}>
						<CornerDownLeft className="w-6 h-6" />
						সাইন আউট
					</Button>
				</div>
			</div>
			<div>
				<h5>তথ্য</h5>
				<div></div>
			</div>
		</>
	);
};

export default ProfilePage;
