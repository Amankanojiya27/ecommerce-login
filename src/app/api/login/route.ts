// app/api/login/route.ts
import { NextResponse } from "next/server";

const myUser = {
  email: "aman@gmail.com",
  password: "123",
  name: "aman",
};

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (email === myUser.email && password === myUser.password) {
    const token = "dummy-jwt-token";
    return NextResponse.json({ message: "Login Successful", token }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
