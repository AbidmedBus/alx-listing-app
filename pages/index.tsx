import Head from 'next/head'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function Home() {
  const sampleListing = {
    id: '1',
    title: 'Beautiful Beachfront Villa',
    description: 'A stunning villa with ocean views, perfect for your next vacation.',
    price: 250,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malibu, California'
  }

  return (
    <>
      <Head>
        <title>ALX Listing App - Airbnb Clone</title>
        <meta name="description" content="Browse amazing vacation rentals and experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ALX Listing App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing places to stay around the world
            </p>
            <Button 
              onClick={() => console.log('Explore clicked')}
              variant="primary"
              size="large"
            >
              Start Exploring
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card {...sampleListing} />
            <Card {...{...sampleListing, id: '2', title: 'Cozy Mountain Cabin', image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800', location: 'Aspen, Colorado'}} />
            <Card {...{...sampleListing, id: '3', title: 'Modern City Loft', image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800', location: 'New York, NY'}} />
          </div>
        </div>
      </main>
    </>
  )
}