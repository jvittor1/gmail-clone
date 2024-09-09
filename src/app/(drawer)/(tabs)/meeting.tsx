import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { MenuButton } from "@/components/menu-button";
import { Text, View, Image } from "react-native";

export default function Meeting() {
  return (
    <View className="flex-1 bg-gray-900 p-4 pt-14">
      <View className="w-full flex-row items-center justify-between">
        <MenuButton />
        <Text className="font-subtitle text-2xl text-gray-100">Reunião</Text>

        <Avatar
          size="sm"
          source={{
            uri: "https://mighty.tools/mockmind-api/content/human/5.jpg",
          }}
        />
      </View>
      <View className="mt-6 flex-row gap-2">
        <Button
          onPress={() => console.log("clicou no button")}
          title="Nova Reunião"
          style="primary"
        />
        <Button
          onPress={() => console.log("clicou no button")}
          title="Participar com o código"
          style="secondary"
        />
      </View>

      <View className="flex-1 items-center justify-center gap-6">
        <Image
          source={require("../../../assets/images/meeting-image.png")}
          className="h-44 w-44 rounded-full bg-blue-400"
        />
        <Text className="text-center font-subtitle text-3xl text-gray-200">
          Criar um link para compartilhar
        </Text>

        <Text className="tex-base text-center font-body text-gray-400">
          Toque em Nova reunião para criar um link que será enviado aos seus
          convidados
        </Text>
      </View>
    </View>
  );
}
