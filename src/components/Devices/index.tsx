import { getDevices } from "@/actions/get-devices";
import { DialogComponent } from "../DialogComponent";
import { DeleteDevice } from "../DeleteDevice";
import { UpdateDevice } from "../UpdateDevice";

export async function Devices() {
  const devices = await getDevices();

  return (
    <section className="flex-1 flex flex-col gap-8 rounded-lg bg-zinc-900 p-4 overflow-hidden">
      <h1 className="text-4xl font-bold relative">
        Dispositivos
        <span className="absolute w-12 h-[2px] bottom-[-10px] left-0 rounded-2xl bg-green-500" />
      </h1>

      <DialogComponent />

      <div className="overflow-auto rounded-lg">
        <table className="w-full bg-zinc-800">
          <thead>
            <tr className="text-left bg-zinc-700 uppercase whitespace-nowrap">
              <th className="p-4 border-r border-zinc-600">Dispositivo</th>
              <th className="p-4 border-r border-zinc-600">Local</th>
              <th className="p-4 border-r border-zinc-600">Proprietário</th>
              <th className="p-4 border-r border-zinc-600">E-mail</th>
              <th className="p-4 border-r border-zinc-600">Marca</th>
              <th className="p-4 border-r border-zinc-600">Carregador</th>
              <th className="p-4 border-r border-zinc-600">Modelo</th>
              <th className="p-4 border-r border-zinc-600">Memória RAM</th>
              <th className="p-4 border-r border-zinc-600">SSD</th>
              <th className="p-4 border-r border-zinc-600">Processador</th>
              <th className="p-4 border-r border-zinc-600">
                Sistema Operacional
              </th>
              <th className="p-4 border-r border-zinc-600">Garantia</th>
              <th className="p-4 border-r border-zinc-600">Service TAG</th>
              <th className="p-4 border-r border-zinc-600">Patrimônio</th>
              <th className="p-4 border-r border-zinc-600">Status</th>
              <th className="p-4 border-r border-zinc-600">Descrição</th>
              <th className="p-4 border-r border-zinc-600">Editar</th>
              <th className="p-4">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {devices &&
              devices.map((device) => (
                <tr key={device.id} className="whitespace-nowrap">
                  <td className="p-4">{device.name}</td>
                  <td className="p-4">{device.place}</td>
                  <td className="p-4">{device.owner}</td>
                  <td className="p-4">{device.email}</td>
                  <td className="p-4">{device.brand}</td>
                  <td className="p-4">{device.charger}</td>
                  <td className="p-4">{device.model}</td>
                  <td className="p-4">{device.ramQuantity}</td>
                  <td className="p-4">{device.storage}</td>
                  <td className="p-4">{device.processor}</td>
                  <td className="p-4">{device.operationalSystem}</td>
                  <td className="p-4">{device.guarantee}</td>
                  <td className="p-4">{device.serviceTag}</td>
                  <td className="p-4">{device.heritage}</td>
                  <td className="p-4">{device.status}</td>
                  <td className="p-4">{device.description}</td>
                  <td className="p-4 text-center">
                    <UpdateDevice id={device.id} />
                  </td>
                  <td className="p-4 text-center">
                    <DeleteDevice id={device.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
