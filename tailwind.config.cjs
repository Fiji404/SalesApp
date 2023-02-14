/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                primary: '#000',
                accent: '#d8d8d8',
            },
            layout: {
                'auto-fit': "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"
            }
        },
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            heading: ['Merriweather', 'sans-serif'],
        },
    },
};
