import { Text, View } from "react-native";
import { Avatar } from "./avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { EmailDataProps } from "@/utils/email";

type EmailProps = {
  data: EmailDataProps;
};

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar size="md" source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}
          <Text className="font-subtitle flex-1 text-lg text-gray-300">
            {data.name}
          </Text>

          <Text className="font-body text-sm text-gray-400">{data.date}</Text>
        </View>
        <Text
          className="font-body text-base text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="font-body flex-1 text-base text-gray-400"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.star ? "star" : "star-border"}
            size={22}
            color={data.star ? colors.blue[600] : colors.gray[400]}
          />
        </View>
      </View>
    </View>
  );
}
