import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import CardItem from './CardItem';

import { CardSectionProps } from './types';

const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
`;

const CardSection: FunctionComponent<CardSectionProps> = ({ data }) => {
    return (
        <CardList
            data={data}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: 'center',
            }}
        />
    );
};

export default CardSection;
