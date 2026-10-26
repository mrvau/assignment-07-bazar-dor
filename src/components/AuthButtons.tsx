"use client";

import { authClient } from "@/lib/auth-client";
import {
	Avatar,
	AvatarImage,
	Button,
	Popover,
	PopoverContent,
	PopoverDialog,
	PopoverHeading,
	PopoverTrigger,
	Spinner,
	toast,
} from "@heroui/react";
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/../public/profile-placeholder.png";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const AuthButtons = () => {
	const { data, error, isPending } = authClient.useSession();

	useEffect(() => {
		if (error) toast.danger("কিছু একটা সমস্যা হয়েছে!");
	}, [error]);

	if (isPending) {
		return <Spinner color="success" />;
	}

	const handleSignOut = async () => {
		const { data, error } = await authClient.signOut({
			callbackURL: "/sign-in",
		});

		if (data) toast.success("সফল ভাবে সাইন আউট হয়েছে।");
		if (error) toast.danger("কিছু একটা সমস্যা হয়েছে!");
	};
	return (
		<>
			{data ? (
				<Popover>
					<PopoverTrigger>
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src={data?.user.image || "@/../public/profile.png"} />
							</Avatar>
							<div className="flex items-center gap-1 text-secondary/70">
								<p className="text-secondary">{data?.user.name.split(" ")[0]}</p>
								<Icon icon={"bxs:down-arrow"} height={8} width={8} />
							</div>
						</div>
					</PopoverTrigger>
					<PopoverContent className="mr-0 md:mr-6 w-3xs">
						<PopoverDialog className="space-y-2">
							<PopoverHeading>
								<p className="text-lg font-semibold">{data?.user.name}</p>
								<p className="text-sm text-secondary/70">{data?.user.email}</p>
							</PopoverHeading>
							<div className="flex flex-col gap-2">
								<Link href="/profile">
									<Button
										fullWidth
										className={"bg-transparent text-secondary justify-start hover:bg-primary/10"}>
										<Image src={profile} alt="User profile" width={24} height={24} />
										আমার প্রোফাইল
									</Button>
								</Link>
								<Button
									fullWidth
									onClick={handleSignOut}
									className={"justify-start bg-transparent text-error hover:bg-error/10"}>
									<CornerDownLeft className="w-6 h-6" />
									সাইন আউট
								</Button>
							</div>
						</PopoverDialog>
					</PopoverContent>
				</Popover>
			) : (
				<div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-fit">
					<Link
						href="/sign-in"
						className="btn bg-gray-100 md:bg-transparent hover:bg-gray-100 w-full md:w-fit">
						সাইন ইন
					</Link>
					<Link
						href="/sign-up"
						className="btn bg-primary text-white hover:shadow hover:shadow-primary/70 w-full md:w-fit">
						সাইন আপ
					</Link>
				</div>
			)}
		</>
	);
};

export default AuthButtons;
