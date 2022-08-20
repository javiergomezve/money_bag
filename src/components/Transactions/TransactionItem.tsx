import { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import TransactionAvi from './TransactionAvi';

import { Transaction } from './types';

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;

const TransactionItem: FunctionComponent<Transaction> = ({
    title,
    subtitle,
    amount,
    date,
    art,
}) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi background={art.background} icon={art.icon} />
                <View style={{ marginLeft: 10 }}>
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: 'left',
                            marginBottom: 5,
                        }}
                    >
                        {title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: 'left',
                            color: colors.graydark,
                        }}
                    >
                        {subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: 'right',
                        marginBottom: 5,
                    }}
                >
                    {amount}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: 'right',
                        color: colors.graydark,
                    }}
                >
                    {date}
                </SmallText>
            </RightView>
        </TransactionRow>
    );
};

export default TransactionItem;
