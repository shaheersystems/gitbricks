import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
function Deployment({ name, repo, time, status }) {
  return (
    <div className='flex items-center justify-between py-4 border-b border-gray-100'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <div
            className={` p-[0.1px] rounded-full ${
              status === "Production"
                ? "text-green-400 bg-green-50"
                : "text-gray-400 bg-gray-50"
            }`}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z'
                fill='currentColor'
              ></path>
            </svg>
          </div>
          <div>
            <h1 className='text-sm font-semibold'>
              <a href='/'> {name} </a>
              <span className='text-gray-400 font-semibold px-2'>/</span>{" "}
              <a href='/'> {repo}</a>
            </h1>
          </div>
        </div>
        <div>
          <p className='text-xs text-gray-400 px-2'>
            Deploys from GitHub •{" "}
            {status === "Preview" ? "Initiated" : "Deployed"} {time}{" "}
          </p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span
          className={`px-2 ${
            status == "Preview" ? "bg-gray-50" : "bg-indigo-50"
          } py-1 rounded-full border text-xs font-semibold ${
            status === "Production"
              ? "text-indigo-400 border-indigo-400"
              : "text-gray-400 border-gray-400"
          }}`}
        >
          {status}
        </span>
        <button>
          <ChevronRightIcon height={16} className='text-gray-400' />
        </button>
      </div>
    </div>
  );
}

export default Deployment;
