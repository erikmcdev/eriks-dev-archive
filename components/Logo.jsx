import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import EyeIcon from './icons/EyeIcon'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  margin-top: 5px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <EyeIcon />
        <Text
          fontFamily={'Times New Roman Condensed Bold'}
          color={'whiteAlpha.900'}
          fontSize="25"
          ml={3}
          letterSpacing="1px"
          textAlign="left"
        >
          ERIKs
          <br />
          DEV/A
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
