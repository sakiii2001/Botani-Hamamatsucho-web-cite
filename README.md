# BOTANI 浜松町店 - Shisha Bar Web Application

Modern, responsive web application for BOTANI Shisha Bar in Hamamatsucho, Tokyo. Built with Next.js 15, TypeScript, and Supabase for dynamic content management.

## 🌟 Features

### 🍺 Dynamic Menu System
- **Real-time Supabase Integration**: Menu data is fetched dynamically from Supabase database
- **Intelligent Fallbacks**: If Supabase is unavailable, the app displays comprehensive fallback menus
- **Multi-category Support**:
  - **Drinks**: Beer, Whiskey, Cocktails, Wine, Champagne, Soft Drinks
  - **Shisha Flavors**: Fruit, Tea, Sweet, Spice categories with 50+ flavors
  - **System Pricing**: Charges, Shisha rates, and options with real-time pricing

### 🌐 Internationalization (i18n)
- **Bilingual Support**: Japanese (primary) and English
- **Context-aware Translation**: Smart translation system that handles both UI text and menu items
- **Dynamic Language Switching**: Users can switch languages seamlessly
- **Mobile-responsive Language Selector**: Available on all device sizes

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme Support**: Built with next-themes for theme switching
- **Radix UI Components**: Accessible, customizable component library
- **Tailwind CSS**: Utility-first styling with custom design system
- **Smooth Animations**: Enhanced user experience with transitions and hover effects

### 🏪 Business Features
- **Store Information**: Complete business details, location, hours
- **Reservation System**: Multiple booking options (Phone, Instagram DM, LINE)
- **Interactive Modals**: Detailed menu viewing with dynamic data loading
- **Google Maps Integration**: Direct link to store location
- **Social Media Integration**: Instagram and LINE contact options

### 🔧 Technical Architecture

#### Frontend Stack
- **Next.js 15**: React framework with App Router
- **TypeScript**: Full type safety throughout the application
- **React 18**: Latest React features with concurrent rendering
- **Tailwind CSS 4**: Modern utility-first CSS framework

#### Database & Backend
- **Supabase**: PostgreSQL database with real-time capabilities
- **Database Schema**: 
  - `categories` table for menu organization
  - `products` table for menu items with pricing
  - Type-safe database interactions with generated types

#### State Management
- **React Context**: Language context for internationalization
- **React Hooks**: useState, useEffect for local state management
- **Async Data Fetching**: Promise-based data loading with error handling

#### Performance & SEO
- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Static Generation**: Fast page loads with pre-built pages
- **Vercel Analytics**: Built-in performance monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Supabase account and project (optional - fallback data available)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd BOTANI-WEB-CITE
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Schema

### Supabase Tables

#### Categories Table
```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL CHECK (type IN ('drink', 'flavor', 'shisha')),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Products Table
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  price INTEGER,
  description TEXT,
  type VARCHAR NOT NULL CHECK (type IN ('drink', 'flavor', 'shisha')),
  category_id UUID REFERENCES categories(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📱 Key Components

### Menu System (`/lib/menu.ts`)
- **getDrinkMenu()**: Fetches drink categories and items from Supabase
- **getFlavorMenu()**: Retrieves shisha flavor categories 
- **getShishaMenu()**: Gets system pricing and shisha options
- **Fallback Data**: Comprehensive fallback menus for offline functionality

### Menu Modal (`/components/menu-modal.tsx`)
- Dynamic modal component for displaying detailed menus
- Real-time data loading with loading states
- Error handling with user-friendly messages
- Responsive design for all screen sizes

### Language System (`/contexts/language-context.tsx`)
- Context-based i18n implementation
- Supports Japanese and English translations
- Dynamic translation of menu items
- Persistent language preferences

## 🎯 Dynamic Features

### Real-time Price Updates
The homepage displays live pricing data fetched from Supabase:
- **Drink Previews**: Shows starting prices for alcohol, soft drinks, and champagne
- **System Pricing**: Displays current rates for ALL TIME, BAR USE, shisha rentals
- **Automatic Fallbacks**: If data is unavailable, shows fallback pricing

### Smart Translation System
The application intelligently translates:
- **UI Elements**: All interface text based on selected language
- **Menu Items**: Dynamic translation of product names from Japanese to English
- **System Messages**: Loading states, errors, and notifications

### Responsive Behavior
- **Mobile-first Design**: Optimized for mobile devices
- **Adaptive Layouts**: Different layouts for desktop, tablet, and mobile
- **Touch-friendly Interface**: Large touch targets and intuitive navigation

## 🛠️ Development

### Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── page.js            # Homepage with dynamic menu integration
│   ├── layout.tsx         # Root layout with theme provider
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui base components
│   ├── menu-modal.tsx    # Dynamic menu modal
│   └── language-selector.tsx
├── contexts/             # React contexts
│   └── language-context.tsx
├── lib/                  # Utility functions
│   ├── menu.ts          # Menu data fetching logic
│   ├── supabase.ts      # Supabase client configuration
│   └── translations.ts  # i18n translations
└── types/               # TypeScript type definitions
    └── database.types.ts # Generated Supabase types
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing Supabase Connection
Visit `/test-supabase` to verify database connectivity and configuration.

## 🌍 Deployment

The application is optimized for deployment on Vercel:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add Supabase credentials in Vercel dashboard
3. **Deploy**: Automatic deployments on every push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
```

## 📞 Business Information

**BOTANI 浜松町店**
- **Address**: 〒105-0013 東京都港区浜松町１丁目２４−５ロマネBLDG 3F
- **Phone**: [Contact information in app]
- **Instagram**: @shishabar_botani_hamamatsucho
- **LINE ID**: @950sfthr

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for BOTANI Shisha Bar. All rights reserved.

## 🔧 Technical Notes

### Supabase Integration
- Uses `@supabase/supabase-js` v2.57.0 for database operations
- Implements Row Level Security (RLS) for data protection  
- Real-time subscriptions ready for live menu updates

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for menu modals
- Efficient data fetching with Promise.all for parallel requests
- Fallback data prevents empty states during network issues

### Accessibility Features
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Semantic HTML structure

---

Built with ❤️ for BOTANI Shisha Bar using modern web technologies.