"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import profile from "@/../public/profile-placeholder.png";
import { Button } from "@heroui/react";
import { CornerDownLeft } from "lucide-react";

const ProfilePage = () => {
	const { data } = authClient.useSession();

	const handleSignOut = async () => {
		const { data, error } = await authClient.signOut({
			callbackURL: "/sign-in",
		});

		console.log(data, error);
	};
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<div className="rounded-xl overflow-hidden">
					<Image src={data?.user.image || profile} alt="User profile" width={56} height={56} />
				</div>
				<div>
					<p>{data?.user.name}</p>
					<p>{data?.user.email}</p>
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
	);
};

export default ProfilePage;
