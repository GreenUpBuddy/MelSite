"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ContactForm.css"; // Import CSS file

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {submitted && <p className="success-message">Message sent successfully!</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Phone Number Input */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^[0-9]{10,15}$/, message: "Enter a valid phone number (10-15 digits)" },
            })}
          />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label>Message</label>
          <textarea {...register("message", { required: "Message cannot be empty" })} rows={4}></textarea>
          {errors.message && <p className="error-message">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
