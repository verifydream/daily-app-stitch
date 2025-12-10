# Quick Start Guide

Get your React Native Expo app running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including React Native, Expo, and TypeScript.

## Step 2: Start Development Server

```bash
npm start
```

This will start the Expo development server and show a QR code.

## Step 3: Install Expo Go on Your Phone

### iOS
1. Open the App Store
2. Search for "Expo Go"
3. Install the app

### Android
1. Open the Google Play Store
2. Search for "Expo Go"
3. Install the app

## Step 4: Scan the QR Code

### iOS
1. Open the Camera app
2. Point at the QR code in your terminal
3. Tap the notification that appears
4. The app will load in Expo Go

### Android
1. Open the Expo Go app
2. Tap "Scan QR Code"
3. Point at the QR code in your terminal
4. The app will load automatically

## Troubleshooting

### "Unable to connect to dev server"
- Ensure your phone and computer are on the same Wi-Fi network
- Try running `npm start` with the tunnel option: `npm start --tunnel`

### "Module not found" errors
- Delete `node_modules/` folder
- Run `npm install` again

### App won't reload
- Shake your device to open the developer menu
- Tap "Reload"

## Next Steps

1. Open `App.tsx` in your code editor
2. Make a change (e.g., change the text)
3. Save the file
4. Watch the app update automatically!

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Basics](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

Happy coding! 🚀
