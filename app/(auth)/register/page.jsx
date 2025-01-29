"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ToastContainer, toast, Bounce } from "react-toastify";

function App() {
  const [id_apoderado, setIdApoderado] = useState("");
  const [nombreApo, setNombreApo] = useState("");
  const [apellidoApo, setApellidoApo] = useState("");
  const [telefonoApo, setTelefonoApo] = useState("");
  const [correoApo, setCorreoApo] = useState("");
  const [contrasenaApo, setContrasenaApo] = useState("");
  const [direccionApo, setDireccionApo] = useState("");
  const [tipoApo, setTipoApo] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("aqui esta la url :", process.env.NEXT_PUBLIC_API_URL);
      console.log(process.env);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_apoderado: id_apoderado,
            nombre_apo: nombreApo,
            apellido_apo: apellidoApo,
            telefono_apo: telefonoApo,
            correo_apo: correoApo,
            contrasena_apo: contrasenaApo,
            direccion_apo: direccionApo,
            tipo_apo: tipoApo,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result?.message || "Hubo un problema al registrar.");
        throw new Error("Error en la solicitud");
      }

      toast.success("Registro de usuario exitoso!");
      // const result = await response.json();
      localStorage.setItem("token", result.token);
      console.log("user data: ", result);

      setTimeout(() => {
        setIsLoading(false);
        router.push("/login"); // Redirige al usuario después de registrarse
      }, 2000);
    } catch (error) {
      console.error("Error al registrarse:", error);
      toast.error("Hubo un problema al registrar.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Bienvenido a Colegio Alicante
      </h1>
      <p className="text-light-100">
        Acceda a la amplia seleccion de recursos del colegio.
      </p>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="rut">
            Rut
          </Label>
          <Input
            id="rut"
            className="form-input"
            type="text"
            value={id_apoderado}
            placeholder="11.111.111-1"
            required
            onChange={(e) => setIdApoderado(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="nombre">
            Nombre
          </Label>
          <Input
            id="nombre"
            className="form-input"
            type="text"
            value={nombreApo}
            placeholder="Nombre"
            required
            onChange={(e) => setNombreApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="apellido">
            Apellido
          </Label>
          <Input
            id="apellido"
            className="form-input"
            type="text"
            value={apellidoApo}
            placeholder="Apellido"
            required
            onChange={(e) => setApellidoApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="telefono">
            Telefono
          </Label>
          <Input
            id="telefono"
            className="form-input"
            type="number"
            value={telefonoApo}
            placeholder="Telefono"
            required
            onChange={(e) => setTelefonoApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="email">
            Correo
          </Label>
          <Input
            id="email"
            className="form-input"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) => setCorreoApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="password">
            Contraseña
          </Label>
          <Input
            id="password"
            className="form-input"
            type="password"
            required
            value={contrasenaApo}
            onChange={(e) => setContrasenaApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="direccion">
            Direccion
          </Label>
          <Input
            id="direccion"
            className="form-input"
            type="text"
            required
            value={direccionApo}
            onChange={(e) => setDireccionApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="tipouser">
            Tipo de Usuario
          </Label>
          <Input
            id="tipouser"
            className="form-input"
            type="text"
            required
            value={tipoApo}
            onChange={(e) => setTipoApo(e.target.value)}
          />
        </div>

        <Button type="submit" className="form-btn">
          {isLoading ? "Cargando..." : "Registrar"}
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <p className="text-center text-base font-medium">
          ¿Ya tienes una cuenta?{" "}
          <Link href={"/login"} className="font-bold text-primary">
            Iniciar sesión
          </Link>
        </p>
      </form>
    </div>
  );
}

export default App;
