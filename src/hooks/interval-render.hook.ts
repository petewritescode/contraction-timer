import { useEffect, useState } from 'react';

export const useIntervalRender = (interval: number) => {
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        if (interval === undefined) {
            return undefined;
        }

        const intervalId = setInterval(() => setRenderCount(renderCount + 1), interval);

        return () => clearInterval(intervalId);
    });
};
