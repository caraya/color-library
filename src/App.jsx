// src/App.jsx
import React, { useState } from 'react';

function App() {
  // Hardcoded color data extracted from the provided Colors.txt file.
  // Each object represents a category of colors, containing its name and an array of color items.
  // Each color item has a name, an OKLCH value, and an RGB hex value.
  const colorData = [
    {
      category: 'Whites',
      colors: [
        { name: 'White', oklch: 'oklch(1 0 326)', rgb: '#FFFFFF' },
        { name: 'Alabaster', oklch: 'oklch(0.99 0.01 88.7)', rgb: '#fefaf0' },
        { name: 'Snow', oklch: 'oklch(0.99 0.01 190)', rgb: '#f4fefd' },
        { name: 'Ivory', oklch: 'oklch(0.98 0.02 89.2)', rgb: '#fef7e5' },
        { name: 'Cream', oklch: 'oklch(0.98 0.04 101)', rgb: '#fffbda' },
        { name: 'Eggshell', oklch: 'oklch(0.98 0.03 96.4)', rgb: '#fef9e3' },
        { name: 'Cotton', oklch: 'oklch(0.99 0.01 116)', rgb: '#fbfcf7' },
        { name: 'Chiffon', oklch: 'oklch(0.98 0.01 107)', rgb: '#fafaf1' },
        { name: 'Salt', oklch: 'oklch(0.96 0.01 39.4)', rgb: '#f8efec' },
        { name: 'Lace', oklch: 'oklch(0.97 0.01 74.4)', rgb: '#faf3ea' },
        { name: 'Coconut', oklch: 'oklch(0.97 0.02 60.8)', rgb: '#fff1e6' },
        { name: 'Linen', oklch: 'oklch(0.94 0.03 93.5)', rgb: '#f2ebd3' },
        { name: 'Bone', oklch: 'oklch(0.9 0.03 87.9)', rgb: '#e7dfcc' },
        { name: 'Porcelain', oklch: 'oklch(1 0 106)', rgb: '#fffffc' },
        { name: 'Parchment', oklch: 'oklch(0.97 0.03 94.9)', rgb: '#fcf6df' },
        { name: 'Rice', oklch: 'oklch(0.98 0.01 76.6)', rgb: '#fbf6ef' },
      ],
    },
    {
      category: 'Blues',
      colors: [
        { name: 'blue', oklch: 'oklch(0.56 0.18 254)', rgb: '#0074d9' },
        { name: 'navy', oklch: 'oklch(0.24 0.07 252)', rgb: '#001f3f' },
        { name: 'aqua', oklch: 'oklch(0.85 0.1 225)', rgb: '#7fdbff' },
        { name: 'sky', oklch: 'oklch(0.73 0.16 238)', rgb: '#00b2ff' },
        { name: 'teal', oklch: 'oklch(0.77 0.12 195)', rgb: '#39cccc' },
        { name: 'slate', oklch: 'oklch(0.58 0.02 264)', rgb: '#757b87' },
        { name: 'indigo', oklch: 'oklch(0.29 0.11 285)', rgb: '#281e5d' },
        { name: 'cobalt', oklch: 'oklch(0.42 0.21 265)', rgb: '#1438bd' },
        { name: 'ocean', oklch: 'oklch(0.44 0.07 199)', rgb: '#026063' },
        { name: 'peacock', oklch: 'oklch(0.27 0.05 217)', rgb: '#002d37' },
        { name: 'azure', oklch: 'oklch(0.36 0.2 268)', rgb: '#1621a6' },
        { name: 'cerulean', oklch: 'oklch(0.62 0.12 231)', rgb: '#0592c2' },
        { name: 'lapis', oklch: 'oklch(0.42 0.22 269)', rgb: '#2632c2' },
        { name: 'spruce', oklch: 'oklch(0.35 0.03 240)', rgb: '#2c3e4b' },
        { name: 'stone', oklch: 'oklch(0.56 0.05 238)', rgb: '#59788d' },
        { name: 'aegean', oklch: 'oklch(0.38 0.08 252)', rgb: '#1e456e' },
        { name: 'berry', oklch: 'oklch(0.29 0.14 280)', rgb: '#24146f' },
        { name: 'denim', oklch: 'oklch(0.24 0.06 268)', rgb: '#141e3c' },
        { name: 'admiral', oklch: 'oklch(0.31 0.2 265)', rgb: '#061094' },
        { name: 'sapphire', oklch: 'oklch(0.71 0.09 208)', rgb: '#52b2c0' },
        { name: 'arctic', oklch: 'oklch(0.89 0.1 208)', rgb: '#82edfd' },
      ],
    },
    {
      category: 'Browns',
      colors: [
        { name: 'brown', oklch: 'oklch(0.22 0.03 66.9)', rgb: '#24180b' },
        { name: 'tan', oklch: 'oklch(0.89 0.06 97.4)', rgb: '#e5dbac' },
        { name: 'beige', oklch: 'oklch(0.89 0.09 96.3)', rgb: '#ecdc99' },
        { name: 'macaroon', oklch: 'oklch(0.9 0.13 96.8)', rgb: '#f7df75' },
        { name: 'hazelwood', oklch: 'oklch(0.79 0.06 94.2)', rgb: '#c9bc8e' },
        { name: 'granola', oklch: 'oklch(0.79 0.12 91.1)', rgb: '#d6b75a' },
        { name: 'oat', oklch: 'oklch(0.84 0.08 91.8)', rgb: '#dec98a' },
        { name: 'eggnog', oklch: 'oklch(0.92 0.09 90.4)', rgb: '#fbe29d' },
        { name: 'fawn', oklch: 'oklch(0.74 0.11 90.6)', rgb: '#c7a951' },
        { name: 'sugarcookie', oklch: 'oklch(0.93 0.08 102)', rgb: '#f3ebad' },
        { name: 'sand', oklch: 'oklch(0.79 0.11 90.5)', rgb: '#d7b963' },
        { name: 'sepia', oklch: 'oklch(0.8 0.09 74.7)', rgb: '#e3b678' },
        { name: 'latte', oklch: 'oklch(0.83 0.1 80.7)', rgb: '#e9c17b' },
        { name: 'oyster', oklch: 'oklch(0.87 0.07 103)', rgb: '#dcd69f' },
        { name: 'biscotti', oklch: 'oklch(0.83 0.12 92.3)', rgb: '#e3c565' },
        { name: 'parmesean', oklch: 'oklch(0.93 0.11 96.1)', rgb: '#fee993' },
        { name: 'hazelnut', oklch: 'oklch(0.73 0.1 91.5)', rgb: '#bda55d' },
        { name: 'sandcastle', oklch: 'oklch(0.82 0.09 90.3)', rgb: '#dbc27d' },
        { name: 'buttermilk', oklch: 'oklch(0.95 0.08 96.7)', rgb: '#fdefb2' },
        { name: 'sanddollar', oklch: 'oklch(0.92 0.06 103)', rgb: '#ebe7b9' },
        { name: 'shortbread', oklch: 'oklch(0.93 0.11 96.1)', rgb: '#fce791' },
      ],
    },
    {
      category: 'Yellows',
      colors: [
        { name: 'yellow', oklch: 'oklch(0.9 0.19 97.4)', rgb: '#ffdc00' },
        { name: 'canary', oklch: 'oklch(0.85 0.17 90.4)', rgb: '#fac801' },
        { name: 'gold', oklch: 'oklch(0.79 0.17 73.3)', rgb: '#f9a602' },
        { name: 'daffodil', oklch: 'oklch(0.94 0.12 101)', rgb: '#feee88' },
        { name: 'flaxen', oklch: 'oklch(0.78 0.12 90.9)', rgb: '#d5b65a' },
        { name: 'butter', oklch: 'oklch(0.91 0.18 99.7)', rgb: '#fee226' },
        { name: 'lemon', oklch: 'oklch(0.96 0.18 114)', rgb: '#effd5f' },
        { name: 'mustard', oklch: 'oklch(0.8 0.15 87.8)', rgb: '#e9b829' },
        { name: 'corn', oklch: 'oklch(0.84 0.18 101)', rgb: '#e4cd04' },
        { name: 'medallion', oklch: 'oklch(0.78 0.16 87.6)', rgb: '#e4b103' },
        { name: 'dandelion', oklch: 'oklch(0.87 0.17 91)', rgb: '#fdce2a' },
        { name: 'bumblebee', oklch: 'oklch(0.91 0.19 101)', rgb: '#fce206' },
        { name: 'banana', oklch: 'oklch(0.96 0.1 103)', rgb: '#fcf4a3' },
        { name: 'butterscotch', oklch: 'oklch(0.83 0.17 84.9)', rgb: '#fabd04' },
        { name: 'dijon', oklch: 'oklch(0.69 0.14 85)', rgb: '#c29200' },
        { name: 'honey', oklch: 'oklch(0.75 0.16 69.6)', rgb: '#ec9707' },
        { name: 'blonde', oklch: 'oklch(0.93 0.14 101)', rgb: '#fdeb75' },
        { name: 'pineapple', oklch: 'oklch(0.91 0.18 99.8)', rgb: '#ffe327' },
        { name: 'tuscansun', oklch: 'oklch(0.87 0.17 92.8)', rgb: '#fcd12a' },
      ],
    },
    {
      category: 'Oranges',
      colors: [
        { name: 'orange', oklch: 'oklch(0.74 0.18 53.5)', rgb: '#ff851b' },
        { name: 'tangerine', oklch: 'oklch(0.73 0.17 51.9)', rgb: '#f98228' },
        { name: 'merigold', oklch: 'oklch(0.81 0.16 74.9)', rgb: '#fdae1d' },
        { name: 'cider', oklch: 'oklch(0.59 0.13 56.2)', rgb: '#b66827' },
        { name: 'rust', oklch: 'oklch(0.46 0.12 49.7)', rgb: '#8c4005' },
        { name: 'ginger', oklch: 'oklch(0.57 0.15 49.7)', rgb: '#bc5703' },
        { name: 'tiger', oklch: 'oklch(0.7 0.2 45.6)', rgb: '#fb6b02' },
        { name: 'bronze', oklch: 'oklch(0.56 0.14 50.9)', rgb: '#b2560c' },
        { name: 'cantaloupe', oklch: 'oklch(0.79 0.13 47.7)', rgb: '#fca172' },
        { name: 'apricot', oklch: 'oklch(0.71 0.17 57.1)', rgb: '#ed810f' },
        { name: 'carrot', oklch: 'oklch(0.68 0.18 49.1)', rgb: '#ed7116' },
        { name: 'squash', oklch: 'oklch(0.6 0.16 48.5)', rgb: '#c95c09' },
        { name: 'spice', oklch: 'oklch(0.42 0.11 52.4)', rgb: '#7a3a03' },
        { name: 'marmalade', oklch: 'oklch(0.62 0.16 49.6)', rgb: '#d16102' },
        { name: 'amber', oklch: 'oklch(0.44 0.13 42.7)', rgb: '#893201' },
        { name: 'sandstone', oklch: 'oklch(0.65 0.15 52)', rgb: '#d57128' },
        { name: 'yam', oklch: 'oklch(0.6 0.17 46.7)', rgb: '#cc5801' },
      ],
    },
    {
      category: 'Reds',
      colors: [
        { name: 'red', oklch: 'oklch(0.66 0.23 28.4)', rgb: '#ff4136' },
        { name: 'cherry', oklch: 'oklch(0.44 0.17 30.4)', rgb: '#9a0f02' },
        { name: 'rose', oklch: 'oklch(0.59 0.22 26.5)', rgb: '#e2252a' },
        { name: 'jam', oklch: 'oklch(0.32 0.11 28.5)', rgb: '#600f0b' },
        { name: 'merlot', oklch: 'oklch(0.32 0.08 26.9)', rgb: '#541f1b' },
        { name: 'garnet', oklch: 'oklch(0.31 0.12 30)', rgb: '#5f0a04' },
        { name: 'crimson', oklch: 'oklch(0.5 0.2 29.2)', rgb: '#b8100a' },
        { name: 'ruby', oklch: 'oklch(0.41 0.17 29.2)', rgb: '#900503' },
        { name: 'scarlet', oklch: 'oklch(0.42 0.16 29.1)', rgb: '#910d08' },
        { name: 'redwine', oklch: 'oklch(0.27 0.1 29)', rgb: '#4c0805' },
        { name: 'redapple', oklch: 'oklch(0.47 0.18 30.2)', rgb: '#a91b0d' },
        { name: 'mahogany', oklch: 'oklch(0.25 0.08 28.6)', rgb: '#420d09' },
        { name: 'blood', oklch: 'oklch(0.35 0.13 30.2)', rgb: '#710c04' },
        { name: 'sangria', oklch: 'oklch(0.33 0.1 28.1)', rgb: '#5f1914' },
        { name: 'currant', oklch: 'oklch(0.33 0.12 29.2)', rgb: '#670c07' },
        { name: 'blush', oklch: 'oklch(0.57 0.14 27.7)', rgb: '#bb544a' },
        { name: 'candy', oklch: 'oklch(0.55 0.22 30.2)', rgb: '#d31603' },
        { name: 'lipstick', oklch: 'oklch(0.44 0.17 30.4)', rgb: '#9b0f02' },
      ],
    },
    {
      category: 'Pinks',
      colors: [
        { name: 'pink', oklch: 'oklch(0.79 0.13 346)', rgb: '#f69acd' },
        { name: 'fuchsia', oklch: 'oklch(0.65 0.27 341)', rgb: '#f012be' },
        { name: 'punch', oklch: 'oklch(0.67 0.2 10)', rgb: '#f25278' },
        { name: 'watermelon', oklch: 'oklch(0.75 0.15 7.5)', rgb: '#fe809c' },
        { name: 'flamingo', oklch: 'oklch(0.81 0.11 5.11)', rgb: '#fda4b8' },
        { name: 'rouge', oklch: 'oklch(0.7 0.17 7.51)', rgb: '#f26c8c' },
        { name: 'salmon', oklch: 'oklch(0.82 0.1 28.6)', rgb: '#fdab9f' },
        { name: 'coral', oklch: 'oklch(0.73 0.16 31.2)', rgb: '#fe7d67' },
        { name: 'peach', oklch: 'oklch(0.77 0.13 30.2)', rgb: '#fb9483' },
        { name: 'strawberry', oklch: 'oklch(0.67 0.21 24.5)', rgb: '#fc4c4e' },
        { name: 'rosewood', oklch: 'oklch(0.51 0.13 22.7)', rgb: '#a04242' },
        { name: 'lemonade', oklch: 'oklch(0.85 0.08 1.31)', rgb: '#fabacb' },
        { name: 'taffy', oklch: 'oklch(0.76 0.16 348)', rgb: '#fa85c4' },
        { name: 'bubblegum', oklch: 'oklch(0.71 0.21 355)', rgb: '#fd5ca8' },
        { name: 'balletslipper', oklch: 'oklch(0.79 0.12 354)', rgb: '#f69abf' },
        { name: 'crepe', oklch: 'oklch(0.84 0.07 1.58)', rgb: '#f1b7c6' },
        { name: 'maroon', oklch: 'oklch(0.41 0.15 358)', rgb: '#85144b' },
        { name: 'hotpink', oklch: 'oklch(0.66 0.26 356)', rgb: '#ff1696' },
      ],
    },
    {
      category: 'Purples',
      colors: [
        { name: 'purple', oklch: 'oklch(0.55 0.26 321)', rgb: '#b10dc9' },
        { name: 'mauve', oklch: 'oklch(0.49 0.11 318)', rgb: '#7a4a89' },
        { name: 'violet', oklch: 'oklch(0.41 0.2 315)', rgb: '#710193' },
        { name: 'boysenberry', oklch: 'oklch(0.33 0.13 357)', rgb: '#630536' },
        { name: 'lavender', oklch: 'oklch(0.8 0.14 319)', rgb: '#e3a0f6' },
        { name: 'plum', oklch: 'oklch(0.34 0.1 360)', rgb: '#601a36' },
        { name: 'lilac', oklch: 'oklch(0.63 0.18 319)', rgb: '#b65fcd' },
        { name: 'periwinkle', oklch: 'oklch(0.73 0.1 314)', rgb: '#be93d4' },
        { name: 'eggplant', oklch: 'oklch(0.25 0.07 327)', rgb: '#311431' },
        { name: 'iris', oklch: 'oklch(0.6 0.15 307)', rgb: '#9866c5' },
        { name: 'heather', oklch: 'oklch(0.64 0.1 307)', rgb: '#9b7cb9' },
        { name: 'amethyst', oklch: 'oklch(0.62 0.2 306)', rgb: '#a45de4' },
        { name: 'raisin', oklch: 'oklch(0.2 0.06 358)', rgb: '#290916' },
        { name: 'orchid', oklch: 'oklch(0.66 0.2 306)', rgb: '#af69ee' },
        { name: 'mulberry', oklch: 'oklch(0.27 0.11 4.92)', rgb: '#4d0220' },
      ],
    },
    {
      category: 'Greens',
      colors: [
        { name: 'green', oklch: 'oklch(0.74 0.22 144)', rgb: '#2ecc40' },
        { name: 'chartreuse', oklch: 'oklch(0.91 0.23 129)', rgb: '#b0fd38' },
        { name: 'juniper', oklch: 'oklch(0.41 0.1 129)', rgb: '#395311' },
        { name: 'sage', oklch: 'oklch(0.61 0.06 138)', rgb: '#728c69' },
        { name: 'lime', oklch: 'oklch(0.87 0.25 149)', rgb: '#01ff70' },
        { name: 'fern', oklch: 'oklch(0.72 0.15 145)', rgb: '#5dbc64' },
        { name: 'olive', oklch: 'oklch(0.76 0.13 128)', rgb: '#98bf64' },
        { name: 'emerald', oklch: 'oklch(0.55 0.18 143)', rgb: '#038911' },
        { name: 'pear', oklch: 'oklch(0.71 0.18 132)', rgb: '#74b62d' },
        { name: 'moss', oklch: 'oklch(0.49 0.12 132)', rgb: '#476d1e' },
        { name: 'shamrock', oklch: 'oklch(0.65 0.22 143)', rgb: '#03ac13' },
        { name: 'seafoam', oklch: 'oklch(0.84 0.18 156)', rgb: '#3cec96' },
        { name: 'pine', oklch: 'oklch(0.39 0.09 141)', rgb: '#24501e' },
        { name: 'parakeet', oklch: 'oklch(0.7 0.21 147)', rgb: '#02c04a' },
        { name: 'mint', oklch: 'oklch(0.88 0.1 162)', rgb: '#98ecc3' },
        { name: 'seaweed', oklch: 'oklch(0.38 0.07 132)', rgb: '#354b21' },
        { name: 'pickle', oklch: 'oklch(0.55 0.11 131)', rgb: '#5a7d36' },
        { name: 'pistachio', oklch: 'oklch(0.84 0.04 161)', rgb: '#b2d3c1' },
        { name: 'basil', oklch: 'oklch(0.45 0.1 142)', rgb: '#32622d' },
        { name: 'crocodile', oklch: 'oklch(0.55 0.1 129)', rgb: '#5f7c3a' },
      ],
    },
    {
      category: 'Greys',
      colors: [
        { name: 'grey', oklch: 'oklch(0.74 0 0)', rgb: '#aaaaaa' },
        { name: 'shadow', oklch: 'oklch(0.34 0 0)', rgb: '#373737' },
        { name: 'graphite', oklch: 'oklch(0.44 0.03 319)', rgb: '#584d5b' },
        { name: 'iron', oklch: 'oklch(0.31 0.01 338)', rgb: '#332d31' },
        { name: 'pewter', oklch: 'oklch(0.53 0.04 289)', rgb: '#6a6880' },
        { name: 'cloud', oklch: 'oklch(0.83 0.02 286)', rgb: '#c5c5d0' },
        { name: 'silver', oklch: 'oklch(0.9 0 0)', rgb: '#dddddd' },
        { name: 'smoke', oklch: 'oklch(0.45 0.02 311)', rgb: '#59515f' },
        { name: 'anchor', oklch: 'oklch(0.38 0.02 286)', rgb: '#42424c' },
        { name: 'ash', oklch: 'oklch(0.43 0.01 9.96)', rgb: '#554c4d' },
        { name: 'porpoise', oklch: 'oklch(0.42 0.03 288)', rgb: '#4d4c5c' },
        { name: 'dove', oklch: 'oklch(0.56 0.03 320)', rgb: '#7c6e7f' },
        { name: 'fog', oklch: 'oklch(0.48 0.02 326)', rgb: '#655965' },
        { name: 'flint', oklch: 'oklch(0.6 0.05 286)', rgb: '#7d7c9c' },
        { name: 'pebble', oklch: 'oklch(0.32 0 0)', rgb: '#333333' },
        { name: 'lead', oklch: 'oklch(0.37 0.03 288)', rgb: '#403f4e' },
        { name: 'coin', oklch: 'oklch(0.68 0.03 288)', rgb: '#9897a9' },
        { name: 'fossil', oklch: 'oklch(0.56 0.01 338)', rgb: '#787276' },
      ],
    },
    {
      category: 'Blacks',
      colors: [
        { name: 'Black', oklch: 'oklch(0.18 0 0)', rgb: '#111111' },
        { name: 'Ebony', oklch: 'oklch(0.11 0.02 71.8)', rgb: '#080401' },
        { name: 'Crow', oklch: 'oklch(0.25 0.01 67.5)', rgb: '#25221F' },
        { name: 'Charcoal', oklch: 'oklch(0.25 0.01 315)', rgb: '#222023' },
      ],
    },
    {
      category: 'MOPAR Colors',
      colors: [
        { name: 'Hemi Orange', oklch: 'oklch(0.7 0.17 48.1)', rgb: '#F3782B' },
        { name: 'Plum Crazy Purple', oklch: 'oklch(0.45 0.25 294)', rgb: '#6600CC' },
        { name: 'Black Cherry', oklch: 'oklch(0.33 0.07 352)', rgb: '#52253A' },
        { name: 'Panther Pink', oklch: 'oklch(0.58 0.19 340)', rgb: '#BE439D' },
        { name: 'Green Go', oklch: 'oklch(0.61 0.15 148)', rgb: '#339A4B' },
        { name: 'Sublime Green', oklch: 'oklch(0.83 0.2 129)', rgb: '#a0e03a' },
        { name: 'Go Mango', oklch: 'oklch(0.62 0.17 28.2)', rgb: '#DA5246' },
        { name: 'Bright Green', oklch: 'oklch(0.88 0.28 138)', rgb: '#66ff00' },
        { name: 'Top Banana', oklch: 'oklch(0.93 0.17 103)', rgb: '#ffed4d' },
        { name: 'Citron Yella', oklch: 'oklch(0.7 0.15 114)', rgb: '#9fa91f' },
        { name: 'Rebecca Purple', oklch: 'oklch(0.44 0.16 303)', rgb: '#663399' },
      ],
    },
  ];

  // State to control which details element is currently open.
  // By default, the first category is open.
  const [openCategory, setOpenCategory] = useState(colorData[0].category);
  const [copiedValue, setCopiedValue] = useState('');

  // Function to handle the toggle of a details element.
  // This function now explicitly prevents the default browser behavior
  // and manages the 'open' state through React.
  const handleToggle = (event, category) => {
    event.preventDefault(); // Prevent the default details toggle behavior
    setOpenCategory(prev => prev === category ? null : category);
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => setCopiedValue(''), 2000); // Reset after 2 seconds
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Color Palette</h1>

      {/* Map through each color category to render a details element */}
      {colorData.map((category) => (
        <details
          key={category.category}
          // The 'open' attribute controls the collapsed/expanded state.
          // It's true if the current category matches the openCategory state.
          open={category.category === openCategory}
          // The onToggle event is removed from <details> as we control it via <summary> onClick
          className="bg-white border border-gray-200 rounded-xl shadow-md mb-4 overflow-hidden"
        >
          {/* Summary element acts as the clickable header for the details block */}
          <summary
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-t-xl"
            onClick={(e) => handleToggle(e, category.category)} // Handle click to toggle state
          >
            <h2 className="text-2xl font-semibold text-gray-700">{category.category}</h2>
            {/* Plus/Minus icon for visual indication of expand/collapse state */}
            <span className="text-gray-500 text-2xl">
              {category.category === openCategory ? '−' : '+'}
            </span>
          </summary>

          {/* Grid to display individual color items within the expanded details block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {/* Map through each color in the current category */}
            {category.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200"
              >
                {/* Color swatch box */}
                <div
                  className="w-full h-24 rounded-t-lg"
                  style={{ backgroundColor: color.rgb }}
                ></div>
                {/* Color information (name and hex code) */}
                <div className="p-3 text-center w-full">
                  <p className="font-medium text-gray-800 text-lg">{color.name}</p>
                  <p
                    className="text-gray-600 text-sm font-mono cursor-pointer"
                    onClick={() => handleCopy(color.rgb)}
                  >
                    {copiedValue === color.rgb ? 'Copied!' : color.rgb}
                  </p>
                  {/* Display OKLCH value */}
                  <p
                    className="text-gray-600 text-sm font-mono cursor-pointer"
                    onClick={() => handleCopy(color.oklch)}
                  >
                    {copiedValue === color.oklch ? 'Copied!' : color.oklch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export default App;