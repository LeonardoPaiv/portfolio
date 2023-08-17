"use client";

import Button from "@/components/Buttons/Button";
import InputText from "@/components/inputs/InputText";
import { FormEvent, useState } from "react";

const Page = () => {
  const [summary, setSummary] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `feature still in progress...\nbut son will be able to send emails to me. Thank you for your interest, if you want you can send a email for: leopaiva45@gmail.com`
    );
    console.log({ summary, email, message });
  };

  const handleReset = () => {
    setEmail("");
    setMessage("");
    setSummary("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="w-full md:w-1/2 "
      >
        <InputText
          id="summary"
          label="Summary"
          type="text"
          setValue={setSummary}
          value={summary}
        />
        <InputText
          id="copymail"
          label="Email for copy (optional)"
          type="email"
          setValue={setEmail}
          value={email}
        />
        <label className="block" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full text-black p-1"
          id="message"
          cols={30}
          rows={10}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <div className="flex w-full justify-around mt-2">
          <Button type="reset" color="yellow">
            Clear
          </Button>
          <Button type="submit" color="green">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
