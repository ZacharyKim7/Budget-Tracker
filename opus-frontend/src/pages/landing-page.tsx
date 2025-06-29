import { useNavigate } from 'react-router';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-white">
      <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-500">Opus</span>
        </div>
        <nav className="space-x-4">
          <button
            className="text-gray-700 hover:text-orange-500"
            onClick={() => navigate('/login')}>Sign In</button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">All Your Finances, One Clear View</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Monarch simplifies finances by bringing all your accounts together into one clear view. Always know where your money is and where it's going, achieve your goals quicker, and collaborate with your partner or professional at no extra cost.
        </p>
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded text-lg font-semibold hover:bg-orange-600 transition"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
      </main>
    </div>
  );
} 