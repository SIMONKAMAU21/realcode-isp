import { View } from "react-native";
import Domain from "./pages/Domain";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";
import Accounts from "./pages/Accounts";

export default function App() {

  const stack= createNativeStackNavigator()
  return (
 <NavigationContainer>
  <stack.Navigator initialRouteName="Domain">
    <stack.Screen name="fomain" component={Domain}/>
    <stack.Screen name="Login" component={Login}/>
    <stack.Screen name=" account" component={Accounts}/>
  </stack.Navigator>
 </NavigationContainer>

  );
}


