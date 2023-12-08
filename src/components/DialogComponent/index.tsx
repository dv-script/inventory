"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { Plus } from "@phosphor-icons/react/dist/ssr" 
import { CreateDeviceModal } from "@/components/CreateDeviceModal"

export function DialogComponent() {
    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="w-fit bg-green-500 px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:bg-green-700">
            <Plus />
            Novo Dispositivo
          </button>
        </Dialog.Trigger>
        <CreateDeviceModal />
      </Dialog.Root>
    )
}