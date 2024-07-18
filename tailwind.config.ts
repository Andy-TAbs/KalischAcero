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
      },
      spacing: {
        '41': '10.25rem',
        '42': '10.5rem',
        '43': '10.75rem',
        '104': '26rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
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
        '256': '64rem'
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
