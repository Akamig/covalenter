import { useEffect, useState } from "react";
import fetch from "unfetch";
import useSWR from "swr";
import logo from "./logo.svg";
import "./App.css";
const url = "http://localhost:8080/chat";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages(messages.concat(event.target.value));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });
    setMessage("");
  };

  const subscribe = async (url: string) => {
    let response = await fetch(url);
    if (response.status == 502) {
      await subscribe(url);
    } else if (response.status != 200) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await subscribe(url);
    } else {
      let msg = await response.json();
      setMessages(messages.concat(msg.message));
      await subscribe(url);
    }
  };

  useEffect(() => {
    subscribe(url);
  }, []);

  return (
    <div className="App">
      <div className="Main">
        <div className="MessageWrapper">
          <div className="TopContent">
            <img src={logo} className="logo" alt="logo" />
            <span className="TopHeader">COVALENTER</span>
          </div>
          <div className="ScrollContent">
            <ol className="ScrollInner">
              {messages.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ol>
          </div>
          <form className="Input">
            <input
              className="text"
              placeholder="메시지를 입력하슈."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
            <button
              className="sendButton"
              onClick={(event) => sendMessage(event)}
            >
              보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
