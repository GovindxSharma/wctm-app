
# 🎓 WCTM College App

A **cross-platform college management mobile application** built with **React Native, Expo Router, and TypeScript**, designed to streamline student, faculty, and admin interactions for **WCTM (World College of Technology and Management)**.

The app supports login and registration for students and faculty, profile dashboards, and navigation between multiple user-specific pages — all optimized for performance and responsive design.

---

## ✨ Features

✅ **Multi-Role System**

* Student, Faculty, and Admin login/register workflows
* Role-based page rendering

✅ **Profile Screens**

* Student and Faculty profile pages
* Admin dashboard with basic faculty management structure

✅ **Modern Navigation**

* Built using `expo-router` and `@react-navigation/native`
* Stack + Tab navigation for fluid screen switching

✅ **Responsive UI/UX**

* Styled with animations (`moti`, `react-native-animatable`)
* Font integration, splash screen, and icons for a clean native feel
* Optimized for Android, iOS, and Web

✅ **Mobile-Ready**

* Can run directly on device/emulator via Expo Go
* Designed with performance and clarity in mind

---

## 🗂️ Folder Structure

```
.
├── app/                         # All screen and route files (via expo-router)
│   ├── index.tsx                # Main route
│   ├── home.tsx                 # Common home page
│   ├── login.tsx                # Student/faculty login screen
│   ├── register.tsx             # Registration screen
│   ├── studentProfile.tsx       # Student dashboard
│   ├── facultyRegister.tsx      # Faculty-specific registration
│   ├── adminProfile.tsx         # Admin profile and control panel
│   └── pages/                   # (Optional) additional UI pages
├── assets/                      # Fonts and images
│   ├── fonts/
│   └── images/
├── app.json                     # Expo app configuration
├── eas.json                     # Expo Application Services (build profiles)
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies and scripts
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/GovindxSharma/wctm-app.git
cd wctm-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

Choose your platform:

```bash
npm run android     # For Android
npm run ios         # For iOS
npm run web         # To preview in browser
```

Or use:

```bash
npm start           # Launches Expo Dev Tools
```

Make sure to have Expo CLI installed globally:

```bash
npm install -g expo-cli
```

---

## 📦 Tech Stack

| Tech                  | Usage                                   |
| --------------------- | --------------------------------------- |
| **React Native**      | Core app framework                      |
| **Expo SDK 52**       | React Native bundling & dev environment |
| **expo-router**       | Navigation & routing                    |
| **TypeScript**        | Type-safe development                   |
| **Moti & Animatable** | Animations and transitions              |
| **React Navigation**  | Stack/tab navigators                    |
| **Expo Assets**       | Fonts, splash screen, status bar, etc.  |

---

## 📃 Description

**WCTM App** is a role-based mobile application designed to simplify campus operations digitally. Whether you're a student checking your profile, a faculty managing attendance, or an admin monitoring activity, this app offers a smooth, visually appealing interface powered by the latest React Native and Expo tools. It's structured to scale with additional features like notifications, chat, and database integration in the future.

---

