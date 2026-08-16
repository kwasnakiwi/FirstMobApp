import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import {styled} from "react-native-css";

const SafeAreaView = styled(RNSafeAreaView);
const SignUp = () => {

    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>SignUp</Text>
            <Link href="/(auth)/sign-in">I have an Account</Link>
        </SafeAreaView>
    );
}

export default SignUp;