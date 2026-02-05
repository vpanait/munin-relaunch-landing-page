# Hero Component Variations

This project includes three different Hero component variations inspired by Apollo's website design:

## 1. Hero.tsx (Current - Image Background)
- Clean, modern design with static image background
- Two-column layout with content and image
- Best for: Fast loading, SEO-friendly, mobile-optimized

## 2. HeroVideo.tsx (Video Background)
- Full-screen video background similar to Apollo's website
- Centered content layout
- Includes scroll indicator animation
- **Requires video files**: `/public/hero-video.mp4` and `/public/hero-video.webm`

### Video Requirements:
- **Format**: MP4 (primary) and WebM (fallback)
- **Resolution**: 1920x1080 minimum, 4K preferred
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Optimize for web (under 10MB recommended)
- **Content**: Professional financial/business scenes, abstract patterns, or cityscapes
- **Audio**: None (muted autoplay)

### Recommended Video Content:
- Financial district cityscapes
- Abstract geometric patterns
- Professional office environments
- Market data visualizations
- Modern architecture

## 3. HeroAnimated.tsx (CSS Animation Background)
- Pure CSS animations with floating geometric shapes
- No external files required
- Best performance and accessibility
- Similar visual impact to video but lighter weight

## Usage Instructions

To switch between Hero versions, update your main page component:

```tsx
// For image background (current)
import { Hero } from "@/components/Hero";

// For video background
import { HeroVideo } from "@/components/HeroVideo";

// For animated background
import { HeroAnimated } from "@/components/HeroAnimated";
```

## Video File Setup

1. Add your video files to the `/public` directory:
   - `hero-video.mp4` (primary format)
   - `hero-video.webm` (fallback format)

2. Ensure videos are optimized for web:
   - Compress using tools like HandBrake or FFmpeg
   - Use H.264 codec for MP4
   - Use VP9 codec for WebM

3. Test on different devices and browsers for compatibility

## Performance Considerations

- **HeroVideo**: Best visual impact but requires video files and more bandwidth
- **HeroAnimated**: Best performance, no external files, works offline
- **Hero**: Balanced approach with static image

Choose based on your priorities: visual impact vs. performance vs. simplicity.
