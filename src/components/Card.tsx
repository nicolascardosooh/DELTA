import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface CardProps {
  title: string
  description: string
  image: StaticImageData
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] w-full text-black">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
