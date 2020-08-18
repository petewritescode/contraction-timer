import { KeyboardKey } from '../models/keyboard-key.model';
import { useEffect } from 'react';

export const useFocusOutlines = (): void => {
    const { body } = document;
    const className = 'focus-outlines';

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === KeyboardKey.Tab) {
            body.classList.add(className);
        }
    };

    const handleClick = (event: MouseEvent) => {
        const isTriggeredByMouse = Boolean(event.clientX && event.clientY);

        if (isTriggeredByMouse) {
            body.classList.remove(className);
        }
    };

    useEffect(() => {
        body.addEventListener('keydown', handleKeyDown);
        body.addEventListener('click', handleClick);

        return () => {
            body.removeEventListener('keydown', handleKeyDown);
            body.removeEventListener('click', handleClick);
        };
    });
};
