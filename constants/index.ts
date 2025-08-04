// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api'

// UI Constants
export const ITEMS_PER_PAGE = 12
export const MAX_GUESTS = 16
export const MIN_NIGHTS = 1
export const MAX_NIGHTS = 365

// App Configuration
export const APP_NAME = 'ALX Listing App'
export const APP_DESCRIPTION = 'Discover amazing places to stay around the world'

// Navigation Links
export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Listings', href: '/listings' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'About', href: '/about' },
]

// Property Types
export const PROPERTY_TYPES = [
  'Entire home/apt',
  'Private room',
  'Shared room',
  'Hotel room'
]

// Amenities List
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Parking',
  'Pool',
  'Hot tub',
  'Gym',
  'Beach access',
  'Pet friendly',
  'Air conditioning',
  'Heating',
  'Washer',
  'Dryer',
  'Workspace',
  'TV',
  'Fireplace'
]

// Price Ranges
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $300', min: 200, max: 300 },
  { label: 'Over $300', min: 300, max: Infinity }
]

// Rating Labels
export const RATING_LABELS = {
  5: 'Excellent',
  4: 'Very Good',
  3: 'Good',
  2: 'Fair',
  1: 'Poor'
}

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.'
}

// Success Messages
export const SUCCESS_MESSAGES = {
  BOOKING_CONFIRMED: 'Your booking has been confirmed!',
  PROFILE_UPDATED: 'Your profile has been updated successfully.',
  REVIEW_SUBMITTED: 'Thank you for your review!'
}