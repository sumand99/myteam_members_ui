# myteam_members_ui
This is the UI part of the exercise
# Team Member Management UI

This is a simple **React** UI for managing team members (list, add, edit, delete). It interacts with a **Django** + **Django Rest Framework** backend providing the necessary APIs.

---

## Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [Customization](#customization)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

The **Team Member Management** UI allows users to:
- View a list of team members, including their contact details and role.
- Add a new team member (with name, email, phone, and role).
- Edit an existing team member’s details.
- Delete a team member (if the user is an admin).

This front end is built with **React**, communicating with a Django REST API at `http://127.0.0.1:8000/api/team_members/`.

---

## Key Features

- **Single Page Application** using React Router for navigation.
- **CRUD Operations** (Create, Read, Update, Delete) via Axios calls to the Django API.
- **Role-Based Display**: Shows **(admin)** label when the role is set to `admin`.
- **Form Validation** (basic required fields).

---

## Prerequisites

- **Node.js** (>= 14.x recommended)
- **npm** or **yarn** (for managing React dependencies)
- **Django** backend running on `http://127.0.0.1:8000` (optional proxy setup available)

---

## Installation

1. **Clone** this repository:
   ```bash
   git clone https://github.com/<your-username>/myteam_members_ui.git
   cd myteam_members_ui

2. npm install

3. If your Django app runs at http://127.0.0.1:8000 and you want to call the API with relative paths (e.g. "/api/team_members/"), set the proxy in package.json: {
  "proxy": "http://127.0.0.1:8000"
}
Then restart your dev server after saving.

