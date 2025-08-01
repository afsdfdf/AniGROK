import { Hero } from "@/components/hero"
import { InteractiveStats } from "@/components/interactive-stats"
import { Features } from "@/components/features"
import { HomepageGallery } from "@/components/homepage-gallery"
import { EnhancedDemo } from "@/components/enhanced-demo"
import { CommunityShowcase } from "@/components/community-showcase"
import { TechHighlights } from "@/components/tech-highlights"
import { AniFloatingCharacter } from "@/components/ani-floating-character"
import { Roadmap } from "@/components/roadmap"
import { Stats } from "@/components/stats"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Main landing area with primary CTA */}
      <Hero />
      
      {/* Interactive Stats - Show platform vitality and engagement */}
      <InteractiveStats />
      
      {/* Features - Core platform capabilities and value propositions */}
      <Features />
      
      {/* Demo Section - Interactive experience for user engagement */}
      <EnhancedDemo />
      
      {/* Gallery - Showcase AI generated content and inspire users */}
      <HomepageGallery />
      
      {/* Community Showcase - Social proof and user success stories */}
      <CommunityShowcase />
      
      {/* Technology Highlights - Technical credibility and innovation */}
      <TechHighlights />
      
      {/* Platform Stats - Detailed technical metrics and performance */}
      <Stats />
      
      {/* Roadmap - Future development and vision */}
      <Roadmap />

      {/* Floating Ani Character - Always available assistant for help */}
      <AniFloatingCharacter />
    </main>
  )
}
