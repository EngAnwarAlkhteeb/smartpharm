import React, { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  // baseURL: "https://api.deepseek.com",
  // apiKey: "sk-57e62747f59c400baa1b1b440557fe13",
  dangerouslyAllowBrowser: true,
});
const ChatAI: React.FC = () => {
  // State to manage user input and chat history
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle sending a message to the AI
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the chat history
    setChatHistory((prev) => [...prev, { role: "user", content: userInput }]);
    setUserInput(""); // Clear the input field
    setIsLoading(true); // Show loading indicator

    try {
      // Call the DeepSeek API
      const response = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
        //   { role: "user", content: userInput },
        ],
        model: "deepseek-chat",
      });

      // Extract the AI's response
      const aiMessage =
        response.choices[0].message.content || "No response from AI.";

      // Add the AI's response to the chat history
      setChatHistory((prev) => [...prev, { role: "ai", content: aiMessage }]);
    } catch (error) {
      console.error("Error communicating with DeepSeek API:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, I couldn't process your request." },
      ]);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1>Chat with AI</h1>

      {/* Chat History */}
      <div
        style={{
          width: "400px",
          height: "300px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "10px",
            }}
          >
            <strong>{msg.role === "user" ? "You:" : "AI:"}</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div style={{ display: "flex", width: "400px" }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px 0 0 5px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAI;

// <div>
//   <div>
//     <Link className="d-flex justify-content-center mt-5" to="/">
//       <button
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           fontSize: "16px",
//           backgroundColor: "#0d6efd",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Back to Home
//       </button>
//     </Link>
//   </div>
// </div>
