import { redirect } from "next/navigation";

export default async function StartPage() {
  // await new Promise((resolve) => setTimeout(resolve, 20000)); // Artificial delay for testing
  redirect("/home");
}
