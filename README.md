# VGOil & Gasline (Website + Android App Starter)

This repository now includes:

- A **website** for diesel doorstep orders with delivery rule validation.
- An **Android app starter** with Google Maps and delivery charge calculation.

## Business Rules Implemented

- Minimum order quantity: **100 liters**
- Delivery charge:
  - **0 to 5 km**: Free
  - **Beyond 5 km**: **₹100/km** (rounded up to the next full km)

## Web App

Location: `web/`

### Run locally

```bash
cd web
python3 -m http.server 8080
```

Open: `http://localhost:8080`

### Google Maps setup

1. Create a Google Maps JavaScript API key.
2. In `web/index.html`, replace `YOUR_GOOGLE_MAPS_API_KEY`.
3. Optional: update depot coordinates in `web/app.js`.

## Android App

Location: `android-app/`

### Open in Android Studio

1. Open the `android-app` folder.
2. Let Gradle sync.
3. Add your Maps key in `app/src/main/AndroidManifest.xml` replacing `YOUR_GOOGLE_MAPS_ANDROID_API_KEY`.
4. Run on emulator/device.

> Note: this is a starter project structure; you can extend it with authentication, payments, order tracking, and backend APIs.
