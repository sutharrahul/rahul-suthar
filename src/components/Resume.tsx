import useResume from '@/useResume'
import Image from 'next/image'
import React from 'react'

export default function Resume() {
    const { isLoading, download, onLoadingComplete, imageUrl } = useResume()

    return (
        <div className="flex flex-col items-end">
            {isLoading && (
                <div
                    className="w-[80vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[36vw] h-full flex flex-col justify-center gap-3 items-end rounded-2xl bg-white/5 p-2 isolate overflow-hidden relative 
          before:absolute before:inset-0
          before:-translate-x-full
          before:animate-[shimmer_2s_infinite]
          before:bg-gradient-to-r
          before:from-transparent before:via-rose-100/10 before:to-transparent"
                >
                    <div className="h-[80vh] w-full rounded-lg bg-rose-100/10"></div>
                    <div className="font-medium py-1 px-6 w-28 h-9 rounded-lg bg-rose-100/10"></div>
                </div>
            )}
            <Image
                height={300}
                width={500}
                src={imageUrl}
                alt="rahul-suthar"
                onLoadingComplete={onLoadingComplete}
            />
            <button
                className="mt-5 font-medium py-1 px-6 bg-[#f0f0f0] text-black rounded-md"
                onClick={download}
            >
                Download
            </button>
        </div>
    )
}
