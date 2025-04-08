'use server';
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    return <div>Not signed in</div>;
  }

  return (
    <div>
      <section>
       Main content
      </section>
    </div>
  );
}