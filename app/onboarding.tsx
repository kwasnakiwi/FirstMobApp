import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import {styled} from "react-native-css";

const SafeAreaView = styled(RNSafeAreaView);

const Onboarding = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Onboarding</Text>
        </SafeAreaView>
    );
}

export default Onboarding;