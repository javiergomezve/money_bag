import { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../colors';
import Avi from '../assets/avi/avatar.png';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import Greeting from '../components/Headers/Greeting';
import Profile from '../components/Headers/Profile';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
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
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
