import { Devices } from "@/components/Devices";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-950 p-8 flex gap-8">
      <Sidebar />
      <Devices />
    </div>
  );
}
