# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Docker.

## Features

- 🎨 **Modern Design**: Premium dark theme with glassmorphism effects and smooth animations
- 🔍 **Technology Filtering**: Click on any technology to filter projects that use it
- 📱 **Responsive**: Fully responsive design that works on all devices
- 📄 **CV Download**: Download resume with a single click
- 🐳 **Docker Ready**: Containerized for easy deployment
- ⚡ **Performance**: Optimized with Next.js 15 and React 18

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: CSS with Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio-Static
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Using Docker

1. Build the Docker image:
```bash
docker build -t portfolio-website .
```

2. Run the container:
```bash
docker run -p 3000:3000 portfolio-website
```

### Using Docker Compose

```bash
docker-compose up -d
```

To stop the container:
```bash
docker-compose down
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal information (name, email, social links)
- About me content
- Technologies
- Projects

### Add Your Profile Image

Replace `public/profile.jpg` with your own professional photo.

### Add Your Resume

Place your resume PDF as `public/resume.pdf`.

### Update Project Images

Add project screenshots to the `public/projects/` directory and update the image paths in `src/data/portfolio.ts`.

## Project Structure

```
Portfolio-Static/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Technologies.tsx # Technologies grid
│   │   └── Projects.tsx     # Projects with filtering
│   └── data/
│       └── portfolio.ts     # Portfolio data
├── public/
│   ├── profile.jpg          # Profile image
│   └── resume.pdf           # Resume file
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
