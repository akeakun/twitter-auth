import Image from 'next/image'
import image from "../../../public/twitter-login-page-img.jpg"

const ImageElement = () => {
    
  return (
    <div className='relative h-full'>
       <Image
        src={image}
        priority={true}
        fill
        alt={''}
        className=' object-cover'
        />
    </div>
  )
}

export default ImageElement