import { borderWidth, color } from '../../../theme/helpers/theme.helpers';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledStatusIndicator = styled(motion.div)`
    width: 100%;
    height: 100%;
    border: ${borderWidth('l')} solid ${color('neutralMin')};
    border-radius: 50%;
`;
