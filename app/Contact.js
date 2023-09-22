import { AiFillGithub, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

function Contact({}) {
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3np8zfm",
        "template_h89qzyd",
        e.target,
        "AVRzpsyJ3MzLmwy8w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className=" pb-20">
        <div>
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-bold py-1 dark:text-white">
              Contact
              {/* Get In Touch with me */}
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-sm sm:text-base py-2 leading-5 sm:leading-8 text-gray-600 dark:text-gray-200">
              Let's Get in Touch, have a project idea or want to collaborate?{" "}
              <span className="text-teal-500">
                Don't hesitate to get in touch.
              </span>{" "}
              I'm always excited to hear about new opportunities and discuss how
              I can help you achieve your digital goals. Whether you have
              questions or just want to say hello, I'm here to assist you. Let's
              start building something amazing together!
            </p>
          </Reveal>
        </div>
        {/* form */}
        <form
          onSubmit={sendMail}
          className="flex py-10 flex-col gap-3 items-center mx-auto w-4/5  lg:w-1/2"
        >
          <div className="w-full flex items-center gap-16 flex-col lg:flex-row">
            <div className="w-12 text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 hidden lg:flex">
              <AiOutlineMail />
            </div>
            <p className="rounded-md text-center px-3 py-2 w-full text-base sm:text-lg font-semibold text-gray-900 dark:text-white shadow-sm ">
              Get in touch with me
            </p>
          </div>
          <div className="w-full flex  flex-col gap-1 lg:flex-row lg:gap-16">
            <label className="flex text-base font-medium w-12 leading-6 text-gray-900 dark:text-white">
              Name <span className="text-teal-600">*</span>
            </label>
            <div className="flex-1">
              <input
                name="name"
                type="text"
                className="block w-full p-2 border-1 border-indigo-white/100  h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-gray-900 dark:placeholder:text-gray-200 "
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 lg:flex-row lg:gap-16">
            <label className="flex text-base font-medium w-12 leading-6 text-gray-900 dark:text-white">
              Email <span className="text-teal-600">*</span>
            </label>
            <div className="flex-1">
              <input
                name="email"
                type="email"
                className="block w-full p-2 border-1 border-indigo-white/100  h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-gray-900 dark:placeholder:text-gray-200"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 lg:flex-row lg:gap-16">
            <label className="flex text-base font-medium w-12 leading-6 text-gray-900 dark:text-white">
              Subject <span className="text-teal-600">*</span>
            </label>
            <div className="flex-1">
              <input
                name="subject"
                type="text"
                className="block w-full p-2 border-1 border-indigo-white/100  h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-gray-900 dark:placeholder:text-gray-200"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 lg:flex-row lg:gap-16">
            <label className="flex text-base font-medium w-12 leading-6 text-gray-900 dark:text-white">
              Message <span className="text-teal-600">*</span>
            </label>
            <div className="flex-1">
              <textarea
                name="message"
                rows={14}
                className="block w-full border-1 border-indigo-white/100  dark:bg-gray-900 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 lg:flex-row lg:gap-16">
            <div className="w-12" />
            <input
              type="submit"
              value="send"
              className=" bg-teal-600  lg:ml-2 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            />
          </div>
        </form>
        <hr />
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a target="__blank" href="https://github.com/zuu-maker">
            <AiFillGithub className="hover:scale-105 cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
