# Browser Extensions Manager

A modern, responsive web application for managing browser extensions with an intuitive dark/light theme interface. Built with vanilla JavaScript, CSS Grid, and modern web standards.

![Browser Extensions Manager Preview](./preview.jpg)

## ✨ Features

- **Extension Management**: View, toggle, and remove browser extensions
- **Smart Filtering**: Filter extensions by All, Active, or Inactive status
- **Theme Switching**: Seamless dark/light mode toggle with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Source Code

| [View Source Code](https://github.com/MahmoudAlaa5/Different-Apps.git))

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Grid layout, Flexbox, CSS Variables, and modern styling
- **Vanilla JavaScript**: ES6+ features, async/await, event delegation
- **Noto Sans**: Google Fonts typography
- **CSS Grid**: Responsive card layout system

## 📱 Responsive Design

- **Mobile**: 375px - Single column layout
- **Tablet**: 768px - Two column grid
- **Desktop**: 1024px+ - Three column grid
- **Large Screens**: 1440px+ - Optimized spacing and typography

## 🎨 Design System

### Color Palette

- **Primary**: Deep navy gradients with coral accents
- **Neutral**: Sophisticated grays and whites
- **Interactive**: Coral red for active states and primary actions
- **Typography**: Noto Sans with 400, 500, and 700 weights

### Key Components

- **Extension Cards**: Dark themed with subtle shadows and rounded corners
- **Filter Controls**: Pill-style buttons with smooth transitions
- **Toggle Switches**: Custom styled with active/inactive states
- **Theme Toggle**: Elegant button with icon switching

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MahmoudAlaa5/browser-extensions-manager.git
   cd browser-extensions-manager
   ```

2. **Open in browser**

   - Simply open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

3. **Start managing extensions!**
   - Click filter buttons to view different extension states
   - Toggle extensions on/off using the switches
   - Remove extensions with the remove button
   - Switch between light and dark themes

## 📁 Project Structure

```
browser-extensions-manager/
├── index.html             # Main HTML file
├── main.css               # Styles and theme system
├── script.js              # Application logic
├── data.json              # Extension data
├── assets/
│   ├── images/            # Icons and logos
│   └── fonts/             # Typography files
├── design/                # Design references
└── README.md              # Project documentation
```

## 🔧 Key Features Implementation

### Dynamic Extension Rendering

- Fetches extension data from JSON
- Creates responsive card components
- Handles image loading with fallbacks

### State Management

- Tracks active/inactive extension states
- Maintains current filter selection
- Persists theme preference in localStorage

### Event Handling

- Event delegation for dynamic content
- Keyboard navigation support
- Smooth transitions and animations

### Theme System

- CSS custom properties for consistent theming
- Automatic theme detection and persistence
- Smooth transitions between themes

## 🎯 Performance Optimizations

- **Efficient Rendering**: Uses DocumentFragment for batch DOM updates
- **Event Delegation**: Single event listeners for dynamic content
- **CSS Grid**: Hardware-accelerated layout system
- **Optimized Assets**: Compressed images and fonts
- **Minimal Dependencies**: Zero external libraries

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG compliant color combinations
- **Responsive Text**: Scalable typography for all screen sizes

## 🔮 Future Enhancements

- [ ] Extension search and sorting
- [ ] Bulk operations (select multiple extensions)
- [ ] Extension categories and tags
- [ ] Import/export extension lists
- [ ] Extension usage statistics
- [ ] PWA support for offline use

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Frontend Mentor](https://www.frontendmentor.io)
- Icons and assets from the original design system
- Community feedback and suggestions

## 📞 Contact

**Mahmoud Alaa**- mahmoudalaa0025@gmail.com

Project Link: [https://github.com/MahmoudAlaa5/Different-Apps.git](https://github.com/MahmoudAlaa5/Different-Apps.git)

---

⭐ If you found this project helpful, please give it a star!
