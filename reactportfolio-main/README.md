# React Portfolio

A modern, responsive developer portfolio application built with **React** and **Vite**.

---

##  Setup & Run Instructions

Follow these steps to get the development environment running locally.

### 1. Clone or Extract the Repository

```bash
cd reactportfolio-d805c00ff0c70594b12cbb67fc8e0d624cc6a2b1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will launch locally, typically at:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

##  Component Tree & State Lifting Decisions

### Component Architecture

```text
App (Router / State Container)
│
├── Layout
│   ├── Nav
│   └── [Page Content]
│       ├── Home (Hero, Intro)
│       ├── About (Bio, Skill components)
│       ├── Projects (List of Project components, Filtering UI)
│       ├── ProjectDetail (Deep-dive dynamic view by ID/slug)
│       └── Contact (Form, Social Links)
│
└── NotFound (Fallback 404 Route)
```

### State-Lifting Decisions

**Global Navigation / Theme State:**
Lifted to `App.jsx` (or managed through Context/Router) so that active routes, responsive drawer toggles, and theme persistence remain synchronized across the navigation bar and child views.

**Filtered Projects State:**
The active filter category and project query states are lifted to the `Projects` page component so child filter toggles and `Project` card subcomponents stay in sync without redundant re-renders.

**Shared Data Sources:**
Centralized static data (`src/info/list.js`) is imported into parent page components (`About`, `Projects`) and passed down to modular display components (`Skill`, `Project`) as explicit props to keep child components pure and presentation-focused.

---

##  Implemented `useEffect` Hooks

### Dynamic Document Title & Meta Updates

**Purpose:**
Synchronizes `document.title` and page metadata whenever the user navigates between pages (`Home`, `About`, `Projects`, `ProjectDetail`).

**Why Necessary:**
Keeps the browser tab label accurate and enhances accessibility and SEO based on the active route or loaded project item.

### Project Item Lookup & Fallback Handling

**Component:** `ProjectDetail`

**Purpose:**
Observes the route parameter (e.g., `:id`) to find and set the active project data from `src/info/list.js`.

**Why Necessary:**

* Handles deep-linking directly to a project URL.
* Populates the detail view on route change.
* Handles invalid project IDs.
* Triggers redirects or 404 views when an invalid project ID is queried.

### Window Resize & Event Listeners

**Components:** `Nav` / `Layout`

**Purpose:**
Attaches event listeners for screen resizing or escape-key detection to automatically close mobile drawer menus or modals.

**Why Necessary:**

* Prevents UI inconsistencies across breakpoints.
* Handles mobile drawer behavior.
* Ensures event listeners are properly removed in the hook's cleanup function to prevent memory leaks.

---

##  Summary

This portfolio follows a modular React architecture with:

* React + Vite
* Component-based design
* Centralized project data
* Lifted state for shared UI behavior
* Dynamic routing
* Responsive navigation
* `useEffect` for side effects and event handling
* Project detail pages with dynamic route parameters
* Proper cleanup of event listeners

---

##  AI Disclosure

AI was used to assist with the **English wording, documentation, and README formatting** of this project.

The **core project work, implementation, logic, functionality, and main development were not made by AI** and were developed by the author.
