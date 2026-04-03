# Codemagic Setup Guide for TodoApp

## Quick Setup

### 1. Connect Your Repository
1. Go to [codemagic.io](https://codemagic.io)
2. Sign up/login with your Git provider (GitHub/GitLab/Bitbucket)
3. Select your `todo-app-main` repository

### 2. Configure Build Settings
1. Codemagic will automatically detect your `codemagic.yaml` file
2. The workflow is already configured to build Android APKs

### 3. Environment Variables (Optional - for signed APK)
If you want to create a signed APK, add these environment variables in Codemagic:

```
CM_KEYSTORE_PASSWORD: your_keystore_password
CM_KEY_ALIAS_PASSWORD: your_alias_password  
CM_KEY_ALIAS: your_key_alias
CM_KEYSTORE: base64_encoded_keystore_content
```

### 4. Build Types Available

#### Unsigned APK (Ready to use)
- Trigger: Push to `main` or `develop` branch
- Output: `app-release-unsigned.apk`
- Location: `platforms/android/app/build/outputs/apk/release/`

#### Signed APK (if keystore configured)
- Same trigger as above
- Output: `app-release.apk` (signed)
- Can be uploaded to Google Play Store

#### Debug APK
- Trigger: Push to `develop` branch  
- Output: `app-debug.apk`
- For testing purposes

## Current Workflow Triggers

### Main Workflow (build-android-release)
- **Events**: Push, Pull Request
- **Branches**: main, develop
- **Builds**: Release APK (unsigned by default)

### Development Workflow (development-build)  
- **Events**: Push only
- **Branches**: develop
- **Builds**: Debug APK

## After First Build

1. Download the APK from the "Artifacts" section in Codemagic
2. Install and test on your Android device
3. For production use, consider setting up app signing

## Troubleshooting

If build fails:
1. Check that all dependencies are in `package.json`
2. Ensure Cordova platforms are properly configured
3. Verify Android SDK compatibility (currently set to API 36)

## Next Steps

1. Push your code to trigger the first build
2. Test the downloaded APK
3. Consider setting up signed builds for distribution
