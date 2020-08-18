import { useEffect } from 'react';

export const useFocusOutlines = (): void => {
    const { body } = document;
    const className = 'focus-outlines';

    const showFocusOutlines = () => {
        body.classList.add(className);
    };

    const hideFocusOutlines = () => {
        body.classList.remove(className);
    };

    useEffect(() => {
        body.addEventListener('keydown', showFocusOutlines);
        body.addEventListener('click', hideFocusOutlines);

        return () => {
            body.removeEventListener('keydown', showFocusOutlines);
            body.removeEventListener('click', hideFocusOutlines);
        };
    });
};
