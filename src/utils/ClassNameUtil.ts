/**
 * Returns a function that combines class names, mapping them through a CSS module styles object if available.
 * The returned class names are scoped according to the CSS module mapping.
 *
 * @param styles - An object mapping class names to their CSS module equivalents. This should be a CSS file imported as a module (e.g., `import styles from './MyComponent.module.css'`).
 * @returns A function that takes any number of class names (string, boolean, or undefined) and returns a space-separated string of valid, scoped class names.
 *
 * @example
 * import styles from './MyComponent.module.css';
 * const cx = combineClasses({ styles });
 * const className = cx('foo', condition && 'bar', 'baz');
 */
export function combineClasses({ styles }: { styles: Record<string, string> }) {
    return (
        /**
         * Combines class names, mapping them through the provided styles object.
         *
         * @param classes - Class names to combine. Falsy values are ignored.
         * @returns A space-separated string of class names.
         */
        ...classes: (string | boolean | undefined)[]
    ) => {
        return classes
            .filter(Boolean)
            .map(className => styles[className as string] || className)
            .join(' ');
    };
}
