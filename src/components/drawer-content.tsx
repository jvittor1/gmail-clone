import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, Text, View } from "react-native";
import { DrawerButton } from "./drawer-button";
import { CustomOptions } from "@/types/navigation";

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 overflow-hidden bg-gray-800">
      <View className="mt-9 w-full border-b border-gray-400 px-6">
        <Text className="mb-6 font-subtitle text-xl text-white">Gmail</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index;
            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions;

            if (options.title === undefined) {
              return;
            }

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: "drawerItemPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event?.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params);
              }
            };

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text className="ml-5 mt-4 font-subtitle text-sm text-gray-400">
                    {options.sectionTitle}
                  </Text>
                )}

                <DrawerButton
                  onPress={onPress}
                  title={options.title}
                  icon={options.iconName}
                  notifications={options.notifications}
                  isDivider={options.isDivider}
                  isFocused={isFocused}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
