# WCTM College Management Application

A cross-platform mobile solution built with React Native, Expo Router, and TypeScript designed to streamline interactions between students, faculty, and administrative staff at World College of Technology and Management (WCTM).

---

## Architecture & Overview

WCTM College App provides a centralized portal for campus operations. It uses a file-based routing architecture powered by `expo-router`, ensuring performant, type-safe navigation across Android, iOS, and Web platforms. The modular project structure allows seamless scaling for future backend integrations such as automated attendance, notifications, and analytics.

---

## Key Features

### Role-Based Access Control (RBAC)

* Dedicated authentication and registration flows for Students, Faculty, and Administrators.
* Contextual route protection and dynamic dashboard rendering based on active role.

### Dashboard & Profile Management

* **Student Portal:** Profile overview, academic records, and personalized schedules.
* **Faculty Portal:** Instructor profile management, course overview, and student directory access.
* **Admin Console:** High-level administrative controls and faculty onboarding workflows.

### Performance & UI Architecture

* **File-Based Routing:** Deep linking and unified routing logic using `expo-router`.
* **Fluid Micro-interactions:** Smooth screen transitions and UI feedback powered by `moti` and `react-native-animatable`.
* **Cross-Platform Consistency:** Unified layout system optimized for Android, iOS, and mobile web browsers.

---

## Tech Stack

| Category | Technologies |
| --- | --- |
| **Core Framework** | React Native, React 18 |
| **Ecosystem & Build** | Expo (SDK 52), EAS (Expo Application Services) |
| **Language** | TypeScript |
| **Routing & Navigation** | Expo Router, React Navigation |
| **UI & Animations** | Moti, React Native Reanimated, React Native Animatable |
| **Styling & Assets** | Expo Font, Expo Splash Screen, Vector Icons |

---

## Project Structure

```text
.
├── app/                        # File-based routes and screen layouts
│   ├── index.tsx               # Entry point and initial route handler
│   ├── home.tsx                # Universal landing dashboard
│   ├── login.tsx               # Unified authentication screen
│   ├── register.tsx            # Student onboarding screen
│   ├── studentProfile.tsx      # Student management dashboard
│   ├── facultyRegister.tsx     # Faculty onboarding screen
│   ├── adminProfile.tsx        # Administrative management console
│   └── pages/                  # Nested operational and content views
├── assets/                     # Static resources (images, branding, custom fonts)
├── app.json                    # Expo application manifest
├── eas.json                    # Expo Application Services build configurations
├── tsconfig.json               # TypeScript compiler configuration
└── package.json                # Project dependencies and operational scripts

```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed on your machine:

* [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
* [Git](https://git-scm.com/)
* [Expo Go](https://expo.dev/go) application on your mobile device (for physical testing)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/GovindxSharma/wctm-app.git
cd wctm-app

```


2. **Install dependencies:**
```bash
npm install

```



### Development Server

Start the Expo development server:

```bash
npm start

```

Run target-specific platforms directly:

```bash
# Android emulator or connected device
npm run android

# iOS simulator (macOS required)
npm run ios

# Web browser preview
npm run web

```

---

## Roadmap

* [ ] REST API / Firebase backend integration
* [ ] Push notification services for campus-wide alerts
* [ ] Real-time attendance logging and reporting module
* [ ] Fee breakdown and online payment gateway integration

---

## Contributing

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/new-capability`).
3. Commit your changes (`git commit -m "feat: add campus notification system"`).
4. Push to the branch (`git push origin feature/new-capability`).
5. Open a Pull Request.

---

## License

This project is licensed under the terms of the MIT License.
