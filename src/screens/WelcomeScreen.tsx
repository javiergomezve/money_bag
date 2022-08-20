import React, { Fragment, FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { StackScreenProps } from '@react-navigation/stack';

import background from '../assets/bgs/background_v1.png';
import { colors } from '../colors';
import { Container } from '../components/shared';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';
import { RootStackParamList } from '../navigators/RootStack';

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end;
`;

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <Fragment>
            <StatusBar style="light" />

            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>

                <BottomSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best payment method, connects your money to your friends
                        and family
                    </SmallText>
                    <RegularButton
                        onPress={() => navigation.navigate('Home')}
                        textStyles={{ color: colors.white }}
                    >
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </Fragment>
    );
};

export default WelcomeScreen;
