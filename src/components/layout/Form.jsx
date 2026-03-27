import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="w-full mt-7 flex flex-col items-start gap-4 px-5"
    >
      <h2 className="text-start text-(--color-text) text-5xl font-bold mb-4 w-60">
        Let's Work <span className="text-(--color-text-span)">Together</span>
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <div className="flex flex-col md:flex-row gap-2.5 w-full">
          <div className="flex flex-col w-full md:w-1/2 min-w-0">
            <label htmlFor="name" className="text-(--color-text-p)">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-(--background-area) rounded-lg p-3 text-(--color-text) outline-none"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 min-w-0">
            <label htmlFor="email" className="text-(--color-text-p)">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-(--background-area) rounded-lg p-3 text-(--color-text) outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="text-(--color-text-p)">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject..."
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-(--background-area) rounded-lg p-3 text-(--color-text) outline-none"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-(--color-text-p)">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-(--background-area) rounded-lg p-3 text-(--color-text) outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="bg-(--color-highlight) text-(--color-text) font-semibold px-6 py-3 rounded-lg disabled:opacity-60"
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>

        {status.success && (
          <p className="text-green-400 text-sm">
            Message sent successfully.
          </p>
        )}

        {status.error && (
          <p className="text-red-400 text-sm">
            {status.error}
          </p>
        )}
      </form>
    </section>
  );
}