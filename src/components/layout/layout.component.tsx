import React, { FunctionComponent } from 'react';
import { StyledContent, StyledLayout } from './layout.styles';
import { Content } from '../content/content.component';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const Layout: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);

    return (
        <StyledLayout status={status} data-testid="layout">
            <section>
                <Header />
            </section>

            <StyledContent>
                <Content />
            </StyledContent>

            <section>
                <Footer />
            </section>
        </StyledLayout>
    );
};
