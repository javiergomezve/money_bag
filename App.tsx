import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import RootStack from './src/navigators/RootStack';

export default function App() {
    let [fontsLoaded] = useFonts({
        'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <RootStack />;
}
