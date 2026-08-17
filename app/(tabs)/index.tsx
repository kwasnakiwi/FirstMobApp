import "@/global.css"
import {Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "react-native-css";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-5xl font-sans-extrabold text-primary">Home</Text>
            <Text className="text-xl font-bold text-primary">TYR_dev to cwel :DDDDDDDDDDDDDDD</Text>
            <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Onboarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Sign In</Link>
            <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Sign Up</Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: {id: "spotify"}
                }}
            >
                Spotify Subscriptions
            </Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: {id: "claude"}
                }}
            >
                Claude Max Subscription
            </Link>
        </SafeAreaView>
    );
}