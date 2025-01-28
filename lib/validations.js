import { z } from 'zod';

export const registerSchema = z.object({
  // idApoderado: z.string().min(10),
  // idApoderado: z.coerce().number(),
  idApoderado: z.preprocess((val) => Number(val), z.number().nonnegative({
    message: "Rut invalido!",
  })),
  nombreApo: z.string().min(2),
  apellidoApo: z.string().min(2),
  telefonoApo: z.string(),
  correoApo: z.string({
    required_error: "Seleccione un correo electrónico para mostrar.",
  }).email(),
  contrasenaApo: z.string().min(6),
  direccionApo: z.string(),
  tipoApo: z.string(),
});


export const loginSchema = z.object({
  correoApo: z.string().email(),
  contrasenaApo: z.string().min(6),
});

export const apoderadoSchema = z.object({
  title: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(1000),
  author: z.string().trim().min(2).max(100),
  genre: z.string().trim().min(2).max(50),
  rating: z.coerce.number().min(1).max(5),
  totalCopies: z.coerce.number().int().positive().lte(10000),
  coverUrl: z.string().nonempty(),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i),
  videoUrl: z.string().nonempty(),
  summary: z.string().trim().min(10),
});