import React from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
function UpperBar() {
  return (
    <div className='flex items-center justify-between h-10 w-full'>
      <div>
        <h1 className='text-sm font-semibold'>Deployments</h1>
      </div>
      <div>
        <button className='flex items-center gap-2 text-sm font-semibold px-3 py-1 hover:bg-gray-100 rounded'>
          Sort by
          <ChevronUpDownIcon className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}

export default UpperBar;
