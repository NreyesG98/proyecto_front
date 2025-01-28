import * as React from "react"

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Gallery = () => {
  const images = [
    {
        url: 'images/colegio1.jpg',
        alt: 'Imagen 1'
    },
    {
        url: 'images/colegio2.jpg',
        alt: 'Imagen 2'
    },
    {
        url: 'images/colegio3.jpg',
        alt: 'Imagen 3'
    },
    {
        url: 'images/colegio4.jpg',
        alt: 'Imagen 4'
    },
    {
        url: 'images/colegio5.jpg',
        alt: 'Imagen 5'
    },
    {
        url: 'images/colegio6.jpg',
        alt: 'Imagen 6'
    }
];
  // <div className={styles.gallery}>
  //     {images.map((image, index) => (
  //         <div key={index} className={styles.galleryItem}>
  //             <img src={image.url} alt={image.alt} />
  //         </div>
  //     ))}
  // </div>

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  {/* <img src={image.url} alt={image.alt} className="object-cover w-full h-full rounded-lg" /> */}
                  <img src={image.url} alt={image.alt} className="md:basis-1/2 lg:basis-1/3" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Gallery;







// import React from 'react';
// import { Button } from '@shadcn/ui';
// import { Card, CardHeader, CardBody, CardFooter } from '@shadcn/ui';

// const CrudGalerias = () => {
//     return (
//         <div className="container mx-auto p-4">
//             <Card className="shadow-lg rounded-lg">
//                 <CardHeader className="bg-gray-800 text-white p-4 rounded-t-lg">
//                     <h2 className="text-xl font-semibold">Galerías</h2>
//                 </CardHeader>
//                 <CardBody className="p-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {/* Aquí puedes mapear tus elementos de galería */}
//                         <div className="bg-gray-100 p-4 rounded-lg shadow">
//                             <h3 className="text-lg font-semibold">Galería 1</h3>
//                             <p className="text-gray-600">Descripción de la galería 1</p>
//                         </div>
//                         <div className="bg-gray-100 p-4 rounded-lg shadow">
//                             <h3 className="text-lg font-semibold">Galería 2</h3>
//                             <p className="text-gray-600">Descripción de la galería 2</p>
//                         </div>
//                         {/* Añade más elementos de galería según sea necesario */}
//                     </div>
//                 </CardBody>
//                 <CardFooter className="bg-gray-100 p-4 rounded-b-lg">
//                     <Button className="bg-blue-500 text-white hover:bg-blue-600">Añadir Nueva Galería</Button>
//                 </CardFooter>
//             </Card>
//         </div>
//     );
// };

// export default CrudGalerias;