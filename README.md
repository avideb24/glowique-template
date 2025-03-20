# Glowique Cosmetics Template  
**Developed by Vida Technology Ltd.**  

Thank you for purchasing the **Glowique Cosmetics Template**! This file provides a quick start guide.

## Live Demo
[View Live Site](https://bunch-cosmetics-template.vercel.app/)

## Installation
1. Ensure you have **Node.js** installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/avideb24/bunch---cosmetics-template.git
   ```
3. Navigate into the project folder:
   ```bash
   cd Glowique---cosmetics-template
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure
```
/public/DOCUMENTATION   # Full documentation
/src/
  ├── /app/             # Next.js pages
  ├── /components/      # UI components
  ├── /assets/          # Icons and images
  ├── /styles/          # Global CSS & Tailwind styles
  ├── /utils/           # Data / Helper functions
  ├── /config/          # Configuration files
/LICENSE.txt            # License file
/README.md              # Quick setup guide
```

## Customization
### Changing Colors and Fonts
Modify Tailwind configuration in `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
        Monomakh: ['Monomakh', 'sans-serif'],
      },
      colors: {
        primary: "#ff3d71",
        secondary: "",
        light: "#fff",
        dark: "#1a1a1a",
      },
    },
  },
};
```
Change fonts in `globals.css`:
```css
body {
  font-family: "Jost", serif;
}
```

### Editing Content
All content files are located in `components/` and `pages/` directories. Modify them as needed.

## Deployment
For production:
```bash
npm run build
npm start
```
For Vercel:
```bash
vercel deploy
```
For Netlify:
```bash
netlify deploy
```

## Asset Licensing
For licensing details of the fonts, images, and icons used in this project, please refer to the `LICENSE.txt` file.


## Support
For any issues, contact support at:
📧 Email: support@vida.com.bd
📞 Phone: +8801641443111
🌍 Website: www.vida.com.bd

