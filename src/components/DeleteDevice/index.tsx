import { Trash } from "@phosphor-icons/react/dist/ssr"
import { deleteDevice } from "@/actions/delete-device"

export function DeleteDevice({ id }: { id: string }) {

    const deleteDeviceWithId = deleteDevice.bind(null, id)

    return (
        <form action={deleteDeviceWithId}>
            <button className="bg-red-700 rounded-lg w-full flex justify-center p-2 transition-all hover:bg-red-900">
                <Trash />
            </button>
        </form>

    )
}