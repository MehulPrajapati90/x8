import TextTemplate from "@/components/home/text-template";
import { Separator } from "@/components/ui/separator";
import { MousePointer2Off } from "lucide-react";
import Link from "next/link";
import HomeButtonComp from "@/components/home/home-buttons";

const page = async () => {
  return (
    <section className='flex flex-col items-center w-full min-h-full mt-30'>
      <TextTemplate />
      <div className='w-full min-h-auto flex flex-col justify-center items-center pt-10 pb-5'>
        <h1 className='flex flex-col justify-center items-center'>
          <span className='text-5xl text-zinc-400 font-sans font-medium tracking-tight'>Shorten smarter. Share faster.</span>
          <span className='text-[33px] text-zinc-500 font-normal font-sans tracking-tighter'>Meet x8 — the way to power your links.</span>
        </h1>

        <p className='flex flex-col justify-center items-center text-zinc-400/90 font-sans font-medium py-3 text-[14px]'>
          <span className='tracking-[-0.3px] leading-4'>Shorten your long URLs in just one click & track performance effortlessly.</span>
          <span className='tracking-[-0.3px]'>
            Join thousands who trust x8 to share smarter every day.
          </span>
        </p>
      </div>

      {/* Button */}
      <HomeButtonComp />

      {/* Preview */}
      <div className="w-full flex flex-col items-center gap-5 justify-center py-15 text-[15px]">
        <div className="w-[300px] pb-5 flex flex-col items-center justify-center">
          <p className="py-1 text-[15px] font-mono font-semibold tracking-tight text-zinc-400">Preview.</p>
          <Separator className="bg-zinc-500" />
        </div>
        <div className="w-full flex items-center gap-5 justify-center text-[15px]">
          <div className="font-mono tracking-tight p-2 px-6 border rounded-[30px] border-zinc-500 bg-red-500/15 text-zinc-300 font-normal shadow-2xl shadow-red-900 hover:bg-red-500/25 transition-all ease-in duration-100 cursor-pointer">
            <Link href={"http://x8.com/u/hg38hge"} className="hover:underline">http://x8.com/u/hg38hge</Link>
          </div>
          <div>
            <MousePointer2Off size={18} className="rotate-45 text-yellow-400" />
          </div>
          <div className="font-mono tracking-tight p-2 px-6 border rounded-[30px] border-zinc-500 bg-red-500/15 text-zinc-300 font-normal shadow-2xl shadow-red-900 hover:bg-red-500/25 transition-all ease-in duration-100 cursor-pointer">
            <Link href={'http://x.com/mehulHQ'} className="hover:underline">http://x.com/elonmusk</Link>
          </div>
        </div>
        <div className="w-[300px] pb-5 flex flex-col items-center justify-center py-6">
          <Separator className="bg-zinc-500" />
          <p className="py-1 text-[15px] font-mono font-semibold tracking-tight text-zinc-400">Redirect.</p>
        </div>
      </div>
    </section>
  )
}

export default page;