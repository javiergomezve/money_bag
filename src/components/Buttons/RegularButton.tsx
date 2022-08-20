import { FunctionComponent, ReactNode } from 'react';
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../colors';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;

interface ButtonProps {
    buttonStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const RegularButton: FunctionComponent<ButtonProps> = ({
    buttonStyles,
    textStyles,
    children,
    onPress,
}) => {
    return (
        <ButtonView style={buttonStyles} onPress={onPress}>
            <RegularText textStyles={textStyles}>{children}</RegularText>
        </ButtonView>
    );
};

export default RegularButton;
