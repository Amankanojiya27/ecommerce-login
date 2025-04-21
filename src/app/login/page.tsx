// app/login/page.tsx
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center h-[80vh]">
        <LoginForm />
      </main>
    </>
  );
}
