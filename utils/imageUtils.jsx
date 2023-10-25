import housePicture1 from '../public/images/houses/tokyo1.jpeg'
import housePicture2 from '../public/images/houses/tokyo2.jpeg'
import housePicture3 from '../public/images/houses/tokyo3.jpeg'
import housePicture4 from '../public/images/houses/tokyo4.jpeg'
import housePicture5 from '../public/images/houses/tokyo5.jpeg'
import housePicture6 from '../public/images/houses/tokyo6.jpeg'

export function getImageObject(id) {
  const decimal = parseInt(id, 16)
  switch (decimal % 6) {
    case 1:
      return housePicture1
    case 2:
      return housePicture2
    case 3:
      return housePicture3
    case 4:
      return housePicture4
    case 5:
      return housePicture5
    case 6:
      return housePicture6
    default:
      return housePicture1
  }
}
