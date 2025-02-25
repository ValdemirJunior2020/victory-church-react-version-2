import React from "react";
import "./Events.css"; // Import custom CSS for any additional styling

const Events = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700">Victory Worship Center</h1>

      {/* Victory Family Night */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-600">VICTORY FAMILY NIGHT</h2>
        <p className="text-gray-700 mt-2">
          <span className="font-bold text-red-500">Wed., March 5th</span>
        </p>
        <p className="text-gray-600">Join us for a fun-filled evening with activities for all ages!</p>
      </div>

      {/* Weekly Events */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-green-600">What's Happening This Week</h3>
        <p className="text-blue-600 font-medium">TUESDAY EXPERIENCE - 7 PM</p>
        <p className="text-red-600 font-medium">THURSDAY MORNING CHAT - 8:30 AM (Live on Facebook)</p>
      </div>

      {/* Youth & Group Activities */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-purple-600">Weekly Activities</h3>
        <p className="text-gray-700">
          <strong className="text-yellow-500">Wacky Wednesday (6:30-7:30 PM)</strong> - Fun for kids aged 6-12
        </p>
        <p className="text-gray-700">
          <strong className="text-pink-500">Women's Group (6:30-7:30 PM)</strong> - Fellowship and support
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-500">Man Up (Men's Group)</strong> - Leadership and faith building
        </p>
      </div>

      {/* Youth Release Information */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-indigo-600">Youth Dismissal</h3>
        <p className="text-gray-700">Youth will be dismissed after worship.</p>
        <p className="text-gray-700">
          Students will be released at <span className="text-orange-500 font-bold">11:15 AM</span>. Please wait for them.
        </p>
      </div>
    </div>
  );
};

export default Events;
