"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import profile from "@/../public/profile-placeholder.png";
import { Button, Spinner, toast } from "@heroui/react";
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";

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

		if (data) toast.success("সফল ভাবে সাইন আউট হয়েছে।");
		if (error) toast.danger("কিছু একটা সমস্যা হয়েছে!");
	};
	return (
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
			<div className="flex items-center gap-2">
				<Link href={"/profile/update"}>
					<Button className={"bg-primary rounded-lg "}>আপডেট</Button>
				</Link>
				<Button
					fullWidth
					onClick={handleSignOut}
					className={
						"justify-start bg-transparent border border-error text-error hover:bg-error/10 rounded-lg"
					}>
					<CornerDownLeft />
					সাইন আউট
				</Button>
			</div>
		</div>
	);
};

export default ProfilePage;
