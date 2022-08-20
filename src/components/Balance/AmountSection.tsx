import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { colors } from '../../colors';
import { AmountProps } from './types';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

const AmountSectionBackground = styled.View`
    width: 100%;
    padding-top: 5px;
    align-items: center;
    flex: 1;
`;

const AmountSection: FunctionComponent<AmountProps> = ({ balance }) => {
    return (
        <AmountSectionBackground>
            <SmallText
                textStyles={{ color: colors.secondary, marginBottom: 15 }}
            >
                Total Balance
            </SmallText>
            <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
                $ {balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;
