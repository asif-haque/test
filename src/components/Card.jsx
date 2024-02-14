import React from "react";

const Card = ({ dob, picture, email, name, gender, phone }) => {
  return (
    <div className="text-white rounded-lg overflow-hidden shadow-lg w-[80%] sm:w-[60%] lg:w-[50%] m-auto lg:flex">
      <img
        src={picture.large}
        alt="Profile"
        className="w-full lg:w-[90%] h-auto object-contain"
      />
      <div className="p-3 pr-5 lg:pr-10 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="text-2xl font-bold">
          {name.title} {name.first} {name.last}
        </h2>
        <hr />
        <p className="text-gray-300">{email}</p>
        <div className="mt-2 lg:mt-5 space-y-1 text-lg">
          <p className="text-gray-100">
            <strong>Gender:</strong> {gender}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-100">
              <strong>DOB:</strong> {dob.date.slice(0, 10)}
            </p>
            <p className="text-gray-100">
              <strong>Age:</strong> {dob.age}
            </p>
          </div>
          <p className="text-gray-100">
            <strong>Phone Number:</strong> {phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
