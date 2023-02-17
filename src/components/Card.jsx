import React from "react";
import { TiAttachmentOutline } from "react-icons/ti";
import { MdComment } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col p-4 justify-center w-96 h-96 bg-white rounded-lg shadow-md">
      <div className="text-left">
        <button className="mb-6  py-2 px-10 bg-[#EFEEFF] text-[#958EF3] font-bold rounded-3xl">
          User Interface
        </button>
      </div>
      <h1 className="text-left text-gray-900 font-bold text-xl lg:text-3xl">
        Service Page Website
      </h1>
      <p className="my-6 text-left text-gray-500 text-sm lg:text-lg">
        Make a page display about services for websites company with blue and
        red colors.
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <svg
            className="h-6 w-6 flex-none fill-white stroke-gray-500 stroke-1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <p className=" text-gray-500">0/20</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex -space-x-1 overflow-hidden">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <button className="py-2 px-4 bg-[#54A0FF] text-white font-semibold rounded-full">
            Invite
          </button>
        </div>
      </div>

      <div className="my-6 flex justify-center">
        <button className="flex  bg-white border border-gray-300 py-3 px-8 rounded-full">
          <span className="flex items-center text-gray-500 font-medium">
            <TiAttachmentOutline className="mr-2 text-gray-700" />4 Attachments
          </span>
          <span className="flex mx-4 text-gray-500">|</span>
          <span className="flex items-center text-gray-500 font-medium">
            <MdComment className="mr-2 text-gray-700" />
            10 Comments
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
