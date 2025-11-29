import Card from './components/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">My Vibe Dashboard</h1>
      <p className="text-gray-600 mb-12">Building in public, one component at a time</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card 
          title="⚡ Fast Setup" 
          description="From zero to deployed in 30 minutes"
        />
        <Card 
          title="🚀 Auto Deploy" 
          description="Every push goes live automatically"
        />
        <Card 
          title="💾 Database Ready" 
          description="Coming in the next unit"
        />
        <Card 
          title="🤖 AI Powered" 
          description="Curosr + Claude = coding skillz"
        />
      </div>
    </main>
  )
}