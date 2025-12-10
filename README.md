# Daily App Stitch

A React Native Expo Go starter kit template for rapid mobile app development.

## 📱 Features

- ✅ **React Native & Expo Go** - Latest stable versions
- ✅ **TypeScript** - Full TypeScript support for type safety
- ✅ **Safe Area Context** - Built-in notch and status bar handling
- ✅ **Component Architecture** - Organized folder structure
- ✅ **Hot Reload** - Fast development with instant updates
- ✅ **Cross-Platform** - iOS, Android, and Web support

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation

1. Clone this repository:
```bash
git clone https://github.com/verifydream/daily-app-stitch.git
cd daily-app-stitch
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with Expo Go app on your phone:
   - **iOS**: Open Camera app and scan the QR code
   - **Android**: Open Expo Go app and scan the QR code

## 📁 Project Structure

```
daily-app-stitch/
├── assets/              # Images, icons, and other static assets
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── src/
│   ├── components/      # Reusable UI components
│   │   └── WelcomeCard.tsx
│   ├── screens/         # App screens/pages
│   │   └── HomeScreen.tsx
│   └── utils/          # Utility functions and helpers
├── App.tsx             # Main app entry point
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Open in Android emulator
- `npm run ios` - Open in iOS simulator (macOS only)
- `npm run web` - Open in web browser

## 📝 Development Guide

### Adding a New Screen

1. Create a new file in `src/screens/`:
```typescript
// src/screens/AboutScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

2. Import and use it in `App.tsx`

### Creating Reusable Components

Create components in `src/components/` directory:
```typescript
// src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
```

### Customizing Assets

Replace the placeholder images in the `assets/` directory:
- **icon.png** - App icon (1024x1024 recommended)
- **splash.png** - Splash screen
- **adaptive-icon.png** - Android adaptive icon
- **favicon.png** - Web favicon

## 🔧 Configuration

### App Configuration (app.json)

Edit `app.json` to customize:
- App name and slug
- Bundle identifiers
- Orientation settings
- Icon and splash screen paths

### TypeScript Configuration

TypeScript is pre-configured with strict mode. Adjust `tsconfig.json` as needed for your project requirements.

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💡 Next Steps

Now that you have the starter kit running:

1. Explore the code in `App.tsx` and `src/` directory
2. Modify the HomeScreen to match your app's needs
3. Add navigation (consider [React Navigation](https://reactnavigation.org/))
4. Add state management (consider [Redux](https://redux.js.org/) or [Context API](https://react.dev/reference/react/useContext))
5. Integrate APIs and backend services
6. Add testing with [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
7. Build and deploy your app

Happy coding! 🎉