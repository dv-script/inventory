import { Devices } from "@/components/Devices";
import { Sidebar } from "@/components/Sidebar";
import { IDevice } from "@/lib/db";

interface HomeProps {
  devices: IDevice[];
}

export default function Home({ devices }: HomeProps) {
  return (
    <div className="w-screen h-screen bg-zinc-950 p-8 flex gap-8">
      <Sidebar />
      <Devices devices={devices} />
    </div>
  );
}
