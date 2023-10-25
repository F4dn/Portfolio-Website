import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'indigo-start': 'hsla(271, 100%, 50%, 1)',
        'indigo-end': 'hsla(294, 100%, 50%, 1)',
      },
      animation : {
        slideDown : 'slide-down 300ms ease-out forwards'
      },
      keyframes : {
       slidedown :{
         '0%' : {opacity : '0' , transform : 'translateY(-3rem)' }, 
         '100%' : {opacity : '100%' , tranform : 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}
export default config