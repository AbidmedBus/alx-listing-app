import Image from 'next/image'
import { CardProps } from '@/interfaces'
import Button from './Button'

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  price,
  image,
  location,
  onBookNow
}) => {
  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow(id)
    } else {
      console.log(`Booking ${title}`)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-600 text-sm block">per night</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </p>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleBookNow}
            variant="primary"
            size="small"
            className="flex-1"
          >
            Book Now
          </Button>
          <Button 
            onClick={() => console.log(`View details for ${title}`)}
            variant="secondary"
            size="small"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card