import React from "react";
import { useEffect, useRef, useState } from "react";
import Translation from "../components/Translation";
// import Translation from "./components/Translation";
import userImg from '../assest/icon-5359553_1280.webp'
import chatGptImg from '../assest/ChatGPT_logo.svg';

function Chatbox() {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef()
  const [state, setstate] = useState({
    input: "",
    isLoading: false,
    chat: [],
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [state.chat])

  const getChatObject = ({ type, message }) => ({
    id: Math.random(),
    type,
    message,
  });

  const fetchAnswer = async (question) => {
    return await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJwcnRobW5na2pwMTk5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLW5wanFrWE9GYzZGSnVMNmN1c0FXVTRGaCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTI4MzE5NTYyMDUzNDkzMTY1MTkiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc4Nzg1NzI4LCJleHAiOjE2Nzk5OTUzMjgsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.fvDGBrZSfwPWspjCeKmet46stMR6fh_6GGJIb9-CthwkvDI0VqSe8J4OhOde2nrgrjb5SmkinijtzWs3IBhQrifp__lN8y-joO9Uh0sUnb6m8DO_hLMYBrArQBH2OqICdgH4dhFFrVe0IybESKV5FVso6JrI2Re-4nmcGPaRTF1hNzMOvFYwBn4UwR-T9Wc2MciPYqb798vbWhppnlvn2hGKPhR3M0fvgFVH5D-v7eIoTZo3zYqYWer-GnOdNDEq0yJkFaxvpgoRUiXQaE-n_sHAl0EX1zI-2UUtx1-g9mu0lM3rdxlssWe8WGgzVjh8OCNa3oU2qKkRSJZzG81D9w`,
        },
        body: JSON.stringify({
          prompt: `${question}`,
          temperature: 0.5,
          max_tokens: 50,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => res.choices[0].text)
      .catch(() => "Got error from GPT");
  };

  const onInputChange = (value) =>
    setstate((prevState) => ({ ...prevState, input: value }));

  const onSubmit = async () => {
    setIsLoading(true);
    setstate((prevState) => ({
      ...prevState,
      isLoading: true,
      input: "",
      chat: [
        ...prevState.chat,
        getChatObject({ type: "me", message: prevState.input }),
      ],
    }));

    const ans = await fetchAnswer(state.input);

    setstate((prevState) => ({
      ...prevState,
      isLoading: false,
      chat: [...prevState.chat, getChatObject({ type: "gpt", message: ans })],
    }));
    setIsLoading(false);
  };

  return (
    <>
   {/* <div class="sidebar">
 
</div> */}
      <div className="">
        <div className="app container"  ref={ref}>
          {state.chat.map((choice, index) => (
            <div
              id="answer"
              key={index}
              className={`chat-box ${choice.type === "gpt" ? "bot" : "user"}`}
            >
            {choice.type == "gpt" && <img width='25px' height='25px' src={chatGptImg} />}
              {choice.message}
            {choice.type !== "gpt" && <img width='25px' height='25px' src={userImg} />}
            </div>
          ))}
        </div>

        <Translation
          doStuff={onSubmit}
          setInput={onInputChange}
          value={state.input}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default Chatbox;
