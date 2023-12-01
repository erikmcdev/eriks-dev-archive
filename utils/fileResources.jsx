import fs from 'fs'
import path from 'path'

const publicPath = path.join(process.cwd(), 'public')

const getFileNameByPosition = async position => {
  try {
    const files = await fs.promises.readdir(path.join(publicPath, 'models'))

    const fileName = files[(position % files.length) - 1]
    console.log(fileName)
    return fileName
  } catch (error) {
    console.error('Error reading files:', error)
    return null
  }
}

export const getFileNameByItem = async uuid => {
  const uuidSegment = uuid.split('-')[0]
  const decimalValue = parseInt(uuidSegment, 16)

  const fileName = await getFileNameByPosition(decimalValue)

  return fileName
}
