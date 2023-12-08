"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath, unstable_noStore } from "next/cache";

export async function deleteDevice(id: string) {
  unstable_noStore();

  try {
    const devices = await sql`
    DELETE FROM devices WHERE id = ${id}
  `;
    return devices.rows;
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/");
}
