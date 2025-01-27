import { Bebas_Neue, Linefont } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        "xsm": '500px',
        "mdl": '900px',
        "lgx": '1180px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      spacing: {
        '41': '10.25rem',
        '42': '10.5rem',
        '43': '10.75rem',
        '66': '16.50rem',
        '68': '17rem',
        '70': '17.50rem',
        '76': '19rem',
        '88': '22rem',
        '90':'22.50rem',
        '101': '25rem',
        '104': '26rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
        '164': '41rem',
        '168': '42rem',
        '172': '43rem',
        '176': '44rem',
        '180': '45rem',
        '192': '48rem',
        '194': '48.5rem',
        '196': '49rem',
        '198': '49.5rem',
        '200': '50rem',
        '202': '50.5rem',
        '204': '51rem',
        '206': '51.5rem',
        '208': '52rem',
        '210': '52.5rem',
        '212': '53rem',
        '214': '53.5rem',
        '216': '54rem',
        '218': '54.5rem',
        '220': '55rem',
        '222': '55.5rem',
        '224': '56rem',
        '226': '56.5rem',
        '228': '57rem',
        '230': '57.5rem',
        '232': '58rem',
        '234': '58.5rem',
        '236': '59rem',
        '238': '59.5rem',
        '240': '60rem',
        '242': '60.5rem',
        '244': '61rem',
        '246': '61.5rem',
        '248': '62rem',
        '250': '62.5rem',
        '252': '63rem',
        '254': '63.5rem',
        '256': '64rem',
        '260': '65rem',
        '264': '66rem',
        '268': '67rem',
        '272': '68rem',
        '276': '69rem',
        '280': '70rem',
        '284': '71rem',
        '288': '72rem',
        '292': '73rem',
        '296': '74rem',
        '300': '75rem',
        '304': '76rem',
      },
      fontSize:{
        "xxs" : '0.60rem',
        '10xl': ['9rem', { lineHeight: '1.2' }],
        '11xl': ['10rem', { lineHeight: '1.2' }],
        '12xl': ['11rem', { lineHeight: '1.2' }],
        '13xl': ['12rem', { lineHeight: '1.2' }],
        '14xl': ['13rem', { lineHeight: '1.2' }],
        '15xl': ['14rem', { lineHeight: '1.2' }],
      },
      borderWidth: {
        '1': '1px',
        "3": "3px",
      },
      transitionDuration: {
        '800': '800ms',
        '850': '850ms',
        '890': '890ms',
        '900': '900ms',
      },
      fontFamily: {
        Bebas_Neue: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
