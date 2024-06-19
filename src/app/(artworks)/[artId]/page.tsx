import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { FaTextWidth } from "react-icons/fa6";
import TextExpander from '@/app/_components/textExpander';
import { getArtsUrl } from '@/app/utils/api';
import Image from 'next/image';
import React from 'react'
type ArtParams = {
    params: {
      artId: number;
    };
  };
  
  type ArtData = {
    data: {
      title: string;
      image_id: string;
      description: string;
      alt_text:string;
      date_display:string;
      place_of_origin:string;
      medium_display:string;
    };
    config: {
      iiif_url: string;
    };
  };
const ArtWork = async ({params}:ArtParams) => {
    const response  = await fetch(`https://api.artic.edu/api/v1/artworks/${params.artId}`)
    const data: ArtData= await response.json()
    const image_url :string = data.config.iiif_url;
    console.log('data from artwork', data);
    console.log(image_url);
    
    const {title,image_id,description,alt_text,date_display,place_of_origin,medium_display}=data.data;
return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image    src={`${image_url}/${image_id}/full/843,/0/default.jpg`} alt='art-image' fill className="object-cover" />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-2xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
           {medium_display}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
           </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
              <span className="font-bold">{title}</span>{" "}
               
              </span>
            </li>
            <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Displayed on
                <span className="font-bold"> {date_display} </span> at {place_of_origin}
              </span>
            </li>
            <li className="flex gap-3 items-center">
            <FaTextWidth className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                {alt_text}
                
              </span>
              
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Explore more
        </h2>
      </div>
    </div>
  );
}

export default ArtWork
