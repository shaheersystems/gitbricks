import React from "react";

function Activity({ branch, time, user, avatar, repo, token }) {
  return (
    <div className='px-2 py-5 border-gray-200 space-y-2 border-b'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <img className='h-5 w-5 rounded-full' src={avatar} alt={user} />
          <p>{user}</p>
        </div>
        <div>
          <span className='text-xs font-semibold text-gray-400'>{time}</span>
        </div>
      </div>
      <div>
        <p className='text-xs font-semibold text-gray-400'>
          Pushed to <span className='text-gray-600'>{repo}</span> (
          <span className='text-gray-600'>{token}</span> on
          <span className='text-gray-600'> {branch}</span>)
          
        </p>
      </div>
    </div>
  );
}

export default Activity;
