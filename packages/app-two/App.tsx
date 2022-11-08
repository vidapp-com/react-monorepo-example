/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';

import SharedContext from '@react-monorepo-example/shared/SharedContext';
import {useData} from '@react-monorepo-example/shared/context/DataContext';

const App = () => {
    return (
        <SharedContext>
            <NumberCount/>
        </SharedContext>
    );
};

const NumberCount = () => {
    const {count, incrementCount, decrementCount} = useData();
    return (
        <SafeAreaView style={{backgroundColor: 'orange', flex: 1}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>And our test number is {count}</Text>
                <Button onPress={incrementCount} title={'Increment count'}/>
                <Button onPress={decrementCount} title={'Decrement count'}/>
            </ScrollView>
        </SafeAreaView>
    );
};
export default App;
