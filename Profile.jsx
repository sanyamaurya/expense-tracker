import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />

          <div>
            <h2 className="text-2xl font-bold">Sanya Maurya</h2>
            <p className="text-gray-600">sanya@example.com</p>

            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>

        <hr className="my-6" />

        {/* ACCOUNT DETAILS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Account Details</h3>

          <div className="space-y-3">
            <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
            <p><span className="font-semibold">Address:</span> Delhi, India</p>
            <p><span className="font-semibold">Member Since:</span> January 2024</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* CHANGE PASSWORD */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 border rounded"
            />

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Update Password
            </button>
          </div>
        </div>

        <hr className="my-6" />

        {/* RECENT ACTIVITY */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Added expense: ₹500 – Groceries</li>
            <li>Updated profile details</li>
            <li>Added expense: ₹1200 – Travel</li>
          </ul>
        </div>

        <hr className="my-6" />

        {/* ACCOUNT SETTINGS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>

          <div className="space-y-4">
            <button className="w-full p-2 bg-gray-200 rounded hover:bg-gray-300">
              Enable Dark Mode (Coming Soon)
            </button>

            <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
