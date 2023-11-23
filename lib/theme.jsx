import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bgGradient: 'linear(to-br, #191911, #909090)'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)' /* Semi-transparent black overlay */,
      zindex: 1000 /* Ensure the overlay is above other elements */
    },
    '.image-slider-container': {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    '.image': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 1s ease-in-out'
    },
    '.visible': {
      opacity: 1
    },
    '.hidden': {
      opacity: 0
    }
  }
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#d4d0cb70',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'home-title': {
        fontFamily: 'Times New Roman Condensed Bold',
        marginTop: 3,
        marginBottom: 4,
        lineHeight: 0.6,
        textAlign: 'left'
      }
    }
  },
  Link: {
    baseStyle: {
      color: '#3bcb86',
      textUnderlineOffset: 3
    }
  }
}

const fonts = {
  heading: "'Instrument Serif'"
}

const colors = {
  grassTeal: '#88ccca',
  codecSecondary: '#274851',
  codecGlow: '#3bcb86',
  codecHighlight: '#121010'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
