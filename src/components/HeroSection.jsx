import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          {/* Headline restored to gray-900 text */}
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Engineer Scalable Systems and{' '}
            {/* Accent color restored to indigo-600 */}
            <strong className="text-indigo-600">Master</strong> the Codebase
          </h1>

          {/* Body Text restored to gray-700 text */}
          <p className="mt-4 text-base text-pretty text-gray-700 sm:leading-relaxed sm:text-lg">
            Move beyond boilerplate. We focus on **clean architecture**, **optimized performance**, and leveraging modern frameworks to solve complex challenges and deliver robust, production-ready applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            {/* Primary Button restored to Indigo/White scheme */}
            <a
              href="#"
              className="inline-block rounded-lg border border-indigo-600 bg-indigo-600 px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:bg-indigo-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2"
            >
              Start Coding
            </a>

            {/* Secondary Button restored to White/Gray scheme */}
            <a
              href="#"
              className="inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-md transition-colors duration-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 focus:ring-offset-2"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;