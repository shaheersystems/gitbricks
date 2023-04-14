import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <div className='sticky top-0 z-30 bg-white px-5 py-4 border-b flex items-center justify-between'>
      <div className='flex-1'>
        <input
          type='text'
          name=''
          id=''
          placeholder='Search Projects'
          className='px-4 py-1.5 rounded border focus:ring text-sm text-gray-600 w-11/12 outline-none'
        />
      </div>
      <div className='flex-1 flex items-center justify-end gap-2'>
        {["Documentation", "Community", "Support"].map((link) => {
          return (
            <a
              key={link + Math.random()}
              href='#'
              className='text-sm font-semibold px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900'
            >
              {link}
            </a>
          );
        })}
        <button className='ml-2 flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-indigo-700 bg-indigo-600 text-white'>
          <PlusIcon className='h-5 w-5 text-white' />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
}
