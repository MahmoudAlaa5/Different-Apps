# Image Slider

A responsive, interactive image slider with smooth transitions and keyboard navigation.

## Features

- **Manual Navigation**: Click left/right arrow buttons to navigate through images
- **Keyboard Controls**: Use arrow keys (←/→) to navigate
- **Smooth Transitions**: CSS-based fade transitions between images (900ms)
- **Background Sync**: Background image changes to match the current slide
- **Responsive Design**: Adapts to different screen sizes
- **Clean UI**: Minimalist design with circular navigation buttons

## Project Structure

```
Image Slider/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript functionality
├── imgs/               # Image assets folder
│   ├── 1-beautiful-nature-backgrounds-nature-wallpapers-nature-landscape-photo-nature-wallpapers.webp
│   ├── 1920x1080-wallpaper-desktop-nature-2146057862-1024x576.webp
│   ├── 3d-abstract_widewallpaper_nature-frame_47491.webp
│   ├── 6-autumn-nature-sandbox-images_2053316-1024x576.webp
│   ├── 6921986-desktop-wallpaper-nature-1024x640.webp
│   ├── Amazing-Nature-Wallpaper-1024x640.webp
│   ├── Beautiful-Birds-beautiful-nature-23813827-1600-1200-1024x768.webp
│   ├── Blue-Green-beautiful-nature-21891805-1920-1200-1024x640.webp
│   └── Free-Wallpaper-Nature-Scenes-1024x576.webp
├── fontawesome-free-7.0.1-web/  # Font Awesome icons
├── slider image.png             # Reference image
├── gallery-icon-picture-landscape-vector-sign-symbol_660702-224.jpg  # Favicon
└── README.md                    # This file
```

## How to Use

1. **Open the project**: Open `index.html` in your web browser
2. **Navigate images**:
   - Click the left/right arrow buttons on the image
   - Use keyboard arrow keys (←/→)
3. **Enjoy**: Watch the smooth transitions between nature images

## Technical Details

### HTML Structure

- Two-column layout: image slider (left) + content panel (right)
- Background slides container for full-page background
- Foreground slides container for main image display
- Navigation buttons with Font Awesome icons

### CSS Features

- **Grid Layout**: Responsive two-column design
- **Transitions**: Smooth opacity transitions (900ms ease)
- **Button Styling**: Circular navigation buttons with hover effects
- **Background Effects**: Blurred and darkened background images
- **Responsive**: Mobile-friendly design with media queries

### JavaScript Functionality

- **Slide Management**: Tracks current slide index
- **Event Listeners**: Handles button clicks and keyboard input
- **Active State**: Manages `.active` class for slide visibility
- **Circular Navigation**: Loops from last to first slide and vice versa

## Customization

### Adding More Images

1. Add new images to the `imgs/` folder
2. Add corresponding `<div class="slide">` and `<div class="bg-slide">` elements in `index.html`
3. Update the `background-image` URL in the `style` attribute

### Changing Transition Speed

Modify the transition duration in `style.css`:

```css
.slide,
.bg-slide {
  transition: opacity 900ms ease; /* Change 900ms to desired duration */
}
```

### Styling Buttons

Customize navigation buttons in the `.nav` CSS class:

```css
.nav {
  width: 40px; /* Button size */
  height: 40px; /* Button size */
  background: rgba(0, 0, 0, 0.45); /* Button color */
  /* ... other styles */
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- JavaScript ES6+ features used

## Dependencies

- **Font Awesome 7.0.1**: For navigation icons
- **No external frameworks**: Pure HTML, CSS, and JavaScript

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Note**: Make sure all image files in the `imgs/` folder are properly named and accessible for the slider to work correctly.
