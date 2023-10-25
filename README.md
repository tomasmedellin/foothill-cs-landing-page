# Foothill Computer Science Club Landing Page Project

**Note:**  I'm a humanities major, so please keep your expectations low - Tomas." 

This README provides a brief overview of the code structure and how to make edits.

## Directory Structure

- `src/`: Main directory containing React components and styles.
  - `App.tsx`: Main React component.
  - `App.css`: Styles for the `App.tsx` component.
  - `TypingEffect.tsx`: Component for the typing animation effect.
  - `TypingEffect.css`: Styles for the `TypingEffect.tsx` component.
  - `Bottom.tsx`: Footer component.
  - `Bottom.css`: Styles for the footer.

## Making Edits

1. **Changing Static Text**: 
   - Locate text in `TypingEffect.tsx` or `Bottom.tsx`.
   - Modify the JSX to change content.

2. **Adjusting the Typing Animation**:
   - Words are in the `words` array in `TypingEffect.tsx`. Edit this array to adjust the animation.
   - Adjust typing speed and delay in the `useEffect` hook in `TypingEffect.tsx`.

3. **Modifying Footer Links**:
   - Links are in `Bottom.tsx`.
   - Change the `href` attribute of the `<a>` tag to modify a link.
   - Add more links by adding more `<a>` tags inside the `.bottom-icons` div.

4. **Styling**:
   - Styles for each component are in their respective `.css` files.
   - Modify `App.css` for global styles.
   - For component-specific styles, modify the respective `.css` file.

## Best Practices

- **Component Reusability**: Make components reusable when adding new features.
- **CSS Naming**: Use descriptive and concise class names.
- **Consistency**: Maintain consistent code formatting.
