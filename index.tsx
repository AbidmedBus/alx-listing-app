import Head from 'next/head'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">عقارات مميزة</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="شقة فاخرة في مراكش" image="/assets/placeholder.jpg" />
          <Card title="رياض تقليدي في فاس" image="/assets/placeholder.jpg" />
          <Card title="فيلا فاخرة في طنجة" image="/assets/placeholder.jpg" />
        </div>

        <div className="mt-10">
          <Button label="شوف المزيد" onClick={() => alert('غادي تشوف المزيد...')} />
        </div>
      </main>
    </>
  )
}
