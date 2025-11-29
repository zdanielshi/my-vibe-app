export default function Card({ title, description }) {
    return (
      <div className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    )
  }