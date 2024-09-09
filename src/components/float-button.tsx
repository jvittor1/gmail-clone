import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
};
export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      className="absolute bottom-4 right-4 flex-row items-center gap-2 rounded-xl bg-blue-900 px-6 py-4"
      activeOpacity={0.7}
      {...rest}
    >
      {icon && <MaterialIcons name={icon} size={22} color={colors.gray[200]} />}

      <Text className="font-body text-base text-gray-200">Compose</Text>
    </TouchableOpacity>
  );
}
