import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Loading } from "../components/loading/loading";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";
import Label from "../components/label/label";
import { useBmoStore } from "../store/bmo-store";

export default function SettingScreen() {
  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // BMO STORE HANDLER
  const { accountDetail } = useBmoStore();

  return (
    <View style={setting_style.main_container}>
      <Loading loading={loading} />
      <View style={setting_style.container}>
        <View style={setting_style.header_container}>
          <Label label={"Settings"} size={"medium"} style={{ fontSize: 20 }} />
        </View>
        <Label
          size={"small"}
          style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
          label={"Personal Details (Click profile to edit details)"}
        />
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: "auto",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../../assets/face.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                backgroundColor: "#fafafa",
                borderColor: "#1db11da9",
                borderWidth: 3.5,
              }}
            />
          </TouchableOpacity>
          <Label
            label={`${accountDetail.firstName} ${accountDetail.lastName}`}
            style={{ fontWeight: 500, fontSize: 20 }}
          />
          <Label
            label={`1234567890`}
            style={{ color: "#2522227a", fontSize: 12 }}
          />
        </View>
        <Label
          size={"small"}
          style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
          label={"Security"}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Label
            label={`${accountDetail.email.substring(0, 6)}${"*".repeat(
              accountDetail.email.length - 6
            )}`}
            style={{ color: "#2522227a", fontSize: 13 }}
          />
          <Label
            label={`***************`}
            style={{ color: "#2522227a", fontSize: 13 }}
          />
        </View>
      </View>
    </View>
  );
}

const setting_style = StyleSheet.create({
  main_container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: 5,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
