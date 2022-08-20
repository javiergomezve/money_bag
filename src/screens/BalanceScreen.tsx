import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';

import { colors } from '../colors';
import { RootStackParamList } from '../navigators/RootStack';
import { Container } from '../components/shared';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';

const BalanceContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    padding: 25px;
    flex: 1;
`;

type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const BalanceScreen: FunctionComponent<Props> = ({ route }) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance} />
            <BalanceCardSection {...route?.params} />
            <ButtonSection />
        </BalanceContainer>
    );
};

export default BalanceScreen;
