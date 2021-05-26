import { KeyboardKey } from '../models/keyboard-key.model';
import { useEffect } from 'react';

const CLASS_NAME = 'focus-outlines';

export const useFocusOutlines = () => {
    const { body } = document;

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === KeyboardKey.Tab) {
            body.classList.add(CLASS_NAME);
        }
    };

    const handleClick = (event: MouseEvent) => {
        const isTriggeredByMouse = Boolean(event.clientX && event.clientY);

        if (isTriggeredByMouse) {
            body.classList.remove(CLASS_NAME);
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
