import Spinner from "../_components/spinner"

const Loading = () => {
    return (
      <div className='grid items-center justify-center'>
  
          <Spinner/>
          <p className='text-xl text-primary-200'> Loading artwork...</p>
      </div>
    )
  }
  
  export default Loading