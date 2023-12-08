import { Devices } from "@/components/Devices";
import { Sidebar } from "@/components/Sidebar";

export default function Home({ devices }: any) {
  return (
    <div className="w-screen h-screen bg-zinc-950 p-8 flex gap-8">
      <Sidebar />
      <Devices devices={devices} />
    </div>
  );
}
