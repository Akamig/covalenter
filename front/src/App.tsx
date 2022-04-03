import React, { useEffect, useState } from "react";
import useSWR from "swr";
import logo from "./logo.svg";
import fetch from 'unfetch'
import "./App.css";

function App() {
  const [name, setName] = useState("me");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR(`localhost:8080/chat`, fetcher, {
    refreshInterval: 1000,
  });

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages((event) => messages.concat(message));
    setMessage("");
  };
  useEffect(() => {
    setMessages((data) => messages.concat(data));
    console.log(data);
  });
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
              {messages.map((message, i) => (
                <li key={i}>
                  {name}: {message}
                </li>
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
