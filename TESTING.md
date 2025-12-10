# Testing Guide

This guide helps you add testing to your React Native Expo app.

## Setting Up Tests

### Install Testing Dependencies

```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

### Configure Jest

Add to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  }
}
```

## Writing Tests

### Component Test Example

Create `src/components/__tests__/WelcomeCard.test.tsx`:

```typescript
import React from 'react';
import { render } from '@testing-library/react-native';
import WelcomeCard from '../WelcomeCard';

describe('WelcomeCard', () => {
  it('renders title correctly', () => {
    const { getByText } = render(
      <WelcomeCard title="Test Title" description="Test Description" />
    );
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders description correctly', () => {
    const { getByText } = render(
      <WelcomeCard title="Test Title" description="Test Description" />
    );
    expect(getByText('Test Description')).toBeTruthy();
  });
});
```

### Utility Function Test Example

Create `src/utils/__tests__/helpers.test.ts`:

```typescript
import { formatDate, truncateString, generateId } from '../helpers';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      expect(formatted).toContain('January');
      expect(formatted).toContain('15');
      expect(formatted).toContain('2024');
    });
  });

  describe('truncateString', () => {
    it('truncates long strings', () => {
      const result = truncateString('This is a very long string', 10);
      expect(result).toBe('This is...');
    });

    it('does not truncate short strings', () => {
      const result = truncateString('Short', 10);
      expect(result).toBe('Short');
    });
  });

  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });
  });
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Best Practices

1. **Test Behavior, Not Implementation**
   - Focus on what the component does, not how it does it

2. **Keep Tests Simple**
   - One test per behavior
   - Clear test names

3. **Use Testing Library Queries**
   - Prefer `getByText`, `getByRole` over `getByTestId`
   - Write tests that resemble how users interact

4. **Mock External Dependencies**
   - Mock API calls
   - Mock navigation
   - Mock heavy modules

## Resources

- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
