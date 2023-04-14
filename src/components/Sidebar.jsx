import React from "react";
import {
  EllipsisHorizontalIcon,
  FolderIcon,
  ServerIcon,
  SignalIcon,
  GlobeAltIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import UserAvatar from "./UserAvatar";
function Sidebar() {
  return (
    <div className='h-screen fixed top-0 right-0 left-0 bottom-0 bg-gray-100 w-72 flex flex-col justify-between'>
      <div className='px-6 flex flex-col gap-5'>
        <div className='w-full h-20 flex items-center text-black justify-between'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12.946 18.151v-5.239L21.209 8.2L19.2 7.048l-6.254 3.567V5.36c0-.356-.192-.689-.5-.866L4.922.177a1.434 1.434 0 0 0-1.455.044a1.438 1.438 0 0 0-.676 1.224v14.777A1.44 1.44 0 0 0 4.92 17.49l6.032-3.44v4.683a1 1 0 0 0 .504.867l7.73 4.4l2.01-1.152l-8.25-4.697zM10.953 5.938v5.814L4.785 15.27V2.4l6.168 3.539v-.001z'
            />
          </svg>
          <button>
            <EllipsisHorizontalIcon className='h-6 w-6 text-gray-600' />
          </button>
        </div>
        <div>
          <span className='text-gray-600 text-xs font-semibold'>
            Navigation
          </span>
          <div className='py-4 px-2'></div>
          <div className='space-y-3'>
            <a href='/' className='flex gap-3 items-center font-semibold'>
              <FolderIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm'>Projects</span>
            </a>
            <a
              href='/'
              className='text-indigo-600 flex gap-3 items-center font-semibold'
            >
              <ServerIcon className='text-indigo-600 h-5 w-5' />
              <span className='text-sm'>Deployments</span>
            </a>
            <a href='/' className='flex gap-3 items-center font-semibold'>
              <SignalIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm'>Activity</span>
            </a>
            <a href='/' className='flex gap-3 items-center font-semibold'>
              <GlobeAltIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm'>Domains</span>
            </a>
            <a href='/' className='flex gap-3 items-center font-semibold'>
              <ChartBarSquareIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm'>Usage</span>
            </a>
            <a href='/' className='flex gap-3 items-center font-semibold'>
              <Cog6ToothIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm'>Settings</span>
            </a>
          </div>
        </div>
        <div>
          <span className='text-gray-600 text-xs font-semibold'>
            Your teams
          </span>
          <div>
            <div className='py-4 flex flex-col gap-2'>
              <a href='/' className='flex gap-3 items-center'>
                <div className='w-6 h-6 rounded bg-gray-300 flex text-gray-700 items-center justify-center text-xs font-semibold'>
                  P
                </div>
                <span className='text-sm font-semibold text-gray-600'>
                  Planetaria
                </span>
              </a>
              <a href='/' className='flex gap-3 items-center'>
                <div className='w-6 h-6 rounded bg-gray-300 flex text-gray-700 items-center justify-center text-xs font-semibold'>
                  P
                </div>
                <span className='text-sm font-semibold text-gray-600'>
                  Protocol
                </span>
              </a>
              <a href='/' className='flex gap-3 items-center'>
                <div className='w-6 h-6 rounded bg-gray-300 flex text-gray-700 items-center justify-center text-xs font-semibold'>
                  T
                </div>
                <span className='text-sm font-semibold text-gray-600'>
                  Tailwind Labs
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-16 flex px-6 items-center'>
        <UserAvatar />
      </div>
    </div>
  );
}

export default Sidebar;
