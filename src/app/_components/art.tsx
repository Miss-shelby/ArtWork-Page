import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import { UsersIcon } from "@heroicons/react/24/solid";
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
   
  return (
    <Link href={`${art.id}`}>
    <div className="flex border-primary-800 border ">
      <div className="w-[300px] h-[300px] relative">
      <Image
         src={`${image_url}/${art.image_id}/full/843,/0/default.jpg`}
        fill
        layout='fill'
        alt='art_image'
        className=" border-r border-primary-800 object-cover"
      />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl mb-3">
           {art.title}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{art.title}</span> guests
            </p>
          </div>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <a
            href={`${art.id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
           Learn More &rarr;
          </a>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Art