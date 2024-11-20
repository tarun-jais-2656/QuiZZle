import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import QuizScreen from "../screens/quizScreen";
import Splash from "../screens/splash";
import ResultScreen from "../screens/resultScreen";
import { UserDetail } from "../screens/userDetail";
import { LeaderBoard } from "../screens/leaderboard";

const stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Splash">
                <stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="QuizScreen"
                    component={QuizScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="ResultScreen"
                    component={ResultScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="UserDetail"
                    component={UserDetail}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="LeaderBoard"
                    component={LeaderBoard}
                    options={{ headerShown: false }}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;