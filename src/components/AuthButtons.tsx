"use client";

import { authClient } from "@/lib/auth-client";
import {
	Button,
	Modal,
	ModalBackdrop,
	ModalBody,
	ModalContainer,
	ModalDialog,
	ModalHeader,
	ModalHeading,
	Spinner,
} from "@heroui/react";
import { ChevronDown, CircleUserRound, CornerDownLeft, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const AuthButtons = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, error, isPending } = authClient.useSession();

	if (isPending) {
		return <Spinner color="success" />;
	}

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
				<Modal>
					<button onClick={() => setIsOpen(true)} className="flex items-center gap-2">
						<CircleUserRound size={26} />

						<div className="flex items-center gap-1 cursor-pointer">
							<span>{data?.user.name.split(" ")[0]}</span>
							<ChevronDown />
						</div>
					</button>
					<ModalBackdrop variant="transparent" isOpen={isOpen} onOpenChange={setIsOpen}>
						<ModalContainer
							size="sm"
							placement="top"
							className={"block absolute bottom-10 left-0 md:top-8 md:right-0 h-fit"}>
							<ModalDialog>
								<ModalHeader className="gap-1">
									<ModalHeading className="font-semibold">{data?.user.name}</ModalHeading>
									<p className="text-secondary/70">{data?.user.email}</p>
								</ModalHeader>
								<ModalBody className="space-y-4">
									<Link
										href={"/profile"}
										className="flex items-center gap-2 hover:bg-secondary/10 px-2 py-1 rounded-full font-medium text-lg">
										<User />
										<span>আমার প্রোফাইল</span>
									</Link>
									<Button
										onClick={handleSignOut}
										className={
											"w-full bg-transparent text-error justify-start text-lg hover:bg-error/10"
										}>
										<CornerDownLeft />
										সাইন আউট
									</Button>
								</ModalBody>
							</ModalDialog>
						</ModalContainer>
					</ModalBackdrop>
				</Modal>
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
