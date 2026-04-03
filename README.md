# Cordova Todo App

A modern todo application built with React and Apache Cordova for cross-platform mobile development.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Persistent storage using localStorage
- ✅ Responsive design for mobile devices
- ✅ Real-time statistics (total, active, completed)
- ✅ Clear completed todos
- ✅ Modern UI with smooth animations
- ✅ Cross-platform support (Android, iOS)

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Webpack 5
- **Mobile Framework**: Apache Cordova
- **Styling**: CSS3 with responsive design
- **Package Manager**: npm
- **CI/CD**: CodeMagic

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Cordova platforms

```bash
# For Android
npx cordova platform add android

# For iOS (macOS only)
npx cordova platform add ios
```

### 4. Add required plugins

```bash
npx cordova plugin add cordova-plugin-device
npx cordova plugin add cordova-plugin-dialogs
npx cordova plugin add cordova-plugin-whitelist
```

## Development

### Running in Development Mode

```bash
npm start
```

This will start the webpack dev server on `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `www` directory.

### Building Mobile Apps

#### Android

```bash
# Build debug APK
npm run build && npx cordova build android --debug

# Build release APK
npm run build && npx cordova build android --release

# Run on connected device/emulator
npm run run:android
```

#### iOS (macOS only)

```bash
# Build iOS app
npm run build && npx cordova build ios --release

# Run on connected device/simulator
npm run run:ios
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build React app for production
- `npm run build:cordova` - Build React app and Cordova project
- `npm run run:android` - Build and run on Android
- `npm run run:ios` - Build and run on iOS
- `npm run prepare` - Prepare Cordova platforms and plugins

## Project Structure

```
todo-app/
├── src/                    # React source code
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   ├── index.html         # HTML template
│   └── styles.css         # Application styles
├── www/                   # Cordova web assets (generated)
├── platforms/             # Platform-specific code
├── plugins/               # Cordova plugins
├── config.xml             # Cordova configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Dependencies and scripts
└── .codemagic.yaml       # CI/CD configuration
```

## CodeMagic CI/CD

This project is configured for automatic builds using CodeMagic CI/CD. The `.codemagic.yaml` file contains the configuration for:

- **Android APK builds** - Production and debug versions
- **iOS builds** - When building on macOS
- **Development builds** - For feature branches

### Setting up CodeMagic

1. Connect your repository to CodeMagic
2. Configure environment variables if needed
3. Enable automatic builds for your branches
4. Download artifacts from the CodeMagic dashboard

## Deployment

### Android

1. Build the release APK: `npm run build && npx cordova build android --release`
2. Sign the APK with your keystore
3. Upload to Google Play Store or distribute directly

### iOS

1. Build the iOS app: `npm run build && npx cordova build ios --release`
2. Open in Xcode: `open platforms/ios/TodoApp.xcworkspace`
3. Archive and submit to App Store

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Cordova build fails**
   - Ensure all platforms are added: `npx cordova platform ls`
   - Update Cordova: `npm install -g cordova`
   - Clean and rebuild: `npx cordova clean && npx cordova build`

2. **React build issues**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check webpack configuration

3. **Android build issues**
   - Ensure Android SDK is installed
   - Check `ANDROID_HOME` environment variable
   - Update Gradle wrapper if needed

4. **iOS build issues**
   - Ensure Xcode command line tools are installed
   - Update CocoaPods: `cd platforms/ios && pod install`

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Support

For support and questions:

- Create an issue in the repository
- Check the [Cordova documentation](https://cordova.apache.org/docs/en/latest/)
- Check the [React documentation](https://reactjs.org/docs/)
