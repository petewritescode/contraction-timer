import { render, screen } from '../../test/utils/test.utils';
import { Average } from './average.component';
import { AverageType } from '../../models/average-type.model';
import React from 'react';

describe('Average component', () => {
    it('renders the duration and correct label', () => {
        const { rerender } = render(<Average type={AverageType.Duration} duration={5000} />);

        expect(screen.getByText('0:05')).toBeInTheDocument();
        expect(screen.getByText(/duration/i)).toBeInTheDocument();

        rerender(<Average type={AverageType.Interval} duration={120000} />);

        expect(screen.getByText('2:00')).toBeInTheDocument();
        screen.getByText(/interval/i);
    });
});
