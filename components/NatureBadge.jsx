import { Badge } from '@chakra-ui/react'

const NatureBadge = ({ nature }) => {
  const colorMap = {
    'leader of the gang': 'red',
    'ninja investigator': 'green',
    'party going': 'orange',
    'lone tiger': 'black',
    'comfort connaisseur': 'blue',
    'busy gossip': 'pink'
  }
  const getColor = () => colorMap[nature]
  return (
    <Badge fontSize={15} variant={'solid'} colorScheme={getColor()}>
      {nature}
    </Badge>
  )
}
export default NatureBadge
