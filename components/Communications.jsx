import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const Communications = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <img
            src="images/colegio4.jpg"
            alt="Image 1"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Olimpiadas deportivas 2024</h2>
          <p className="text-gray-600">Este martes 19 de noviembre, a partir de las 9:00 horas, 
            Red Alicante retomó la tradicional jornada de olimpiadas deportivas, 
            donde participaron representantes de los seis colegios educacionales. 
            Para las competencias fueron seleccionados estudiantes de 5° a 8° básico, 
            desarrollándose torneos de futbolito y quemadas mixto, junto con competencias de 
            Cross Country varones y mujeres, divididos en dos categorías según niveles educativos 
            (5° y 6° básico y 7° y 8° básico).</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            src="images/colegio5.jpg"
            alt="Image 2"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Licenciatura Kínder 2024</h2>
          <p className="text-gray-600">Los niños y niñas de Kínder A y B del Colegio Alicante vivieron su ceremonia de Licenciatura, 
            acompañados por sus educadoras, Raquel Letelier y Claudia Garfias y sus asistentes de aula. En la ocasión, se reconoció a las y 
            los estudiantes que destacaron como Mejor Compañero, Rendimiento Académico, Esfuerzo y Valores Institucionales. Además, 
            se disfrutaron dos presentaciones musicales, protagonizadas por la estudiante de 7° básico, Daniela Miranda, y la profesora, 
            Lissette González. En representación de las educadoras, la docente Raquel Letelier pronunció un emotivo discurso, 
            y por parte de las y los estudiantes, lo brindó Michelle González.
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@janedoe" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            src="images/colegio6.jpg"
            alt="Image 3"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Fiesta de la Chilenidad 2024</h2>
          <p className="text-gray-600">Este viernes 13 de septiembre, el Colegio Alicante celebró el acto de Fiestas Patrias 2024, 
            a partir de las 9:00 horas. En la ocasión, los cursos de todos los niveles presentaron bailes típicos nacionales, 
            preparados durante el último mes en la asignatura de Educación Física. La obertura del evento corrió por cuenta del 
            Kínder A, quienes, junto a su educadora, Raquel Letelier, y sus asistentes técnicas, Paulina Palacios y Paola Navarrete, 
            prepararon una hermosa versión de la “Pérgola de las Flores”.
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@alexdoe" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            src="images/colegio4.jpg"
            alt="Image 1"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Olimpiadas deportivas 2024</h2>
          <p className="text-gray-600">Este martes 19 de noviembre, a partir de las 9:00 horas, 
            Red Alicante retomó la tradicional jornada de olimpiadas deportivas, 
            donde participaron representantes de los seis colegios educacionales. 
            Para las competencias fueron seleccionados estudiantes de 5° a 8° básico, 
            desarrollándose torneos de futbolito y quemadas mixto, junto con competencias de 
            Cross Country varones y mujeres, divididos en dos categorías según niveles educativos 
            (5° y 6° básico y 7° y 8° básico).</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            src="images/colegio5.jpg"
            alt="Image 2"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Licenciatura Kínder 2024</h2>
          <p className="text-gray-600">Los niños y niñas de Kínder A y B del Colegio Alicante vivieron su ceremonia de Licenciatura, 
            acompañados por sus educadoras, Raquel Letelier y Claudia Garfias y sus asistentes de aula. En la ocasión, se reconoció a las y 
            los estudiantes que destacaron como Mejor Compañero, Rendimiento Académico, Esfuerzo y Valores Institucionales. Además, 
            se disfrutaron dos presentaciones musicales, protagonizadas por la estudiante de 7° básico, Daniela Miranda, y la profesora, 
            Lissette González. En representación de las educadoras, la docente Raquel Letelier pronunció un emotivo discurso, 
            y por parte de las y los estudiantes, lo brindó Michelle González.
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@janedoe" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            src="images/colegio6.jpg"
            alt="Image 3"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            width="300"
            height="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Fiesta de la Chilenidad 2024</h2>
          <p className="text-gray-600">Este viernes 13 de septiembre, el Colegio Alicante celebró el acto de Fiestas Patrias 2024, 
            a partir de las 9:00 horas. En la ocasión, los cursos de todos los niveles presentaron bailes típicos nacionales, 
            preparados durante el último mes en la asignatura de Educación Física. La obertura del evento corrió por cuenta del 
            Kínder A, quienes, junto a su educadora, Raquel Letelier, y sus asistentes técnicas, Paulina Palacios y Paola Navarrete, 
            prepararon una hermosa versión de la “Pérgola de las Flores”.
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@alexdoe" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              Ver más
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Communications