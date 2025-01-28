import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ApoderadoForm from "@/components/admin/forms/ApoderadoForm";
// import BookForm from "@/components/admin/forms/BookForm";

const Page = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/apoderados">Regresar</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <ApoderadoForm />
      </section>
    </>
  );
};
export default Page;
