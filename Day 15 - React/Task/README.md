# Project Setup

## Prerequisites

- **Node.js** and **npm** (or **yarn**) installed on your system.
- **PowerShell** (for Windows users).

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   ```
2.  **Navigate to the project directory:**
      
   ```bash
   cd <project-name>
   ```
3. **Run the PowerShell script:**
   ```bash 
   .\run.ps1
   ```
This script will install the necessary dependencies using fnm (Node.js version manager) and npm.

## Development
### Start the JSON server:
Open a terminal in the project directory and run:

   ```bash
   json-server --watch "src\data\db.json"
   ```
This will start a local server to serve your movie data from the db.json file.

### Start the development server:
Open another terminal in the project directory and run:
```bash
npm run dev
```
This will start the development server, allowing you to view and interact with your movies website.
