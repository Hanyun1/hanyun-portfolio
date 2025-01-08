"use client";

import ConfirmPopUp from "@/components/contact/ConfirmPopUp";
import Info from "@/components/contact/Info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanygjya");
  const [dialogVisible, setDialogVisible] = useState(false);

  // Open dialog after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setDialogVisible(true);
    }
  }, [state.succeeded]);

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <section
      id="contact"
      className="container pt-20 items-center justify-between"
    >
      <div className="container p-4 flex flex-col gap-5">
        <div className="text-2xl font-bold text-center bg-gradient-to-r from-transparent via-gray-100">Contact Me</div>

        {/* personal info */}
        <div className="border-l-2 p-6 w-fit">
          <Info />
        </div>

        

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xanygjya"
          method="POST"
          className="p-4 flex flex-col gap-6 bg-gray-100 rounded"
        >
          <div className="text-md text-gray-500">
          If you have any questions or just want to say hi, feel free to send me
          any messages.
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="firstname"
              name="firstname"
              placeholder="Firstname *"
              required
            />
            <Input type="lastname" name="lastname" placeholder="Lastname" />
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
            />
            <Input type="tel" name="phone" placeholder="Phone Number" />
          </div>
          <Textarea name="message" placeholder="Type your message here." />

          <Button
            type="submit"
            disabled={state.submitting}
            size="lg"
            className="rounded items-center container justify-center max-w-40 text-md px-2 bg-bright font-medium hover:bg-gray-500 hover:text-bright"
          >
            {state.submitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>

      {/* pop up dialog to indicate message send */}
      {state.succeeded && dialogVisible && (
        <ConfirmPopUp
          title="Message Sent!"
          description="Congratulations, you have successfully contacted me. I'll respond as soon as possible."
          onClose={closeDialog}
        />
      )}
    </section>
  );
};

export default Contact;
