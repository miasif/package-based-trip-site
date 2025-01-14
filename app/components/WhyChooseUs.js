"use client";

import {
  FaCheckCircle,
  FaCogs,
  FaGlobeAmericas,
  FaHeadset,
  FaSmileBeam,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          আমাদের কেন নির্বাচন করবেন?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          আমরা আপনার প্রয়োজন অনুসারে ব্যক্তিগতকৃত ভ্রমণ অভিজ্ঞতা প্রদান করি, যা
          আপনার যাত্রাকে স্মরণীয় এবং নিরবচ্ছিন্ন করে তোলে।
        </p>

        {/* Key Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaGlobeAmericas className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              কাস্টমাইজড সফরের পরিকল্পনা
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমরা আপনার ব্যক্তিগত পছন্দ অনুযায়ী কাস্টমাইজড সফরের পরিকল্পনা করি,
              যাতে আপনি আপনার প্রতিটি সফর থেকে সর্বাধিক উপকার লাভ করতে পারেন।
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaUsers className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              অভিজ্ঞ গাইড
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমাদের অভিজ্ঞ এবং জ্ঞানী গাইডরা নিশ্চিত করেন যে আপনি
              গন্তব্যস্থলগুলোকে আগে কখনও যেমন দেখেননি, ঠিক তেমনভাবে অনুভব করবেন।
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaCogs className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              নিরবচ্ছিন্ন অভিজ্ঞতা
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              পরিকল্পনা থেকে শুরু করে বুকিং এবং সফরের সহায়তা, আমরা নিশ্চিত করি
              যে সবকিছু মসৃণভাবে চলে যাতে আপনি প্রতিটি মুহূর্ত উপভোগ করতে পারেন।
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaSmileBeam className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              গ্রাহক সন্তুষ্টি
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমাদের প্রধান অগ্রাধিকার হলো আপনার সন্তুষ্টি। আমরা নিশ্চিত করি যে
              আপনার ভ্রমণ অভিজ্ঞতা প্রত্যাশার চেয়ে বেশি হবে।
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaCheckCircle className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              গুণগত মান নিশ্চিতকরণ
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমরা শুধুমাত্র বিশ্বস্ত এবং যাচাই করা ভেন্ডরের সাথে সহযোগিতা করি,
              যাতে আমাদের ক্লায়েন্টদের জন্য সর্বোচ্চ মানের সেবা এবং থাকার
              ব্যবস্থা নিশ্চিত করা যায়।
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 dark:text-white">
            <div className="text-center mb-6">
              <FaHeadset className="text-4xl text-blue-500 mb-4" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              ২৪/৭ সাপোর্ট
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমাদের টিম ২৪ ঘণ্টা আপনাকে যে কোনো জিজ্ঞাসা বা সমস্যায় সাহায্য
              করতে প্রস্তুত, যাতে আপনার যাত্রা নির্বিঘ্ন এবং শান্তিপূর্ণ হয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
