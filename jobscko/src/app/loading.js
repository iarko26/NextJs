import { Skeleton } from "@/components/ui/skeleton"

export default function Loading(){
   return(
    <div className="flex flex-col space-y-4">
        <Skeleton className="w-full h-full min-h-[640px] bg-slate-600 mt-5"/>
    </div>
   )

}