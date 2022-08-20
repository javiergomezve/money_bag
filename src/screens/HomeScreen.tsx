import { StatusBar } from 'expo-status-bar';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { colors } from '../colors';
import { Container } from '../components/shared';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark" />
        </HomeContainer>
    );
};

export default HomeScreen;
