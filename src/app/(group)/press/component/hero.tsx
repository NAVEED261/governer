import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-900 py-32 px-10 relative mb-4">
              <div className="w-full h-full">
                <Image
                  alt="gallery"
                  src="/Main Building 1.jpg" // Update the image path accordingly
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
