import { cleanup, render, screen } from '../../test/utils/test.utils';
import { Average } from './average.component';
import { AverageType } from '../../models/average-type.model';
import React from 'react';

describe('Average component', () => {
    it('renders the duration and correct label', () => {
        render(<Average type={AverageType.Duration} duration={5000} />);

        expect(screen.getByText('0:05')).toBeInTheDocument();
        expect(screen.getByText(/duration/i)).toBeInTheDocument();

        cleanup();

        render(<Average type={AverageType.Interval} duration={120000} />);

        expect(screen.getByText('2:00')).toBeInTheDocument();
        expect(screen.getByText(/interval/i)).toBeInTheDocument();
    });

    it('renders durations of an hour or more as 59:59+', () => {
        render(<Average type={AverageType.Duration} duration={3600000} />);

        expect(screen.getByText('59:59+')).toBeInTheDocument();
    });
});
