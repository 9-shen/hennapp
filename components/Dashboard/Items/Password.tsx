"use client";

import { useState } from "react";

export default function Password() {
  // State for password fields and password match
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to check password strength (basic example)
  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    if (password.length >= 6 && password.length <= 10) return "Medium";
    return "Strong";
  };

  // Check if the new password and confirm password match
  const isPasswordMatch = newPassword === confirmPassword;
  const isPasswordValid = newPassword.length >= 6 && isPasswordMatch;

  return (
    <div>
        <div className="flex justify-between items-center">
      <h3 className="font-bold">Password</h3>
      <p><span className="font-bold text-slate-400  mr-2">Password Strength:</span> 
        <span className={`${
      checkPasswordStrength(newPassword) === "Weak"
        ? "text-red-500"
        : checkPasswordStrength(newPassword) === "Medium"
        ? "text-teal-500"
        : "text-teal-800"
    }`}>

      {checkPasswordStrength(newPassword)}
    </span>
      </p>

        </div>
      <hr className="my-6 border-t border-gray-300" />

      {/* Old Password */}
      <div className="flex items-center mb-5">
        <label
          htmlFor="oldPassword"
          className="w-50 inline-block text-center mr-4 text-gray-500"
        >
          Old Password
        </label>
        <input
          name="oldPassword"
          id="oldPassword"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Enter old password"
          className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
        />
      </div>

      {/* New Password */}
      <div className="flex items-center mb-5">
        <label
          htmlFor="newPassword"
          className="w-50 inline-block text-center mr-4 text-gray-500"
        >
          New Password
        </label>
        <input
          name="newPassword"
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex items-center mb-5">
        <label
          htmlFor="confirmPassword"
          className="w-50 inline-block text-center mr-4 text-gray-500"
        >
          Confirm Password
        </label>
        <input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
        />
      </div>

     

      {/* Password Match Message */}
      {newPassword && confirmPassword && !isPasswordMatch && (
        <p className="text-red-500">Passwords do not match</p>
      )}
      {newPassword && confirmPassword && isPasswordMatch && (
        <p className="text-teal-500">Passwords match</p>
      )}

      {/* Submit Button */}
      <button
        type="button"
        disabled={!isPasswordValid}
        className={`mt-5 w-full py-2 bg-teal-500 text-white rounded-md ${!isPasswordValid ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Change Password
      </button>
    </div>
  );
}
