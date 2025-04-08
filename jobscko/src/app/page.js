'use server';
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  const profileInfo=null;
  if(user && !profileInfo){
    redirect('/onboard')
  }



  return (
    <div>
      <section className="text-xl font-bold ">
       Main content
      </section>
    </div>
  );
}