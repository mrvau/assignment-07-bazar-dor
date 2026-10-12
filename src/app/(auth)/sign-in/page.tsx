"use client";

import AuthForm from "@/components/AuthForm";
import { usePathname } from "next/navigation";

const SignInPage = () => {
	const pathname = usePathname();

	return <AuthForm authType={pathname as "sign-in" | "sign-up"} />;
};

export default SignInPage;
