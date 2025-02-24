# ShoppingCart Application

This project is a full-fledged **shopping cart** application built with **React**, **TypeScript**, and **Context API**. It allows users to browse products, add them to their cart, and view their cart's content. Additionally, the application stores cart data in **localStorage**, so even if the page is reloaded, the cart contents remain intact. 

### Key Features:
- **Product Listing**: The app fetches product data from a local mock API (in JSON format), and displays it in a grid format.
- **Add to Cart**: Users can add products to their shopping cart. Product quantities can be increased or decreased, and items can be removed from the cart.
- **Persistent Cart**: Cart data is stored in **localStorage**, so if the page is reloaded, the cart items persist.
- **User Authentication**: A simple login system restricts access to the shopping cart, ensuring only logged-in users can view and manage their cart.

### Core Features and Functionality:
1. **Store Page** (`/store`):
   - Displays a list of products fetched from the API.
   - Each product has an "Add to Cart" button that allows users to add the product to the cart.
   - Clicking on a product redirects the user to a detailed product page.

2. **Product Page** (`/product/:id`):
   - Displays detailed information for a single product (title, description, price, and image).
   - Users can increase/decrease product quantities in the cart or remove the product entirely.

3. **Cart Page** (`/cart`):
   - A user can see all the products they have added to the cart along with the quantities.
   - The cart is only accessible after a user logs in.

4. **Login Page** (`/login`):
   - Users must log in to access the cart page. Once logged in, the app redirects to the homepage.

5. **LocalStorage Integration**:
   - The cart's contents are stored in **localStorage**. This ensures that even if the user reloads the page or closes and reopens the browser, the cart will retain its contents.
   - Cart data is automatically updated when a product is added, removed, or updated in quantity.

6. **Protected Routes**:
   - The cart page (`/cart`) is a protected route, and it is only accessible after the user logs in. If the user tries to access the cart without logging in, they are redirected to the login page.

### Tech Stack:
- **React** (with Context API for state management)
- **TypeScript**
- **React Router** (for routing between pages)
- **Axios** (for making HTTP requests to fetch product data)
- **localStorage** (for persisting cart data across page reloads)
- **Tailwind CSS** (for styling)

### How It Works:
1. **Product Data**:
   - Product data is fetched from a mock API and displayed in a grid layout on the store page.
   - The products are stored in state (`useState`) and mapped into individual components for rendering.

2. **Cart Management**:
   - The shopping cart is managed using React's Context API, allowing any component to access and modify the cart.
   - The cart state is stored in `localStorage`, making it persistent even after page reloads.

3. **User Login**:
   - Users need to log in (via a simple form) to access the cart. If logged in, they can view, add, and remove products from the cart.
   - The app uses a mock login system, and upon successful login, a token is stored in `localStorage`.

4. **Private Routes**:
   - The cart is a protected route and can only be accessed by logged-in users.
   - If a non-logged-in user tries to access the cart, they are redirected to the login page.

### Directory Structure:
```
src/
  components/            # Reusable components (e.g., ProductItem, CartItem, Button)
  context/               # ShoppingCartContext (managing cart state)
  pages/                 # Different pages (e.g., Home, Store, Product, Cart)
  services/              # API calls for products and user login
  types/                 # TypeScript interfaces and types
  App.tsx                # Main component to set up routing
  index.tsx              # Entry point, including Router and ContextProvider
```

<img width="801" alt="Screenshot 2025-02-24 022211" src="https://github.com/user-attachments/assets/7ba9c153-6159-47fd-b73c-54dc7964985a" />


<img width="794" alt="Screenshot 2025-02-24 022258" src="https://github.com/user-attachments/assets/6e7b4e0f-f4f0-4688-b1fd-b0ffd7258436" />


![Screenshot 2025-02-24 022118](https://github.com/user-attachments/assets/4311c907-b895-400c-b1b6-6185109d3720)


