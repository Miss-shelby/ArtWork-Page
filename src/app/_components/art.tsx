import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type artTypes = {
    art: {
      title: string;
      id: number;
      description: string;
      image_id: string;
    };
    image_url:string
};
const Art = ({art,image_url}:artTypes) => {
    // console.log(image_url,art.image_id);
    console.log(typeof art.image_id);
    
  return (
    <Link href={`${art.id}`}>
     <div className=' border-primary-800 border '>
        <div className=' relative '>
            <Image alt='art_image'quality={100}
             layout='responsive' 
             width={300}
             height={300} className=' border-r border-primary-800 object-cover'
            src={`${image_url}/${art.image_id}/full/843,/0/default.jpg`}/>
        </div>
        <h4 className='text-accent-500 mt-2 font-medium text-2xl'>{art.title}</h4>
       
    </div>
    </Link>
   
  )
}

export default Art