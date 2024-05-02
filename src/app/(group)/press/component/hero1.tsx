import React from "react";

const Hero1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-cols-2 items-center">
          <div className="lg:max-w-lg lg:w-full md:w-3 w-9 relative">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/sir zia khan.jpg"
            />
            <div className="text-left mt-2">
              <h2 className="text-xl text-gray-800 font-medium">
                Sir Zia Khan <br />
                President of PIAIC <br />& Governor Initiative Programme
              </h2>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 relative">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              HONORABLE GOVERNOR OF SINDH,
              <br className="hidden lg:inline-block" />
              MR. KAMRAN KHAN TESSORI
            </h1>
            <p className="mb-8 leading-relaxed">
              Mr. Muhammad Kamran Khan Tessori took oath on 10th October 2022 as
              34th Governor of Sindh under Article 101 of the Constitution of
              Islamic Republic of Pakistan.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 relative">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/kamran khan tessori.jpg" // Update the image path accordingly
            />
            <div className="text-left mt-2">
              <h2 className="text-xl text-gray-800 font-medium">
                Muhammad <br />
                Kamran Khan <br />
                Tessori <br />
                Governor of Sindh
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
