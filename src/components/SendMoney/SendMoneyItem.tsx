import React, { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { colors } from '../../colors';
import { ScreenWidth } from '../shared';
import { SendMoneyProps } from './types';
import Profile from '../Headers/Profile';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.27}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
    margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = ({
    background,
    img,
    name,
    amount,
}) => {
    return (
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: background }}
            onPress={() => {
                alert('Send Money!');
            }}
        >
            <Fragment>
                <Profile img={img} imgContainerStyle={{ marginBottom: 10 }} />
                <SmallText
                    textStyles={{
                        textAlign: 'left',
                        color: colors.white,
                        fontSize: 12,
                    }}
                >
                    {name}
                </SmallText>
                <RegularText
                    textStyles={{
                        color: colors.white,
                        textAlign: 'left',
                        fontSize: 13,
                    }}
                >
                    {amount}
                </RegularText>
            </Fragment>
        </SendMoneyItemContainer>
    );
};

export default SendMoneyItem;
