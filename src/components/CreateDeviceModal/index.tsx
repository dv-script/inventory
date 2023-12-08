"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { createDevice } from "@/actions/create-device";
import { useFormState } from "react-dom";

export function CreateDeviceModal() {
  const initialState = { message: null, errors: {} }
  // @ts-ignore
  const [state, dispatch] = useFormState(createDevice, initialState);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <form action={dispatch}>
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Adicionar novo dispositivo
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Preencha os campos abaixo para adicionar um novo dispositivo.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Dispositivo
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Nome do dispositivo"
              name="name"
            />
            {state.errors?.name && state.errors.name.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Local
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Local do dispositivo"
              name="place"
            />
            {state.errors?.place && state.errors.place.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Proprietário
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Proprietário do dispositivo"
              name="owner"
            />
            {state.errors?.owner && state.errors.owner.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              E-mail
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Email do Proprietário"
              name="email"
            />
            {state.errors?.owner && state.errors.owner.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Marca
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Marca do dispositivo"
              name="brand"
            />
            {state.errors?.brand && state.errors.brand.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Carregador
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Carregador do dispositivo"
              name="charger"
            />
            {state.errors?.charger && state.errors.charger.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Modelo
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Modelo do dispositivo"
              name="model"
            />
            {state.errors?.model && state.errors.model.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Memória RAM
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Quantidade de RAM do dispositivo"
              name="ramQuantity"
            />
            {state.errors?.ramQuantity && state.errors.ramQuantity.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              SSD
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="SSD do dispositivo"
              name="storage"
            />
            {state.errors?.storage && state.errors.storage.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Processador
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Processador do dispositivo"
              name="processor"
            />
            {state.errors?.processor && state.errors.processor.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Sistema Operacional
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Sistema Operacional do dispositivo"
              name="operationalSystem"
            />
            {state.errors?.operationalSystem && state.errors.operationalSystem.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Garantia
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Garantia do dispositivo"
              name="guarantee"
            />
            {state.errors?.guarantee && state.errors.guarantee.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Service TAG
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Service TAG do dispositivo"
              name="serviceTag"
            />
            {state.errors?.serviceTag && state.errors.serviceTag.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Patrimônio
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Patrimônio do dispositivo"
              name="heritage"
            />
            {state.errors?.heritage && state.errors.heritage.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Status
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Status do dispositivo"
              name="status"
            />
            {state.errors?.status && state.errors.status.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[100px] text-right text-[15px]">
              Descrição
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              placeholder="Descrição adicional"
              name="description"
            />
            {state.errors?.description && state.errors.description.map((error: string) => (
              <span key={error} className="text-red-500">{error}</span>
            ))}
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <button
              type="submit"
              className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Adicionar
            </button>
          </div>
        </form>
        <Dialog.Close asChild>
          <button
            type="button"
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
