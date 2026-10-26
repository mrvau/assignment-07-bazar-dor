import AuthForm from "@/components/AuthForm";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const SignInPage = () => {
	return (
		<Suspense
			fallback={
				<div className="flex flex-col items-center mt-10">
					<Spinner color="success" size="xl" />
					<span className="text-secondary/70">Loading...</span>
				</div>
			}>
			<AuthForm authType={"sign-in"} />;
		</Suspense>
	);
};

export default SignInPage;
