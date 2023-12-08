import type { NextApiRequest } from "next";
import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { deleteDevice } from "@/lib/db";

export async function DELETE(
  req: NextApiRequest,
) {
  const inventoryId = req.query.id
  try {
    await deleteDevice(String(inventoryId));
    NextResponse.json({ message: "Dispositivo deletado!" });
  } catch (error) {
    NextResponse.json({ message: "Erro ao deletar dispositivo!" });
  }
 
}

export async function PUT(
  req: NextApiRequest
) {
  const inventoryId = req.query.id;
    try {
      await prisma.inventory.update({
        where: { id: String(inventoryId) },
        data: {},
      });
      NextResponse.json({ message: "Dispositivo atualizado!" });
    } catch (error) {
      NextResponse.json({ message: "Erro ao atualizar dispositivo!" });
    }

}