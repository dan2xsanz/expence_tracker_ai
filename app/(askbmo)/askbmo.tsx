import { View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import TextInputField from "../components/text-input/text-input";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";
import { Loading } from "../components/loading/loading";
import { SendIcon } from "../components/icons/icons";
import { chatBmo } from "../operations/chatbmo";
import Label from "../components/label/label";
import { useState } from "react";

export default function AskBmoScreen() {
  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // INPUTTED QUESTION
  const [inputtedQuestion, setInputtedQuestion] = useState<
    string | undefined
  >();

  // HIDE INSTRUCTION STATE
  const [hideInstruction, setHideInstruction] = useState<boolean>(false);

  // CONVERSATION STATE
  const [conversation, setConversation] = useState<string[]>([]);

  // ASK BMO QUESTION  ON CLICK SEACH BUTTON
  const onAskBmoQuestion = (question: string | undefined) => {
    setHideInstruction(true);
    if (question) {
      let updatedConversation = [...conversation, question];
      setInputtedQuestion(undefined);
      chatBmo(setLoading, question, updatedConversation, setConversation);
    }
  };

  return (
    <View style={ask_bmo.main_container}>
      <Loading loading={loading} />
      <View style={ask_bmo.container}>
        <View style={ask_bmo.header_container}>
          <Label label={"Ask BMO"} size={"medium"} style={{ fontSize: 20 }} />
        </View>

        <View style={ask_bmo.chat_heads_container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              height: Dimensions.get("window").height - 100,
            }}
          >
            <View style={ask_bmo.chat_heads_holder}>
              {conversation.length <= 0
                ? !hideInstruction && (
                    <View style={ask_bmo.intruction_container}>
                      <Image
                        source={require("../../assets/bmoskate.png")}
                        style={{ width: 150, height: 150 }}
                      />
                      <Label
                        label={
                          "Wanna start a conversation? Just ask me a question!"
                        }
                        size={"medium"}
                        style={{ fontSize: 13, flexWrap: "wrap" }}
                      />
                      <Label
                        label={"Type below."}
                        size={"medium"}
                        style={{ fontSize: 13, flexWrap: "wrap" }}
                      />
                    </View>
                  )
                : conversation.map((data, index) => {
                    if (index % 2 === 0) {
                      return (
                        <View key={index} style={ask_bmo.ai_response_container}>
                          <Label
                            size={"small"}
                            label={`${data}`}
                            style={{ fontStyle: "italic", padding: 5 }}
                          />
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={ask_bmo.user_container}>
                          <Label
                            label={data}
                            size={"small"}
                            style={{ fontStyle: "italic", padding: 5 }}
                          />
                        </View>
                      );
                    }
                  })}
            </View>
          </ScrollView>
          <View
            style={{
              paddingTop: 5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInputField
              size="small"
              placeHolder={"Ask me question..."}
              style={{ width: "90%" }}
              value={inputtedQuestion}
              onChange={(data) => setInputtedQuestion(data)}
            />
            <SendIcon onPress={() => onAskBmoQuestion(inputtedQuestion)} />
          </View>
        </View>
      </View>
    </View>
  );
}

const ask_bmo = StyleSheet.create({
  main_container: {
    height: "100%",
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
  chat_heads_container: {
    height: "95%",
    justifyContent: "space-between",
  },
  chat_heads_holder: {
    width: "100%",
    padding: 10,
  },
  intruction_container: {
    width: "100%",
    marginTop: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  ai_response_container: {
    width: "auto",
    height: "auto",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginBottom: 20,
    alignSelf: "flex-end",
    backgroundColor: "#0e725c3b",
  },
  user_container: {
    width: "auto",
    height: "auto",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 20,
    alignSelf: "flex-start",
    backgroundColor: "#47867993",
  },
});
