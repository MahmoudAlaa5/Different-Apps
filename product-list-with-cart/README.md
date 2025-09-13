# 🍰 Product List with Cart

A modern, responsive e-commerce dessert ordering system built with vanilla JavaScript, HTML, and CSS. This project features a beautiful product grid with an interactive shopping cart that updates in real-time.

![Product List with Cart Preview](./preview.jpg)

## ✨ Features

### 🛍️ Shopping Experience

- **Product Grid Display** - Beautiful card-based layout showcasing dessert products
- **Interactive Cart** - Side-by-side cart that appears when items are added
- **Real-time Updates** - Cart updates instantly as you modify quantities
- **Quantity Controls** - Add, remove, and adjust item quantities with intuitive +/- buttons
- **Order Confirmation** - Complete order process with total calculation

### 🎨 Design & UX

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Hover Effects** - Interactive elements with visual feedback
- **Sticky Cart** - Cart stays visible while browsing products
- **Empty State** - Cart hides when empty to maintain clean layout

### 🛒 Cart Functionality

- **Dynamic Cart Management** - Add/remove items with persistent state
- **Price Calculations** - Real-time total price updates
- **Item Tracking** - Individual quantity management per product
- **Order Summary** - Detailed breakdown of cart contents
- **Carbon Neutral Badge** - Environmental awareness feature



## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks, pure JS for functionality
- **JSON** - Product data management
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
product-list-with-cart-main/
├── index.html              # Main HTML file
├── style.css               # All styling and responsive design
├── script.js               # JavaScript functionality
├── data.json               # Product data
├── assets/
│   └── images/             # Product images and icons
├── design/                 # Design references
└── README.md              # This file
```

## 🎯 Key Features Implemented

### Product Display

- ✅ Dynamic product loading from JSON data
- ✅ Responsive grid layout (auto-fit with minimum 250px cards)
- ✅ High-quality product images with hover effects
- ✅ Product information display (name, category, price)

### Cart System

- ✅ Add to cart functionality
- ✅ Quantity increment/decrement controls
- ✅ Remove items from cart
- ✅ Real-time cart updates
- ✅ Order total calculation
- ✅ Cart visibility management (hidden when empty)

### User Interface

- ✅ Side-by-side layout (products + cart)
- ✅ Sticky cart positioning
- ✅ Responsive design for all screen sizes
- ✅ Smooth animations and transitions
- ✅ Professional color scheme and typography

## 🎨 Design Highlights

### Color Palette

- **Primary Red**: `hsl(14, 86%, 42%)` - For prices and CTAs
- **Green Accent**: `hsl(159, 69%, 38%)` - For cart actions
- **Rose Tones**: Various shades for backgrounds and text
- **White**: Clean card backgrounds

### Typography

- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Responsive sizing** for different screen sizes

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Side-by-side layout
- **Tablet**: 768px - 1024px - Stacked layout with cart on top
- **Mobile**: < 768px - Optimized single-column layout

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MahmoudAlaa5/product-list-with-cart.git
   cd product-list-with-cart
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Start shopping!**
   - Browse the dessert products
   - Add items to your cart
   - Adjust quantities as needed
   - Complete your order

## 🔧 Customization

### Adding New Products

Edit `data.json` to add new dessert products:

```json
{
  "image": {
    "thumbnail": "./assets/images/your-image-thumbnail.jpg",
    "mobile": "./assets/images/your-image-mobile.jpg",
    "tablet": "./assets/images/your-image-tablet.jpg",
    "desktop": "./assets/images/your-image-desktop.jpg"
  },
  "name": "Your Dessert Name",
  "category": "Category",
  "price": 5.99
}
```

### Styling Modifications

- Colors: Update CSS custom properties in `:root`
- Layout: Modify grid and flexbox properties
- Animations: Adjust transition and transform values

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Order history tracking
- [ ] Payment integration
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Admin dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Frontend Mentor** for the design challenge
- **Google Fonts** for the Poppins font family
- **Community** for inspiration and feedback

## 📞 Contact

mahmoudalaa0025@gmail.com

Project Link: [https://github.com/MahmoudAlaa5/product-list-with-cart](https://github.com/MahmoudAlaa5/product-list-with-cart)

---

**Happy Shopping! 🛒✨**
