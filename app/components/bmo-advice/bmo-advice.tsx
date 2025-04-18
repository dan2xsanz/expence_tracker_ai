import React, { Fragment, useEffect, useRef } from "react";
import { TipCards } from "../tip-cards/tip-cards";
import { Dimensions, ScrollView } from "react-native";
import Label from "../label/label";

export const BmoAdvices = () => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
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
    </Fragment>
  );
};
