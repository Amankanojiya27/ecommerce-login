// app/login/page.tsx
import LoginForm from "@/component/LoginForm";
import Navbar from "@/component/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-[80vh]">
        <LoginForm />
      </main>
    </>
  );
}
