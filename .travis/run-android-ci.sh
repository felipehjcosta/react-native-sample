#!/bin/bash
set -e

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
detox build --configuration android.emu.release
detox test --configuration android.emu.release --cleanup