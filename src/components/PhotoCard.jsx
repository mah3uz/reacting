import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/20/solid/index.js"

export default function PhotoCard({ url }) {
  return (
    <div className="relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
      <img className="w-full" src={url} alt="Random Photo" />
      <div className="photo__body opacity-0 hover:opacity-100 flex flex-col absolute inset-0 p-8 text-white hover:bg-black/25 cursor-zoom-in">
        <div className="relative flex justify-between">
          <button className="px-2 py-1 bg-white/50 rounded">
            <PlusIcon className="w-5 h-5 text-gray-600 hover:text-red-700" />
          </button>
          <button className="px-2 py-1 bg-white/50 rounded">
            <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-700" />
          </button>
        </div>
        <div className="photo__author mt-auto flex justify-between">
          <div className="">
            <h1 className="font-medium">Mahfuz Shaikh</h1>
            <p className="text-xs flex gap-1 items-center">
              <CheckCircleIcon className="w-3 h-3 text-green-700" />
              Verified
            </p>
          </div>
          <button className="px-2 py-1 bg-white/50 rounded">
            <ArrowDownTrayIcon className="w-5 h-5 text-gray-600 hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  )
}
