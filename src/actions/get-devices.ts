"use server";
import { sql } from "@vercel/postgres";

export async function getDevices() {
  try {
    const devices = await sql`
    SELECT * FROM devices
  `;
    return devices.rows;
  } catch (err) {
    console.log(err);
  }
}
