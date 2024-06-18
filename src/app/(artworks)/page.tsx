
import { Suspense } from "react";
import Art from "../_components/art";
import ArtList from "../_components/artslist";
import spinner from "../_components/spinner";
import Spinner from "../_components/spinner";

const ArtPage = ()=>{
    return (
      <main >
        <h1 className="text-4xl mb-5 text-accent-400 font-medium mt-2">Discover Artistic Inspiration at Artsy Gallery</h1>
        <p className="text-primary-200 text-lg mb-10 mt-2">Welcome to the Artsy Gallery, where creativity thrives and every piece tells a story. 
            Explore our diverse collection, from contemporary paintings to classical sculptures,
             each curated to inspire and evoke emotion. Whether youre a collector, an artist, or simply seeking beauty and reflection, the Artsy Gallery invites you to discover masterpieces that resonate with your soul.</p>
        <Suspense fallback={<Spinner/>}>
        <ArtList/>
        </Suspense>
      </main>
    );
  }
export default ArtPage