import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [dynamicText, setDynamicText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["AutoIntern", "AI"];

  useEffect(() => {
    const handleTyping = () => {
      const currentMessage = messages[loopNum % messages.length]; 
      const updatedText = isDeleting
        ? currentMessage.substring(0, dynamicText.length - 1)
        : currentMessage.substring(0, dynamicText.length + 1);

      setDynamicText(updatedText);

      if (!isDeleting && updatedText === currentMessage) {

        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {

        setIsDeleting(false);
        setLoopNum(loopNum + 1); 
      }
      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [dynamicText, isDeleting, typingSpeed, loopNum, messages]);

  return (
    <h1 className="text-4xl font-bold">
      Apply with{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {dynamicText}
      </span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default TypingEffect;