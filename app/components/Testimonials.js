const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          আমাদের গ্রাহকদের মতামত
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1: Cox's Bazar */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "কক্সবাজারে আমাদের ভ্রমণ অভিজ্ঞতা চমৎকার ছিল! সমুদ্র সৈকতের
                সৌন্দর্য, রোদে স্নান, এবং স্থানীয় সংস্কৃতি সত্যিই অসাধারণ ছিল।
                আমি আবারও এই সফরে যেতে চাইব!"
              </p>
              <div className="text-yellow-400 mb-4">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                মো. রাহুল
              </h4>
              <p className="text-gray-500 dark:text-gray-300">
                কক্সবাজার, বাংলাদেশ
              </p>
            </div>
          </div>

          {/* Testimonial 2: Sajek */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "সাজেক ভ্যালির পাহাড়ি সৌন্দর্য দেখতে আমি যাবার পরে একেবারে
                মুগ্ধ হয়ে গিয়েছি। অসাধারণ মনোরম পরিবেশ এবং প্রশান্তি পেয়েছি। এটি
                একটি সম্পূর্ণ অভিজ্ঞতা!"
              </p>
              <div className="text-yellow-400 mb-4">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                মমতা
              </h4>
              <p className="text-gray-500 dark:text-gray-300">
                সাজেক, বাংলাদেশ
              </p>
            </div>
          </div>

          {/* Testimonial 3: Sylhet */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "সিলেটে থাকার অভিজ্ঞতা ছিল একেবারে অন্যরকম। চা বাগান, পাহাড়,
                এবং নদীর পাশে এক অসাধারণ শান্ত পরিবেশ ছিল। সত্যিই ভ্রমণের সেরা
                স্থান!"
              </p>
              <div className="text-yellow-400 mb-4">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                সেলিম মিয়া
              </h4>
              <p className="text-gray-500 dark:text-gray-300">
                সিলেট, বাংলাদেশ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
