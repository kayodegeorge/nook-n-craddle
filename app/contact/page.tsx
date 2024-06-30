import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const riffic = localFont({
  src: "../../fonts/riffic-free.ttf",
  display: "swap",
});

export default function Contact() {
  return (
    <main className="bg-[#FEF7F6]">
      <section className="flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-lg space-y-10">
          <h1
            className={`${riffic.className} text-center text-4xl leading-[1.2]`}
          >
            Book an appointment
          </h1>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="name">
                Name
              </label>

              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="name"
                placeholder="Full name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="name">
                Email
              </label>

              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="name"
                placeholder="Your email"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="name">
                Date
              </label>

              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="name"
                placeholder="Select date"
                type="date"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="name">
                Date
              </label>

              <textarea
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="name"
                placeholder="Write your description here"
              />
            </div>

            <button
              className="w-full rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium"
              type="submit"
            >
              Book appointment
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
