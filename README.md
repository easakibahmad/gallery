1. create project with vite -> 
    npm create vite@latest gallery -- --template react


2. install react router dom -> 
    npm install react-router-dom localforage match-sorter sort-by


3. install tailwind css -> 
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


4. install daisyui as a tailwind css plugin
    npm i -D daisyui@latest

    (add daisyUI to your tailwind.config.js file)
    plugins: [require("daisyui")],


5. favicon added


6. router setup (only home route setup here)


7. github first commit


8. home page implementation

9. **Gallery Layout:**
   - Implement a grid layout for the image gallery. ->done
   - The gallery should display images with one feature image larger than the others. ->done
10. **Sorting:**
   - Enable reordering functionality to allow users to rearrange the order of images 
   - in the gallery. ->done
   - Implement drag-and-drop functionality or any other intuitive method for reordering. ->done

11. **Deleting Multiple Images:**
   - Allow users to select multiple images and delete them.  ->done
   - Provide a clear visual indication of selected images.  ->done

12. **Setting Feature Image:**
   - Allow users to set a feature image by sorting.  ->done
   - Pretend the first image (from the LTR direction) as the featured image  ->done
   - The feature image should be visually distinct from the other images.  ->done

13. **User Experience:**
   - Ensure a smooth and responsive user experience.  ->done
   - Implement transitions or animations for a polished look and feel.  ->done

14. **Live Demo:**
   - Host your React JS image gallery on any platform of your choice.  ->done
   - Share the live URL of your task with us for assessment.  ->done
   - Our verdict would be considered as rejected if your live URL link does not work.  ->done
