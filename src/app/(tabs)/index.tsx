import { Avatar } from "@/components/avatar";
import { Email } from "@/components/email";
import { FloatButton } from "@/components/float-button";
import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { Emails } from "@/utils/email";
import { FlatList, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 p-4 pt-14">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Search mail" />
        <Avatar
          size="sm"
          source={{
            uri: "https://mighty.tools/mockmind-api/content/human/5.jpg",
          }}
        />
      </Input>

      <FlatList
        data={Emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-3"
        ListHeaderComponent={() => (
          <Text className="font-subtitle mt-6 text-sm uppercase text-gray-400">
            Inbox
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  );
}
