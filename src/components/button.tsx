import { Pressable, Text } from "react-native";

type buttonProps = {
  onPress: () => void;
  style: "primary" | "secondary";
  title: string;
};

export function Button({ onPress, style, title }: buttonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full border px-6 py-2 ${style === "primary" ? "border-transparent bg-blue-300" : "border-gray-300 bg-gray-900"}`}
    >
      <Text
        className={`font-subtitle text-lg ${
          style === "primary" ? "text-gray-900" : "text-blue-300"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
