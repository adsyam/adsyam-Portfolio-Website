import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nt23rvs', 'template_abhzptc', form.current, 'lXnRo2DFDwUdWdDyw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

    return (
    <section className="flex h-screen justify-center text-black">
      <div className="flex flex-col gap-4">
        <h1 className="text-stone-200 text-center text-2xl font-bold">Contact Me</h1>
        <div className="text-stone-200 border border-stone-100/10 p-5 rounded-md bg-[#e4e4e710] flex flex-col text-center gap-1">
          <a href="https://github.com/adsyam" target="_blank" rel="noreferrer" className="logo flex justify-center items-center gap-2 hover:scale-105 duration-200"><FaGithub/><span> adsyam</span><HiExternalLink/></a>
          <span className="logo flex justify-center items-center gap-2"><IoIosMail/> yambaoadrianne@gmail.com</span>
          <a href="https://www.linkedin.com/in/adrianne-yambao/" target="_blank" rel="noreferrer" className="logo flex justify-center items-center gap-2 hover:scale-105 duration-200"><FaLinkedin/> yambaoadrianne@gmail.com<HiExternalLink/></a>
        </div>
        <form action="" ref={form} onSubmit={sendEmail} className="flex justify-center flex-col gap-4 border border-stone-100/10 p-5 rounded-md bg-[#e4e4e710]">
          <input type="text" name="user_name" placeholder="Full name" className="p-1 rounded-md outline-none" />
          <input type="email" name="user_email" placeholder="Email" className="p-1 rounded-md outline-none"  />
          <input type="text" name="subject" placeholder="Subject" className="p-1 rounded-md outline-none" />
          <textarea name="message" cols={30} rows={10} className="p-2 rounded-md outline-none opacity-90"/>
          <button className="text-stone-200">Send message</button>
        </form>
      </div>
    </section>
    )
}