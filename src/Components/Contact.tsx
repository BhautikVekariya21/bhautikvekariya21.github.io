import React, { useState } from 'react';
import RotatingCircle from './Circle';
import emailjs from "emailjs-com"

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");
    
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAIL_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.warn("EmailJS credentials not configured. Simulated submission.");
      setTimeout(() => {
        setStatus("Message Sent Successfully! ✨ (Local Simulation)");
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1000);
      return;
    }

    try {
      emailjs.sendForm(
        serviceId,
        templateId,
        event.target as HTMLFormElement,
        userId
      )
        .then(() => {
          setStatus("Message Sent Successfully! ✨");
          setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          setStatus("Error sending message: " + (error?.text || JSON.stringify(error)));
        });
    } catch (error) {
      console.error("Synchronous EmailJS error:", error);
      setStatus("Error: " + (error as Error).message);
    }
  };

  return (
    <div className="w-[100%] flex flex-col mb-10" id='contact'>
      <div className='text-4xl md:text-6xl mb-4 text-white'> CONTACT</div>
      <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
      <div className="w-full flex flex-row justify-between">
        <div className="w-1/2 flex flex-col md:flex-row gap-4 md:gap-40 text-sm md:text-base">
          <div>
            <h2 className="text-sm md:text-2xl font-[300] text-white">CONTACT</h2>
            <a href="mailto:bhautikvekariya1123@gmail.com" className="text-sm md:text-lg text-[#686868] hover:text-gray-300 transition-colors">bhautikvekariya1123@gmail.com</a>
          </div>
          <div>
            <h2 className="text-sm md:text-2xl font-[300] text-white">SOCIALS</h2>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/bhautik-vekariya-253676272/" className="text-[#686868] block hover:text-gray-300 transition-colors">LinkedIn</a>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/BhautikVekariya21" className="text-[#686868] block hover:text-gray-300 transition-colors">GitHub</a>
          </div>
        </div>
        <div className='w-1/2 flex justify-end'>
          <RotatingCircle />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mt-10">
        <div className="w-full md:w-2/3 mt-4 mr-10 text-white">
          <div className="text-7xl md:text-9xl font-[600] leading-none">
            LET'S
          </div>
          <div className="text-7xl md:text-9xl font-[600] leading-none text-right">
            CONNECT
          </div>
        </div>
        <div className="w-full md:w-1/2 m-0 mt-6 md:m-10">
          <div className='w-full'>
            <form onSubmit={submitForm}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white text-white transition-colors"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white text-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white text-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white text-white transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col items-end">
                <button
                  type="submit"
                  className="bg-neutral-600 text-white px-8 py-2 rounded-full hover:bg-neutral-700 cursor-pointer transition-colors">
                  SUBMIT
                </button>
                {status && (
                  <p className={`mt-2 text-sm font-medium ${status.startsWith("Error") ? "text-red-500" : status.startsWith("Sending") ? "text-gray-400" : "text-emerald-500"}`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contacts;
