# myteam_members_ui
This is the UI part of the exercise

<img width="988" alt="Screenshot 2025-03-17 at 3 55 48 PM" src="https://github.com/user-attachments/assets/e107a0f0-6910-4c9b-a249-2da3421aac8c" />

<img width="737" alt="Screenshot 2025-03-17 at 3 56 11 PM" src="https://github.com/user-attachments/assets/47c0711e-c60e-45ea-ba50-808f8201575b" />

<img width="975" alt="Screenshot 2025-03-17 at 3 56 01 PM" src="https://github.com/user-attachments/assets/98c12ba8-4252-44d3-b3a0-b51b275552cc" />



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

2. **Install dependencies**:
    npm install
    or
    yarn

4. **(Optional) Configure a proxy**:
   If Django app runs at http://127.0.0.1:8000 and we want to call the API with relative paths (e.g. "/api/team_members/"), set the proxy in
   package.json:
   {
       "proxy": "http://127.0.0.1:8000"
   }
   
  Then you can restart your dev server after saving.

## Usage
1. **Start the Django server (in your Django project)**:
   python manage.py runserver

2. **Run the React development server**:
npm start
(By default, this starts at http://localhost:3000)

4. **Open your browser at http://localhost:3000**.

The List Page appears, showing existing team members.
Click + to add a new member.
Click any member to edit or delete them


## Project Structure
Simple Project Structure view -

<img width="607" alt="Screenshot 2025-03-23 at 1 39 14 AM" src="https://github.com/user-attachments/assets/3d250891-b959-4c68-99d5-09c11839e527" />

**TeamMemberList.jsx**: 
Fetches and displays the list of team members, shows the count, and handles navigation to “add” or “edit.”

**TeamMemberForm.jsx**: 
Handles creation (POST) or updating (PUT) of a member, as well as deletion (DELETE).


## API Endpoints

Assuming the Django REST API is running at http://127.0.0.1:8000/api/myteam_members/:

| Method     | Endpoint                  | Description                    |
|------------|---------------------------|--------------------------------|
| **GET**    | `/api/team_members/`     | List all team members          |
| **POST**   | `/api/team_members/`     | Create a new member            |
| **GET**    | `/api/team_members/<id>/`| Retrieve member with `<id>`    |
| **PUT / PATCH** | `/api/team_members/<id>/` | Update an existing member |
| **DELETE** | `/api/team_members/<id>/`| Delete a member                |


Ensure your Django side matches this path structure, or update the UI’s axios calls accordingly.





