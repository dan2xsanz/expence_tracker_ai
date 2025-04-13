import { NotificationIcon } from "../components/icons/icons";
import Label from "../components/label/label";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { TipCards } from "../components/tip-cards/tip-cards";

export default function HomeScreen() {
  const router = useRouter();

  const scrollRef = useRef<ScrollView>(null);
  const scrollInterval = 3000; // Time between scrolls in ms
  const cardWidth = Dimensions.get("window").width - 30; // Adjust based on your TipCard width including margin
  const totalCards = 10; // Update based on your TipCards

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        currentIndex = (currentIndex + 1) % totalCards;
        scrollRef.current.scrollTo({
          x: currentIndex * cardWidth,
          animated: true,
        });
      }
    }, scrollInterval);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <View style={home_style.main_container}>
      <View style={home_style.container}>
        <View style={home_style.header_container}>
          <Label label={"Home"} size={"medium"} style={{ fontSize: 20 }} />
          {/* <NotificationIcon /> */}
        </View>

        <View style={{ marginTop: 10 }}>
          <Label
            label={"Hi Dan Lester!"}
            size={"large"}
            style={{ fontWeight: 500, fontSize: 40 }}
          />
        </View>
        <TouchableOpacity
          style={home_style.bmo_clickable_container}
          onPress={() => router.push("/(askbmo)/askbmo")}
        >
          <View>
            <Label
              size="large"
              style={{ fontSize: 17, flexWrap: "wrap", marginBottom: 5 }}
              label="Welcome! I'm your BMO. "
            />
            <Label
              size="medium"
              style={{ fontSize: 13, flexWrap: "wrap" }}
              label="Your new expense tracker buddy."
            />
            <Label
              size="medium"
              style={{ fontSize: 13, flexWrap: "wrap" }}
              label="If Need help or want to chat? Just tap me!"
            />
          </View>
          <Image
            source={require("../../assets/bmoskate.png")}
            style={{ width: 130, height: 130 }}
          />
        </TouchableOpacity>
        <Label
          label={"Insight Summary"}
          style={{
            fontSize: 15,
            marginTop: 18,
          }}
        />
        <View>
          <View style={home_style.insight_container}>
            <Label
              label={"April 2025"}
              style={{ fontWeight: 500, fontSize: 18 }}
            />
            <View style={home_style.insight_filter}>
              <Picker
                style={{ fontWeight: "500", padding: -1 }}
                selectedValue={undefined}
                onValueChange={(itemValue) => console.log(itemValue)}
              >
                <Picker.Item label="Weekly" value="1" />
                <Picker.Item label="Monthly" value="2" />
                <Picker.Item label="Yearly" value="3" />
              </Picker>
            </View>
          </View>
          <View style={home_style.insight_item_holder}>
            <View style={home_style.total_income_container}>
              <Image
                source={require("../../assets/bmoneyin.png")}
                style={{ width: 60, height: 60 }}
              />
              <View style={{ marginLeft: 5 }}>
                <Label
                  label={"Total Income"}
                  style={{ fontWeight: 400, fontSize: 12 }}
                />
                <Label
                  label={"₱20,000.00"}
                  style={{ fontWeight: 600, fontSize: 18, color: "#037a03d2" }}
                />
              </View>
            </View>
            <View style={home_style.total_expense_container}>
              <Image
                source={require("../../assets/bimo.png")}
                style={{ width: 60, height: 60 }}
              />
              <View>
                <Label
                  label={"Total Expense"}
                  style={{ fontWeight: 400, fontSize: 12 }}
                />
                <Label
                  label={"₱20,000.00"}
                  style={{ fontWeight: 600, fontSize: 18, color: "#ff0000a9" }}
                />
              </View>
            </View>
          </View>
        </View>
        <Label
          label={"Master Your Money"}
          style={{
            fontSize: 15,
            marginTop: 18,
            marginBottom: 5,
          }}
        />
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          pagingEnabled={false}
        >
          <TipCards
            title={"Be Aware of Small Spends"}
            tip={"Coffee, snacks, subscriptions—they add up. Track them!”"}
          />
          <TipCards
            title={"Categorize to Cut Costs"}
            tip={"See which category eats most of your budget."}
          />
          <TipCards
            title={"Need or Want"}
            tip={"Ask this question before every purchase."}
          />
          <TipCards
            title={"Set Spending Limits"}
            tip={"Control overspending with monthly category caps."}
          />
          <TipCards
            title={"Avoid Impulse Buys"}
            tip={"Wait 24 hours before big purchases."}
          />
          <TipCards
            title={"Know All Your Sources"}
            tip={"Track salary, freelance gigs, side hustles, and more."}
          />
          <TipCards
            title={"Save Before You Spend"}
            tip={"Allocate a % of income to savings first."}
          />
          <TipCards
            title={"Grow Your Income"}
            tip={"Consider learning new skills to increase earning power."}
          />
          <TipCards
            title={"Celebrate Progress"}
            tip={"Every income increase is a win. Keep going!"}
          />
          <TipCards
            title={"Record Every Peso"}
            tip={"Log even the smallest earnings to build habits."}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export const home_style = StyleSheet.create({
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
  bmo_clickable_container: {
    padding: 10,
    marginTop: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#36c4a571",
  },
  insight_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insight_filter: {
    width: "40%",
    borderWidth: 0.8,
    borderColor: "black",
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: "center",
    height: 40,
  },
  insight_item_holder: {
    gap: "0.5%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total_income_container: {
    width: "49.5%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#36c4a571",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  total_expense_container: {
    width: "49.5%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#36c4a571",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
});
