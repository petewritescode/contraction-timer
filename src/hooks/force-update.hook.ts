import { useState } from 'react';

export const useForceUpdate = () => {
    const [, setValue] = useState({});

    return () => {
        setValue({});
    };
};
