import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center px-4">
            <div className="text-center max-w-xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-200">
                
                <h1 className="text-8xl font-extrabold text-indigo-600 mb-4">404</h1>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    The page you are looking for might have been removed, 
                    renamed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-10 text-6xl animate-bounce">
                    🚧
                </div>
            </div>
        </div>
    );
};

export default Error;