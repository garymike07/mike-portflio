# Mike's Portfolio Website

## Project Overview

This is my personal portfolio website showcasing my skills, projects, and professional experience. The site is built with modern web technologies and designed to provide a clean, professional presentation of my work.

## Technologies Used

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library for building user interfaces
- **shadcn-ui** - Component library for consistent design
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Development

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone https://github.com/garymike07/mike-portflio.git

# Step 2: Navigate to the project directory
cd mike-portflio

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` with hot reloading enabled.

## Development Workflow

### Making Changes

You can edit this project using several methods:

**Local Development**
- Clone the repository to your local machine
- Use your preferred IDE (VS Code, WebStorm, etc.)
- Make changes and commit them
- Push changes to GitHub

**GitHub Web Interface**
- Navigate to any file in the repository
- Click the "Edit" button (pencil icon)
- Make your changes directly in the browser
- Commit changes with a descriptive message

**GitHub Codespaces**
- Go to the repository main page
- Click "Code" → "Codespaces" → "New codespace"
- Edit files in the cloud-based VS Code environment
- Commit and push changes directly from Codespaces

### Branching Strategy

When adding new features or making significant changes:
1. Create a new branch: `git checkout -b feature-name`
2. Make your changes
3. Commit with descriptive messages: `git commit -m "Add new feature"`
4. Push to GitHub: `git push origin feature-name`
5. Create a pull request for review

## Deployment

### Build for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

The site can be deployed to various platforms:

- **Netlify** - Connect your GitHub repo for automatic deployments
- **Vercel** - Zero-config deployment for React apps
- **GitHub Pages** - Free hosting for public repositories
- **Custom Server** - Upload the `dist/` directory to any web server

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configuration:

```env
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=your-email@domain.com
```

## Project Structure

```
mike-portflio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
├── dist/              # Production build
└── README.md          # This file
```

## Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Open an issue for bugs or feature requests
2. Submit a pull request with improvements
3. Share feedback on the design or functionality

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This portfolio was custom-built without the use of AI-powered website builders or automated tools, ensuring complete control over the design, functionality, and user experience.