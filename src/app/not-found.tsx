import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
