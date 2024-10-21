import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text>Hello Expo</Text>
      <Link href={"/user"}>유저로 이동</Link>
    </View>
  );
}
