import { StatusBar } from 'expo-status-bar';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import logo1 from '../assets/cards/visa_white.png';
import logo2 from '../assets/cards/mc.png';
import { colors } from '../colors';
import { Container } from '../components/shared';
import CardSection from '../components/Cards/CardSection';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: '3845757744',
            balance: 20000.15,
            alias: 'Work Debit',
            logo: logo1,
        },

        {
            id: 2,
            accountNo: '3845730203',
            balance: 12000.01,
            alias: 'Personal Prepaid',
            logo: logo2,
        },

        {
            id: 3,
            accountNo: '3845238847',
            balance: 5600.83,
            alias: 'School Prepaid',
            logo: logo1,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark" />

            <CardSection data={cardsData} />
        </HomeContainer>
    );
};

export default HomeScreen;
