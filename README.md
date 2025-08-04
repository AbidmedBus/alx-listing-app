# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project showcases a clean, responsive listing interface with reusable components and a well-structured codebase.

## 🚀 Project Overview

The ALX Listing App is designed to replicate the core functionality of Airbnb's listing page, providing users with an intuitive interface to browse and book vacation rentals. The project emphasizes modern web development practices, including TypeScript for type safety, TailwindCSS for responsive design, and a modular component architecture.

## 📁 Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for displaying listings
│       └── Button.tsx        # Reusable button component with multiple variants
├── constants/
│   └── index.ts              # Application constants and configuration
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── pages/
│   ├── _app.tsx              # Next.js app wrapper
│   ├── _document.tsx         # Custom document configuration
│   └── index.tsx             # Home page with sample listings
├── public/
│   └── assets/               # Static assets (images, SVGs, etc.)
├── styles/
│   └── globals.css           # Global styles with TailwindCSS imports
├── lib/
│   └── utils.ts              # Utility functions
└── README.md                 # Project documentation
```

### Directory Explanations

- **`components/common/`**: Contains reusable UI components that can be used throughout the application
- **`interfaces/`**: TypeScript interfaces for type safety and better development experience
- **`constants/`**: Application-wide constants including API URLs, configuration settings, and UI text
- **`public/assets/`**: Static assets organized for easy access and management
- **`pages/`**: Next.js pages using the Pages Router pattern
- **`styles/`**: Global stylesheets and TailwindCSS configuration

## 🛠️ Technologies Used

- **Next.js 13.5.1** - React framework with Pages Router
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code linting and maintaining code quality

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Type Safety**: Complete TypeScript integration for better development experience
- **Reusable Components**: Modular component architecture for maintainability
- **Modern Styling**: TailwindCSS for rapid and consistent UI development
- **Clean Code**: ESLint configuration for maintaining code quality

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 📦 Component Usage

### Card Component

```tsx
import Card from '@/components/common/Card'

const listing = {
  id: '1',
  title: 'Beautiful Villa',
  description: 'A stunning property with amazing views',
  price: 250,
  image: '/path/to/image.jpg',
  location: 'California, USA'
}

<Card {...listing} onBookNow={(id) => console.log('Booking:', id)} />
```

### Button Component

```tsx
import Button from '@/components/common/Button'

<Button 
  variant="primary" 
  size="large" 
  onClick={() => console.log('Clicked!')}
>
  Book Now
</Button>
```

## 🚀 Next Steps

- Add detailed listing pages
- Implement search and filtering functionality
- Add user authentication
- Create booking system
- Add reviews and ratings
- Implement host dashboard

## 📄 License

This project is part of the ALX Software Engineering program and is intended for educational purposes.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment with your own features and improvements!