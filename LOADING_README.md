# 🍪 Cookie Loading Animation System

## Overview

Your website now features a beautiful loading animation that displays the cookie icon whenever users navigate between pages or when the app first loads.

## ✨ Features

### 🎯 **Initial Loading**

- Shows when the app first loads
- Displays for 2 seconds with a beautiful cookie animation
- Uses your brand colors (purple to lavender gradient)

### 🔄 **Page Transition Loading**

- Triggers when users navigate between pages
- Shows for 1.2 seconds with smooth animations
- Automatically triggered by React Router

### 🎨 **Animation Details**

- **Cookie Icon**: Floats up and down while spinning
- **Loading Text**: Fades in with your primary font (Genki Desu DEMO)
- **Animated Dots**: Three bouncing dots in your accent color (#f2ac5f)
- **Smooth Transitions**: Fade in/out effects for professional feel

## 🚀 How It Works

### 1. **Automatic Triggers**

- Initial app load
- Navigation between pages
- Clicking on any navigation link

### 2. **Manual Control**

You can also manually trigger loading states in your components:

```jsx
import { useLoadingContext } from "../context/LoadingContext";

const MyComponent = () => {
  const { startLoading, stopLoading } = useLoadingContext();

  const handleSomeAction = () => {
    startLoading();
    // Do something...
    setTimeout(stopLoading, 2000); // Stop after 2 seconds
  };

  return <button onClick={handleSomeAction}>Do Something</button>;
};
```

### 3. **Loading States**

- `isInitialLoading`: True when app first loads
- `isLoading`: True during page transitions
- Both can be active simultaneously

## 🎨 Customization

### **Timing**

- **Initial Loading**: 2 seconds (2000ms)
- **Page Transitions**: 1.2 seconds (1200ms)
- **Fade Out**: 0.5 seconds (500ms)

### **Colors**

- **Background**: Gradient from `--primary` (#4c2a77) to `--secondary` (#c192ff)
- **Text**: White with your primary font
- **Dots**: `--accent` color (#f2ac5f)

### **Animations**

- **Cookie Float**: 2-second up/down cycle
- **Cookie Spin**: 3-second rotation with scale effects
- **Text Fade**: 0.8-second fade-in with delay
- **Dots Bounce**: 1.4-second staggered bounce effect

## 📱 Responsive Design

- **Desktop**: 120px cookie icon, 2rem text
- **Tablet**: 100px cookie icon, 1.5rem text
- **Mobile**: 80px cookie icon, 1.25rem text

## 🔧 Technical Implementation

### **Components**

- `Loading.jsx`: Main loading component
- `Loading.css`: Styling and animations
- `LoadingContext.jsx`: State management
- `useLoading.js`: Custom hook (optional)

### **Integration Points**

- `App.jsx`: Main loading logic
- `Navbar.jsx`: Navigation click triggers
- `Footer.jsx`: Footer link triggers
- `Home.jsx`: Hero button triggers

## 🎯 Usage Examples

### **Basic Navigation**

```jsx
<Link to="/products" onClick={() => startLoading()}>
  Go to Products
</Link>
```

### **Custom Loading**

```jsx
const { withLoading } = useLoadingContext();

const handleSubmit = async () => {
  await withLoading(async () => {
    // Your async operation here
    await submitForm();
  });
};
```

### **Manual Control**

```jsx
const { startLoading, stopLoading } = useLoadingContext();

useEffect(() => {
  startLoading();
  const timer = setTimeout(stopLoading, 3000);
  return () => clearTimeout(timer);
}, []);
```

## 🚀 Benefits

1. **Professional Feel**: Smooth transitions between pages
2. **Brand Consistency**: Uses your exact color palette
3. **User Experience**: Clear feedback during navigation
4. **Performance**: Prevents layout shifts during page loads
5. **Accessibility**: Loading states for screen readers

## 🎉 Result

Your website now has a beautiful, branded loading experience that matches your cookie business perfectly! The cookie icon spins and floats while users wait, creating a delightful and memorable user experience.
