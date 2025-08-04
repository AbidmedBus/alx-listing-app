// Card Component Props
export interface CardProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  location: string
  onBookNow?: (id: string) => void
}

// Button Component Props
export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

// Listing Data Interface
export interface Listing {
  id: string
  title: string
  description: string
  price: number
  image: string
  location: string
  rating?: number
  reviewCount?: number
  amenities?: string[]
  host?: {
    name: string
    avatar: string
    joinedDate: string
  }
}

// User Interface
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  joinedDate: string
}

// Booking Interface
export interface Booking {
  id: string
  listingId: string
  userId: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled'
}