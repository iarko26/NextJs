import { redirect } from "next/navigation";

export default function Page() {
  const userinfo = null;

  // Correct redirect logic
  if (!userinfo) {
    redirect("/products?search=shoes"); // Add the `/` before "products" for proper routing
  }

  return <h1>Account Page</h1>;
}