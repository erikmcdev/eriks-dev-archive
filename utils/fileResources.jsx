import fs from 'fs'
import path from 'path'

const publicPath = path.join(process.cwd(), 'public')

async function getFileNameByPosition(position, folder) {
  try {
    const files = await fs.promises.readdir(path.join(publicPath, folder))
    const fileName = files[position % files.length]
    return fileName
  } catch (error) {
    console.error('Error reading files:', error)
    return null
  }
}

export async function getModelFileNameByUUID(uuid) {
  const uuidSegment = uuid.split('-')[2]
  const decimalValue = parseInt(uuidSegment, 16)

  const fileName = await getFileNameByPosition(decimalValue, 'models')

  return fileName
}

export async function getImageFileNameByUUID(uuid) {
  const uuidSegment = uuid.split('-')[2]
  const decimalValue = parseInt(uuidSegment, 16)

  const fileName = await getFileNameByPosition(decimalValue, 'images/houses')

  return fileName
}
