### create project with vite ->
   npm create vite@latest gallery -- --template react

### install react router dom ->
   npm install react-router-dom localforage match-sorter sort-by

### install tailwind css ->
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   (add below paths to tailwind.config.js file)
   content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ],

   (add below directives to index.css file)
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

### install daisyui as a tailwind css plugin
   npm i -D daisyui@latest

   (add daisyUI to your tailwind.config.js file)
   plugins: [require("daisyui")],

### favicon added

### router setup (only home route setup here)

### github first commit

### home page implementation

### **Gallery Layout:**
   - Implement a grid layout for the image gallery. ->done
   - The gallery should display images with one feature image larger than the others. ->done
### **Sorting:**

- Enable reordering functionality to allow users to rearrange the order of images
- in the gallery. ->done
- Implement drag-and-drop functionality or any other intuitive method for reordering. ->done

### **Deleting Multiple Images:**

- Allow users to select multiple images and delete them. ->done
- Provide a clear visual indication of selected images. ->done
### **Setting Feature Image:**

- Allow users to set a feature image by sorting. ->done
- Pretend the first image (from the LTR direction) as the featured image ->done
- The feature image should be visually distinct from the other images. ->done
### **User Experience:**

- Ensure a smooth and responsive user experience. ->done
- Implement transitions or animations for a polished look and feel. ->done

### **Live Demo:**

- Host your React JS image gallery on any platform of your choice. ->done
- Share the live URL of your task with us for assessment. ->done
