import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../utils/theme';
import CustomIcon from './CustomIcon';
import {appIcons} from '../assets';

export default function CustomTabs({state, descriptors, navigation}) {
  return (
    <View style={styles?.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        let imageSrc = appIcons.power;
        if (route.name === 'Home') imageSrc = appIcons.power;
        if (route.name === 'Details') imageSrc = appIcons.rate;
        if (route.name === 'Test') imageSrc = appIcons.setting;
        if (route.name === 'Dummy') imageSrc = appIcons.share;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles?.tabsContainer}>
            {/* <Text style={{color: isFocused ? '#673ab7' : colors?.white}}>
              {label}
            </Text> */}
            <CustomIcon src={imageSrc} size={28} resizeMode={'contain'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors?.cyan,
  },
  tabsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// // ...

// <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//   {...}
// </Tab.Navigator>
