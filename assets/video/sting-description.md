# Laika Media Sting Animation

## 3-Frame Glitch Sting Specification

### Frame Layout
- **Total Size**: 3 × 1920 × 1080 (3 frames side by side)
- **Individual Frame Size**: 1920 × 1080
- **Format**: PNG with transparency support

### Frame Breakdown

#### Frame 1 (33ms) - Cyan Channel Offset
- **Effect**: Full-width cyan channel offset +2px right
- **Background**: Black (#000000)
- **Laika Bot**: Centered, normal colors
- **Text**: "Laika Dynamics" in Space Grotesk 700, 64px, white
- **Position**: Center of frame

#### Frame 2 (33ms) - Magenta Channel Offset  
- **Effect**: Magenta channel offset -2px left
- **Background**: Black (#000000)
- **Laika Bot**: Centered, normal colors
- **Text**: "Laika Dynamics" in Space Grotesk 700, 64px, white
- **Position**: Center of frame

#### Frame 3 (33ms) - Normal Display
- **Effect**: Normal Laika Bot with title text
- **Background**: Black (#000000)
- **Laika Bot**: Centered, full brand colors
- **Text**: "Laika Dynamics" in Space Grotesk 700, 64px, white
- **Position**: Center of frame

### After Effects Usage
- Import as sprite sheet
- Use CC Force Motion Blur to smooth transitions
- Set frame rate to 30fps
- Each frame displays for 1 frame (33ms at 30fps)

### Export Settings
- **Resolution**: 1920×1080 (1440p base at 2×)
- **Format**: PNG with alpha channel
- **Color Space**: sRGB
- **Compression**: Lossless

### File Location
`assets/video/sting.png` 