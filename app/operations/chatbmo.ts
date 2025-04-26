import { Alert } from "react-native";
import { ResponseInterface } from "../config";
import { ChatBmo } from "../service/chatbmo/chatbmo";

export const chatBmo = async (
  setLoading: (data: boolean) => void,
  data: string,
  conversation: string[],
  setConversation: (data: string[]) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await ChatBmo(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      setConversation([...conversation, response.resultData]);
    }
  } finally {
    setLoading(false);
  }
};
