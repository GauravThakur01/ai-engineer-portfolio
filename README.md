# AI Engineer Portfolio - Gaurav Thakur

A modern, responsive portfolio website showcasing AI engineering expertise, built with Next.js 14, TypeScript, and cutting-edge web technologies.

## 🚀 Features

- **Modern Design**: Sleek, futuristic UI with glassmorphism effects
- **Responsive**: Optimized for all device sizes
- **Dark Mode Only**: Professional dark theme optimized for AI/tech content
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Elements**: Hover effects, micro-interactions
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Ready**: Meta tags and structured data
- **TypeScript**: Full type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Theme**: Next Themes

## 📂 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Innovation.tsx # Innovation pipeline
│   │   └── Contact.tsx    # Contact form
│   ├── ui/               # UI components
│   │   └── ParticleBackground.tsx
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── public/               # Static assets
└── ...config files
```

## 🎨 Design Features

### Visual Elements
- Gradient backgrounds and text
- Particle animation system
- Glassmorphism effects
- Cyber-grid patterns
- Animated blobs and shapes

### Animations
- Smooth scroll navigation
- Staggered component animations
- Hover and tap interactions
- Loading states and transitions
- Typewriter effects

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Sections

### Hero Section
- Personal introduction
- Animated tagline with typewriter effect
- Call-to-action buttons
- Social media links
- Professional profile image

### About Section
- Personal story and mission
- Core values and philosophy
- Performance metrics
- Professional background

### Skills Section
- Technical expertise categorized by domain
- AI/ML technologies
- Backend and frontend skills
- Cloud and DevOps tools
- Interactive skill cards with animations

### Projects Section
- Featured AI projects with detailed descriptions
- Real-time Voice Dispatch Assistant
- RAG-based Knowledge Chatbot
- AI-powered QA Automation System
- Additional project highlights

### Innovation Section
- Future research and development
- Autonomous agent systems
- Self-healing infrastructure
- Dynamic vector data curation
- Role-based AI access control

### Contact Section
- Interactive contact form
- Multiple communication channels
- Social media integration
- Availability status

## 🔧 Customization

### Colors and Themes
Edit `tailwind.config.js` to customize:
- Color palette
- Gradient definitions
- Animation timings
- Spacing and typography

### Content Updates
Update content in respective component files:
- Personal information in `Hero.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Innovation roadmap in `Innovation.tsx`

### Animations
Modify animations in:
- `globals.css` for CSS animations
- Component files for Framer Motion animations
- `tailwind.config.js` for animation utilities

## 📱 Performance

- Lighthouse Score: 90+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading
- Minimal bundle size

## 🌐 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended - free hosting)
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel (Free)

#### Method 1: GitHub Integration (Recommended)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Engineer Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy" (auto-configured for Next.js)

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npx vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? ai-engineer-portfolio
# - Directory? ./
# - Override settings? No

# Deploy to production
npx vercel --prod
```

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables (if needed)
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 📄 License

This project is for portfolio purposes. Feel free to use as inspiration for your own portfolio.

## 📞 Contact

- **Email**: GauravThakur2350@gmail.com
- **Phone**: +91 7650941605
- **LinkedIn**: [linkedin.com/in/gaurav-thakur-91509923a](https://www.linkedin.com/in/gaurav-thakur-91509923a)
- **GitHub**: [github.com/gauravThakur01](https://github.com/gauravThakur01)

---

Built with ❤️ and cutting-edge technology by Gaurav Thakur
