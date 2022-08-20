import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../colors';
import RegularButton from '../Buttons/RegularButton';

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
    return (
        <ButtonSectionBackground>
            <RegularButton
                buttonStyles={{ width: '50%' }}
                textStyles={{ color: colors.white }}
                onPress={() => {}}
            >
                Cancel <Ionicons size={17} name="card" color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default ButtonSection;
