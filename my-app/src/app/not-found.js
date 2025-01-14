import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>Not Found</h1>
            <Link href={'/'} className="text-blue-700">Go back to home</Link>
        </div>
    )
}