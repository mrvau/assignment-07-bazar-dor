"use client";

import { authClient } from "@/lib/auth-client";
import { ChevronDown, CircleUserRound, CornerDownLeft, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const AuthButtons = () => {
	const { data, error } = authClient.useSession();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				setIsModalOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("touchstart", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	});

	const handleSignOut = async () => {
		const { data, error } = await authClient.signOut({
			callbackURL: "/sign-in",
		});

		console.log(data, error);
	};

	console.log(data, error);
	return (
		<>
			{data ? (
				<div className="flex items-center gap-2 relative">
					<CircleUserRound />
					<div
						className="flex items-center gap-1 cursor-pointer"
						onClick={() => setIsModalOpen(true)}>
						<span>{data?.user.name.split(" ")[0]}</span>
						<ChevronDown />
					</div>
					{isModalOpen && (
						<div
							ref={modalRef}
							className="absolute top-10 right-6 bg-white px-4 py-6 shadow-sm rounded-lg space-y-4 w-2xs">
							<div>
								<h4 className="text-xl font-semibold text-secondary">{data?.user.name}</h4>
								<p className="text-sm text-secondary/70">{data?.user.email}</p>
							</div>
							<Link
								href={"/profile"}
								className="flex items-center gap-1 hover:bg-primary/10 px-4 py-2 rounded-lg w-full">
								<User /> আমার প্রোফাইল
							</Link>
							<button
								className="text-error/70 flex items-center gap-1 cursor-pointer hover:bg-error/10 px-4 py-2 rounded-lg w-full"
								onClick={handleSignOut}>
								<CornerDownLeft />
								সাইন আউট
							</button>
						</div>
					)}
				</div>
			) : (
				<div className="hidden md:flex items-center gap-2">
					<Link href="/sign-in" className="btn hover:bg-gray-100">
						সাইন ইন
					</Link>
					<Link
						href="/sign-up"
						className="btn bg-primary text-white hover:shadow hover:shadow-primary/70">
						সাইন আপ
					</Link>
				</div>
			)}
		</>
	);
};

export default AuthButtons;
