import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export const proxy = async (request: NextRequest) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		const url = request.nextUrl.clone();
		const pathname = url.pathname.startsWith("/product") ? "product" : "profile";
		url.pathname = "/sign-in";
		url.searchParams.set("requiredLogin", pathname);

		return NextResponse.redirect(url);
	}

	return NextResponse.next();
};

export const config = {
	matcher: ["/profile", "/product/:id"],
};
