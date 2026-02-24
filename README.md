# PAI Signature Builder

Static HTML tool for generating `Public` and `Inner` email signatures and copying email-safe HTML into Gmail.

## Features
- Live signature preview
- `Public` / `Inner` signature variants
- Photo upload with crop + compression
- Copy-to-clipboard for rich HTML
- Lightweight password gate before access

## Usage
1. Open `index.html` in browser
2. Enter password
3. Fill required fields
4. Click **Скопіювати підпис**
5. Paste into Gmail signature settings

## Project structure
- `index.html` - UI markup
- `styles.css` - UI styles
- `app.js` - signature generator logic
- `assets/PAI_Logo_Big-White.svg` - header logo
- `assets/PAI_Logo-Big-Black.svg` - auth/logo usage
- `assets/Dviika_Logo-Big-Black.svg` - footer "Made by" logo
- `assets/Favicon.png` - site favicon

## Security note
The password gate uses client-side hash verification and should be treated as basic access friction, not strong security.

## License
MIT (see `LICENSE`)
