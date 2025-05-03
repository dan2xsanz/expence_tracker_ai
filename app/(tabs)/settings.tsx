import CurrencyCategories from "../components/currency-categories/currency-categories";
import BottomSheetDrawer from "../components/botton-sheet/bottom-sheet";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";
import { useBottomSheet } from "../hooks/bottom-sheet-hooks";
import { Loading } from "../components/loading/loading";
import { useBmoStore } from "../store/bmo-store";
import Label from "../components/label/label";
import { useRouter } from "expo-router";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from "react-native";

export default function SettingScreen() {
  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // BMO STORE HANDLER
  const { accountDetail, setAccountDetail } = useBmoStore();

  // Currency Type List
  const CurrencyType = useBottomSheet();

  // SCREEN ROUTING
  const router = useRouter();

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
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../../assets/face.jpg")}
            style={{
              width: 90,
              height: 90,
              borderWidth: 3.5,
              borderRadius: 100,
              backgroundColor: "#fafafa",
              borderColor: "#1db11da9",
            }}
          />
          <View>
            <Label
              label={`${accountDetail.firstName} ${accountDetail.lastName}`}
              style={{ fontWeight: 600, fontSize: 25 }}
            />
            <Label
              label={`1234567890`}
              style={{ color: "#2522227a", fontSize: 12 }}
            />
            <Label
              label={`${accountDetail.email.substring(0, 6)}${"*".repeat(
                accountDetail.email.length - 6
              )}`}
              style={{ color: "#2522227a", fontSize: 13 }}
            />
          </View>
        </TouchableOpacity>
        <Label
          size={"small"}
          style={{ fontSize: 12, marginTop: 20, marginBottom: 10 }}
          label={"Settings"}
        />
        <TouchableOpacity
          style={setting_style.button_style}
          onPress={() => CurrencyType.setOpenBottomSheet(true)}
        >
          <Label style={{ fontSize: 16 }} label={"Currency Type"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Saved Transactions"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Recurring Transactions"} />
        </TouchableOpacity>
        <Label
          size={"small"}
          style={{ fontSize: 12, marginTop: 20 }}
          label={"Support"}
        />
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Help"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Send us message"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Privacy Policy"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Data Sharing Agreement"} />
        </TouchableOpacity>
        <Label
          size={"small"}
          style={{ fontSize: 12, marginTop: 20, marginBottom: 10 }}
          label={"Security"}
        />
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Change Password"} />
        </TouchableOpacity>
        <TouchableOpacity style={setting_style.button_style}>
          <Label style={{ fontSize: 16 }} label={"Switch Account"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={setting_style.button_style}
          onPress={() => router.push("/")}
        >
          <Label
            style={{ fontSize: 16, fontWeight: 500, color: "red" }}
            label={"Logout"}
          />
        </TouchableOpacity>
      </View>
      {/* CURRENCY TYPES */}
      <BottomSheetDrawer
        sheetTitle={"Select Currency Type"}
        openSheet={CurrencyType.openBottomSheet}
        setOpenDrawer={CurrencyType.setOpenBottomSheet}
        children={
          <CurrencyCategories
            setLoading={setLoading}
            CurrencyType={CurrencyType}
            accountDetail={accountDetail}
            setAccountDetail={setAccountDetail}
          />
        }
      />
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
  button_style: {
    width: "100%",
    height: 45,
    padding: 5,
    justifyContent: "center",
    borderBottomWidth: 1.5,
    borderColor: "#012929ff",
  },
});
