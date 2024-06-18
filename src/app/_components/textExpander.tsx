"use client"
import { useState } from 'react';
function TextExpander({ children }:{children:React.ReactNode}) {
  const [description, setDescription] = useState<Boolean>(false);

  if (typeof children !== 'string') {
    console.error('TextExpander children should be a string');
    return null;
  }
//   const displayText = isExpanded
//     ? children
//     : children.split(' ').slice(0, 10).join(' ') + '...';

  return (
    <span>
     
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setDescription(!description)}
      >
        {description?"Hidedescription":"Show description"}
        
      </button>
      {description? children:''}
    </span>
  );
}

export default TextExpander;