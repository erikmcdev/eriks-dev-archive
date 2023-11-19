import Image from 'next/image'
import { getImageObject } from '../utils/imageUtils'

const HouseImage = ({ id }) => {
  const imageObject = getImageObject(id)

  return (
    <div>
      <Image
        src={imageObject}
        alt={id}
        className="grid-item-thumbnail"
        placeholder="blur"
        height={400}
      />
    </div>
  )
}

export default HouseImage
