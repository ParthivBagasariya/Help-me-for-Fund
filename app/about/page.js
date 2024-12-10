import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-xl'>About</h1>
      <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At getMe a chai, our mission is to connect tea enthusiasts with unique and artisanal chai blends from around the world. We believe in the power of community and the joy that a perfect cup of chai can bring. Our platform allows chai lovers to discover, support, and enjoy exclusive chai creations crafted by passionate chai makers.
            </p>
          </section>
          <section className="bg-white p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The idea for getMe a chai was born out of a love for chai and a desire to share that love with the world. Our founders, avid chai drinkers, realized that while there were many varieties of chai, finding truly unique and high-quality blends was a challenge. Thus, getMe a chai was created to bridge the gap between chai makers and chai enthusiasts, providing a platform for both to thrive.
            </p>
          </section>
          <section className="bg-white p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                  <img src="/images/team-member-1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Jane Doe</h3>
                  <p className="text-gray-600">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                  <img src="/images/team-member-2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">John Smith</h3>
                  <p className="text-gray-600">Co-Founder & CTO</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                  <img src="/images/team-member-3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Emily Johnson</h3>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default About;

export const metadata = {
    title: 'About - Help Me For Fund',
  }

