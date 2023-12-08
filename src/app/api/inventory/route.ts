import { NextApiRequest } from "next";
import { createDevice, getDevices } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const data = JSON.parse(req.body);
  await createDevice(data);
  return NextResponse.json({ message: "Dispositivo criado com sucesso!" });
}

export async function GET() {
  const data = await getDevices();
  return NextResponse.json(data);
}

