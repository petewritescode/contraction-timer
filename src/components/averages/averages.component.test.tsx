import { render, screen } from '../../test/utils/test.utils';
import { Averages } from './averages.component';
import React from 'react';

describe('Averages component', () => {
    it('renders duration and interval averages, with the correct values and in the correct order', () => {
        jest.spyOn(Date, 'now').mockReturnValue(1000000600000);

        const initialState = {
            timer: {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 20000 },
                    { start: 1000000270000, duration: 30000 },
                    { start: 1000000600000 },
                ],
            },
        };

        render(<Averages />, { initialState });

        const averages = screen.getAllByRole('listitem');
        const [duration, interval] = averages;

        expect(averages).toHaveLength(2);
        expect(duration).toHaveTextContent('0:25');
        expect(duration).toHaveTextContent(/duration/i);
        expect(interval).toHaveTextContent('5:00');
        expect(interval).toHaveTextContent(/interval/i);
    });
});
