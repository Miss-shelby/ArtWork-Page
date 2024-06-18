import TextExpander from '@/app/_components/textExpander';
import { getArtsUrl } from '@/app/utils/api';
import Image from 'next/image';
import React from 'react'
type ArtParams = {
    artId: number;
  };
  
  type ArtData = {
    data: {
      title: string;
      image_id: string;
      description: string;
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
    
    const {title,image_id,description}=data.data;
  return (
    <div>
      <div className='flex-1 relative aspect-square'>
      <Image fill className='flex-1 border-r border-primary-800 object-contain' src={`${image_url}/${image_id}/full/843,/0/default.jpg`} alt='art-image'/>
      </div>
      <h2 className='text-accent-500 '>Title:{title}</h2>
      <p className='text-accent-500'>
        <TextExpander>{description}</TextExpander>
      </p>
    </div>
  )
}

export default ArtWork
