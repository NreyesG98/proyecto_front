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

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-md"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <Card className="h-full">
              <CardContent className="flex aspect-square items-center justify-center p-4">
                <img src={image.url} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery;