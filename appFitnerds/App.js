import StackNavigator from "./StackNavigator";
import { FitnessContext } from "./Context";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}
