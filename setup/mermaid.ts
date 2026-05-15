import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      fontFamily: 'Campton, sans-serif',
      fontSize: '16px',

      // Neutral gray palette that works on both light (#F9F8F6) and dark (#1a1a1a) backgrounds
      primaryColor: '#6b6b6b',
      primaryTextColor: '#ffffff',
      primaryBorderColor: '#888888',
      lineColor: '#999999',
      secondaryColor: '#555555',
      tertiaryColor: '#777777',
      textColor: '#ffffff',
      mainBkg: '#6b6b6b',
    },
  }
})
