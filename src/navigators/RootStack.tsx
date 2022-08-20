import React from 'react';
import { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../colors';
import { CardProp } from '../components/Cards/types';
import Avi from '../assets/avi/avatar.png';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import Greeting from '../components/Headers/Greeting';
import Profile from '../components/Headers/Profile';
import BalanceScreen from '../screens/BalanceScreen';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProp;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Balance"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                    },
                    headerRight: () => (
                        <Profile
                            img={Avi}
                            imgContainerStyle={{
                                backgroundColor: colors.tertiary,
                            }}
                        />
                    ),
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: props => (
                            <Greeting
                                mainText="Hey javiergomezve!"
                                subText="Welcome back"
                                {...props}
                            />
                        ),
                        headerTitleAlign: 'left',
                    }}
                />
                <Stack.Screen
                    name="Balance"
                    component={BalanceScreen}
                    options={({ route }) => ({
                        headerTitle: route.params?.alias,
                        headerTitleAlign: 'center',
                        headerBackImage: props => (
                            <Ionicons
                                {...props}
                                name="chevron-back"
                                size={25}
                                color={colors.secondary}
                            />
                        ),
                        headerLeftContainerStyle: {
                            paddingLeft: 0,
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
