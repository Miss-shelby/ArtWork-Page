"use client"
import { useState } from 'react';
function TextExpander({ children }:{children:React.ReactNode}) {
  const [description, setDescription] = useState<boolean>(false);
  return (
    <span>
     
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setDescription(!description)}
      >
        {description? "Hidedescription":"Show description"}
        
      </button>
      {description? children : " "}
    </span>
  );
}

export default TextExpander;