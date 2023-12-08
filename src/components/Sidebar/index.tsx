import Link from "next/link";
import Image from "next/image";
import { Archive, Gear, SignOut } from "@phosphor-icons/react/dist/ssr";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between py-6 gap-4 items-center h-full w-72 bg-zinc-900 rounded-lg ">
      <button className="flex justify-center items-center gap-4 p-4">
        <Image src="https://github.com/dv-script.png" alt="" className="bg-cover rounded-full overflow-hidden" width={200} height={200} />
        <h2 className="w-full capitalize">Davi Hasson Castro</h2> 
      </button>

      <Link
        href={"/"}
        className="flex gap-2 justify-start items-center w-full p-4 bg-zinc-800 border-r-green-600 border-r hover:opacity-80"
      >
        <Archive />
        Inventory
      </Link>

      <div className="w-full flex flex-col">
        <Link
        href={"/"}
        className="flex gap-2 justify-start items-center w-full p-4 hover:bg-zinc-800"
      >
        <Gear />
        Settings
      </Link>
      <Link
        href={"/"}
        className="flex gap-2 justify-start items-center w-full p-4 hover:bg-zinc-800"
      >
        <SignOut />
        Sign Out
      </Link>
      </div>

    </aside>
  );
}
