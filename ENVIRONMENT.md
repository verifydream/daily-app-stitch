# Environment Setup

This file contains environment-specific configuration.

## Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```bash
# API Configuration
API_URL=https://api.example.com
API_KEY=your_api_key_here

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_DEBUG_MODE=false
```

## Using Environment Variables

To use environment variables in your Expo app:

1. Install `expo-constants`:
```bash
npm install expo-constants
```

2. Add configuration to `app.json`:
```json
{
  "expo": {
    "extra": {
      "apiUrl": process.env.API_URL,
      "apiKey": process.env.API_KEY
    }
  }
}
```

3. Access in your code:
```typescript
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl;
```

## Platform-Specific Configuration

Different configurations can be set for iOS, Android, and Web in `app.json`:

```json
{
  "expo": {
    "ios": {
      // iOS-specific config
    },
    "android": {
      // Android-specific config
    },
    "web": {
      // Web-specific config
    }
  }
}
```

## Development vs Production

Consider using different environment files:
- `.env.development`
- `.env.production`

And load them based on the build environment.
