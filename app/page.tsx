import { Hero } from "@/components/hero"
import { InteractiveStats } from "@/components/interactive-stats"
import { Features } from "@/components/features"
import { HomepageGallery } from "@/components/homepage-gallery"
import { EnhancedDemo } from "@/components/enhanced-demo"
import { AniFloatingCharacter } from "@/components/ani-floating-character"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InteractiveStats />
      <Features />
      <HomepageGallery />
      <EnhancedDemo />

      <AniFloatingCharacter />
    </main>
  )
}
