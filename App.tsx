/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/mainStack/MainStack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from "./src/store/store";

const App = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </GestureHandlerRootView>
  );
};



export default App;
