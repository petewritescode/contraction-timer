import { KeyboardKey } from '../models/keyboard-key.model';
import { useEffect } from 'react';

export const useFocusOutlines = (): void => {
    const { body } = document;
    const className = 'focus-outlines';

    const handleKeyboardEvent = (event: KeyboardEvent) => {
        if (event.key === KeyboardKey.Tab) {
            body.classList.add(className);
        }
    };

    const handleMouseEvent = () => {
        body.classList.remove(className);
    };

    useEffect(() => {
        body.addEventListener('keydown', handleKeyboardEvent);
        body.addEventListener('click', handleMouseEvent);

        return () => {
            body.removeEventListener('keydown', handleKeyboardEvent);
            body.removeEventListener('click', handleMouseEvent);
        };
    });
};
