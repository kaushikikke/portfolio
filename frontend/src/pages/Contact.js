import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_auxt5nl",   
        "template_tdfi7j8",  
        form.current,
        "N6E-1mMneDjBZmc_A"   
      )
      .then(
        () => {
          alert("Message sent successfully ");
        },
        () => {
          alert("Failed to send message ");
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="min-h-screen bg-[#0b1220] text-white px-6 py-20 flex justify-center items-center">

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-2xl mb-4 text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-3 bg-transparent border border-gray-500 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email ID"
          required
          className="w-full p-3 mb-3 bg-transparent border border-gray-500 rounded"
          />
        

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 mb-4 bg-transparent border border-gray-500 rounded"
        ></textarea>

        <button className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600">
          Send Message
        </button>

      </motion.form>
    </div>
  );
}

export default Contact;