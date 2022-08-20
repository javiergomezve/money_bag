import { FunctionComponent } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import { colors } from '../../colors';
import SmallText from '../Texts/SmallText';

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = ({
    mainText,
    subText,
    mainTextStyles,
    subTextStyles,
}) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    { color: colors.secondary, fontSize: 22 },
                    mainTextStyles,
                ]}
            >
                {mainText}
            </RegularText>

            <SmallText textStyles={[{ color: colors.graydark }, subTextStyles]}>
                {subText}
            </SmallText>
        </StyledView>
    );
};

export default Greeting;
