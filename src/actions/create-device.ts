"use server";
import { z } from "zod";
import { revalidatePath, unstable_noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const DeviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  place: z.string(),
  owner: z.string(),
  email: z.string().email(),
  brand: z.string(),
  charger: z.string(),
  model: z.string(),
  ramQuantity: z.string(),
  storage: z.string(),
  processor: z.string(),
  operationalSystem: z.string(),
  guarantee: z.string(),
  serviceTag: z.string(),
  heritage: z.string(),
  status: z.string(),
  description: z.string(),
});

const CreateDevice = DeviceSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

export async function createDevice(prevState: State, formData: FormData) {
  unstable_noStore();

  const validatedFields = CreateDevice.safeParse({
    name: formData.get("name"),
    place: formData.get("place"),
    owner: formData.get("owner"),
    email: formData.get("email"),
    brand: formData.get("brand"),
    charger: formData.get("charger"),
    model: formData.get("model"),
    ramQuantity: formData.get("ramQuantity"),
    storage: formData.get("storage"),
    processor: formData.get("processor"),
    operationalSystem: formData.get("operationalSystem"),
    guarantee: formData.get("guarantee"),
    serviceTag: formData.get("serviceTag"),
    heritage: formData.get("heritage"),
    status: formData.get("status"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Preencha os campos corretamente",
    };
  }

  const {
    name,
    brand,
    charger,
    description,
    email,
    guarantee,
    heritage,
    model,
    operationalSystem,
    owner,
    place,
    processor,
    ramQuantity,
    serviceTag,
    status,
    storage,
  } = validatedFields.data;

  try {
    await sql`INSERT INTO devices (
      name,
      brand,
      charger,
      description,
      email,
      guarantee,
      heritage,
      model,
      operationalSystem,
      owner,
      place,
      processor,
      ramQuantity,
      serviceTag,
      status,
      storage
    ) VALUES (
      ${name},
      ${brand},
      ${charger},
      ${description},
      ${email},
      ${guarantee},
      ${heritage},
      ${model},
      ${operationalSystem},
      ${owner},
      ${place},
      ${processor},
      ${ramQuantity},
      ${serviceTag},
      ${status},
      ${storage}
    )`;
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/");
  redirect("/");
}
