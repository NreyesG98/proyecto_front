"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

import { ToastContainer, toast, Slide } from "react-toastify";

const LoginPage = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [correoApo, setCorreoApo] = useState("");
  const [contrasenaApo, setContrasenaApo] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(20);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo_apo: correoApo,
          contrasena_apo: contrasenaApo,
        }),
      });

      setProgress(60);

      const result = await response.json();

      if (!response.ok) {
        toast.error(result?.message || 'Hubo un problema al iniciar sesión.');
        // console.error(data.message);
        throw new Error("Error en la solicitud");
      }

      // const result = await response.json();
      localStorage.setItem("token", result.token);
      localStorage.setItem("tipo_apo", result.tipo);
      localStorage.setItem("nombre_apo", result.userValues.nombre_apo);
      localStorage.setItem("apellido_apo", result.userValues.apellido_apo);

      toast.success("Inicio de sesión exitoso!");

      console.log("tipo usuario: ", result.tipo);
      console.log("data user: ", result.userValues.nombre_apo);
      console.log("data user: ", result.userValues.apellido_apo);

      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/blog"); // Redirige al usuario después de iniciar sesión
      }, 2000);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Bienvenido a Colegio Alicante
      </h1>
      <p className="text-light-100">
        Ingrese sus credenciales para obtener acceso.
      </p>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="email">
            Correo
          </Label>
          <Input
            id="email"
            className="form-input"
            type="email"
            value={correoApo}
            placeholder="apoderado@example.com"
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
            placeholder="********"
            required
            value={contrasenaApo}
            onChange={(e) => setContrasenaApo(e.target.value)}
          />
        </div>

        {isLoading && <Progress value={progress} className="w-full" />}

        <Button
          // onClick={notify}
          type="submit"
          className="form-btn"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Login"}
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />

        <p className="text-center text-base font-medium">
          Nuevo en Colegio Alicante?{" "}
          <Link href={"/register"} className="font-bold text-primary">
            Crear una cuenta
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
