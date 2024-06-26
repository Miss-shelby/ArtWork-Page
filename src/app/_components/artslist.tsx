import React from 'react'
import { getArtsUrl } from '../utils/api'
import Art from './art'
type ArtTypes = {
      title: string;
      id: number;
      description: string;
      image_id: string;
};
type ApiResponse = {
  config: {
    iiif_url: string;
  };
  data: ArtTypes[];
};
const ArtList = async () => {
    const response  = await fetch(`${getArtsUrl}`)
    const data:ApiResponse  = await response.json()
    const image_url :string = data.config.iiif_url;
    // console.log(data);
    console.log(image_url);
    
    const artsArray = data.data;
   
  return (
    <div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {artsArray.map((art: ArtTypes) => (
       <Art key={art.id} art={art} image_url={image_url}/>
      ))}
    </div>
  </div>
  )
}

export default ArtList
