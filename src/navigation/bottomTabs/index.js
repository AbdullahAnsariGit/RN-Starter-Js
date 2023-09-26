import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/AppStack/Home/Home';
import Details from '../../screens/AppStack/Details/Details';
import CustomTabs from '../../components/CustomTabs';
import Dummy from '../../screens/AppStack/Dummy/Dummy';
import Test from '../../screens/AppStack/Test/Test';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabs {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Dummy" component={Dummy} />
      <Tab.Screen name="Test" component={Test} />

    </Tab.Navigator>
  );
}
