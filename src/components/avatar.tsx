import { Image, ImageProps } from "react-native";

type AvatarProps = ImageProps & {
  size?: "sm" | "md";
};

export function Avatar({ size = "md", ...rest }: AvatarProps) {
  return (
    <Image
      className={`rounded-full ${size === "md" ? "h-12 w-12" : "h-8 w-8"}`}
      {...rest}
    />
  );
}
