import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, #015EBC00, #003C7A)',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 0px 4px rgba(152, 162, 179, 0.14)',
        'tab-shadow' : '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      },
      textInputHistorical: {
        'historical-text': 'text-[16px] text-neutral-100 rounded-none font-color:var(--mantine-color-white)	font-semibold'
      },
      colors: {
        custom: {
          blue: {
            10: '#F2F9FF',
            30: '#59ACFF',
            40: '#0072E5',
            60: '#006DB6',
            90: '#005FBF',
            100: '#00264C',
            500: '#53B7FF',
          },
          black: {
            0: '#FFFFFF',
            10: '#F2F4F7',
            50: '#D0D5DD',
            60: '#98A2B3',
            70: '#344054',
            100: '#222222',
          },
          gray: {
            500: '#667085',
            600: '#475467',
            700: '#344054',
            900: '#101828',            
          },
          sistem: {
            warning: '#F76527',
            error: '#EE2121',
            success: '#17B26A',
          },
        },
      },
    },
    headLine: 'font-size: 64px',
  },
  plugins: [],
}
export default config
