import React, { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    beds: 1,
    baths: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    price: 0,
    discount: 0,
  });
  const {
    type,
    name,
    beds,
    baths,
    parking,
    furnished,
    address,
    description,
    offer,
    price,
    discount,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className=" text-center mt-6 text-3xl font-bold font-mono ">
        Create Listing
      </h1>
      <div className="">
        <form>
          <div>
            <p className="text-lg mt-6 font-semibold">Sell / Rent :</p>
            <div className=" flex justify-between mt-4">
              <button
                type="button"
                id="type"
                value="sell"
                className={`px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   type === "rent"
                     ? "bg-white text-black"
                     : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                SELL
              </button>
              <button
                type="button"
                id="type"
                value="rent"
                className={` ml-3 px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   type === "sell"
                     ? "bg-white text-black"
                     : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                RENT
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-3 font-semibold text-lg">Name :</p>
            <input
              className="w-full px-7 py-3 rounded-lg text-xl text-gray-700 bg-white border-gray-300
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              onChange={onChange}
              id="name"
              value={name}
              type="text"
              maxLength={32}
              minLength={10}
              required
            ></input>
          </div>
          <div className="flex space-x-6 items-start mb-6">
            <div>
              <p className="mb-3 font-semibold text-lg">Beds</p>
              <input
                className="w-full px-4 py-2 text-xl text-gray-300 bg-white border-gray-700
                transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
                 focus:border-slate-600 text-center"
                type="number"
                id="beds"
                value={beds}
                required
                onChange={onChange}
                min="1"
                max="50"
              ></input>
            </div>
            <div>
              <p className="mb-3 font-semibold text-lg">Baths</p>
              <input
                className="w-full px-4 py-2 text-xl text-gray-300 bg-white border-gray-700
                transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
                 focus:border-slate-600 text-center"
                type="number"
                id="baths"
                value={baths}
                onChange={onChange}
                required
                min="1"
                max="50"
              ></input>
            </div>
          </div>
          <div>
            <p className="text-lg mt-6 font-semibold">Parking Spots :</p>
            <div className=" flex justify-between mt-4">
              <button
                type="button"
                id="parking"
                value={true}
                className={`px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   !parking ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                YES
              </button>
              <button
                type="button"
                id="parking"
                value={false}
                className={` ml-3 px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   parking ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg mt-6 font-semibold">Furnished :</p>
            <div className=" flex justify-between mt-4">
              <button
                type="button"
                id="furnished"
                value={true}
                className={`px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   !furnished
                     ? "bg-white text-black"
                     : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                YES
              </button>
              <button
                type="button"
                id="furnished"
                value={false}
                className={` ml-3 px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg mt-6 mb-3 font-semibold">Address :</p>
            <textarea
              value={address}
              id="address"
              type="text"
              required
              className="w-full px-7 py-3 rounded-lg text-xl text-gray-700 bg-white border-gray-300
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              placeholder="Address"
            />
          </div>
          <div>
            <p className="text-lg  mb-3 font-semibold">Description :</p>
            <textarea
              value={description}
              required
              id="description"
              type="text"
              className="w-full px-7 py-3 rounded-lg text-xl text-gray-700 bg-white border-gray-300
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              placeholder="Description"
            />
          </div>
          <div>
            <p className="text-lg  font-semibold">Offer :</p>
            <div className=" flex justify-between mt-4 mb-6">
              <button
                type="button"
                id="offer"
                value={true}
                className={`px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full ${
                   !offer ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                YES
              </button>
              <button
                type="button"
                id="offer"
                value={false}
                className={` ml-3 px-7 py-3 font-medium test-sm uppercase
                 shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-200 ease-in-out w-full  ${
                   offer ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}
                onClick={onChange}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg  font-semibold mb-6">Regular Price :</p>
            {/* Left */}
            <div className="flex justify-center items-center space-x-6">
              <input
                type="number"
                id="price"
                value={price}
                min="50"
                max="400000000"
                required
                className=" text-center w-full px-7 py-3 rounded-lg text-xl text-gray-700 bg-white border-gray-300
          transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              ></input>
              {/* Right */}
              {type === "rent" && (
                <p className="font-semibold w-full whitespace-nowrap">
                  $ / Month
                </p>
              )}
            </div>
          </div>
          {offer && (
            <div>
              <p className="text-lg  font-semibold mb-6">Discounted Price :</p>
              <input
                type="number"
                id="discount"
                value={discount}
                required={offer}
                min="50"
                max="400000000"
                className=" text-center w-[50%] px-7 py-3 rounded-lg text-xl text-gray-700 bg-white border-gray-300
          transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
              ></input>
            </div>
          )}
          <div className="mb-6">
            <p className="text-lg  font-semibold ">Images :</p>
            <p className="text-gray-500">The first image will be the Cover</p>
            <input
              type="file"
              id="images"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border
               border-gray-300 rounded transition duration-150 ease-in-out
               focus:bg-white focus:border-slate-600"
            ></input>
          </div >
          <button
              type="submit"
              className="mb-6 bg-blue-600 text-white w-full px-7 py-3 rounded-md mt-3 text-sm font-medium uppercase shadow-md
             hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Create Listing
            </button>
        </form>
      </div>
    </main>
  );
};

export default CreateListing;
