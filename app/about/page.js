export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">About Daniel</h1>
        <p className="mt-4 text-xl">I'm learning</p>
        <p className="mt-2 text-gray-600">Coming from Python/Streamlit to Next.js</p>
        <a href="/" className="mt-8 text-blue-500 hover:underline text-lg">
          ← Back to home
        </a>
      </main>
    )
  }