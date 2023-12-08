import { PencilSimpleLine } from "@phosphor-icons/react/dist/ssr";
import { updateDevice } from "@/actions/update-device";

export function UpdateDevice({ id }: { id: string }) {
  const updateDeviceWithId = updateDevice.bind(null, id);

  return (
    <form action={updateDeviceWithId}>
      <button className="bg-zinc-600 rounded-lg w-full flex justify-center p-2 transition-all hover:bg-zinc-700">
        <PencilSimpleLine />
      </button>
    </form>
  );
}
