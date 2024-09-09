import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, View } from "react-native";

export type iconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string;
  icon: iconNameProps;
  isDivider?: boolean;
  isFocused?: boolean;
  notifications?: number;
};

export function DrawerButton({
  title,
  isFocused,
  isDivider,
  icon,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      {...rest}
      className={`w-full py-2 pr-5 ${isDivider ? "border-b border-gray-400" : ""}`}
    >
      <View
        className={`h-12 w-full flex-row items-center justify-between rounded-r-full px-6 py-3 ${isFocused ? "bg-blue-900/80" : ""}`}
      >
        <View className="flex-row items-center gap-4">
          <MaterialIcons
            name={icon}
            size={22}
            color={isFocused ? colors.gray[100] : colors.gray[400]}
          />
          <Text
            className={`font-subtitle text-base ${isFocused ? "text-gray-100" : "text-gray-300"}`}
          >
            {title}
          </Text>
        </View>

        {notifications && (
          <Text
            className={`font-body text-sm ${isFocused ? "text-gray-100" : "text-gray-400"}`}
          >
            {notifications}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
