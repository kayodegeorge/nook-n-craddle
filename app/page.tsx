"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import AnimatedAgeSection from "@/components/AnimatedAgeSection";
import AnimatedFlexibleSchedulingSection from "@/components/AnimatedFlexibleSchedulingSection";
import AnimatedHeroSection from "@/components/AnimatedHero";
import AnimatedReviewsSection from "@/components/AnimatedReviewsSection";
import AnimatedSafeSection from "@/components/AnimatedSafeSection";
import AnimatedWaveSVG from "@/components/AnimatedWaveSvg";

const riffic = localFont({
  src: "../fonts/riffic-free.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <main className="divide-y-2 divide-[#121321] border-b-2 border-[#121321] bg-[#FEF7F6]">
      <AnimatedHeroSection />

      {/* <section className="grid grid-cols-1 divide-y-2 divide-[#121321] md:grid-cols-2 md:divide-x-2 md:divide-y-0">
        <div className="w-full bg-[#FDFDFD] px-4 py-28 md:px-[6.25rem] md:py-[10.75rem]">
          <h2
            className={`${riffic.className} text-center text-4xl leading-[1.2] md:text-left`}
          >
            Flexible scheduling
          </h2>

          <p className="mt-3 max-w-lg text-center md:text-left">
            Tailored to meet your needs, we offer adaptable babysitting
            schedules to accommodate your unique requirements and ensure
            convenience for your family.
          </p>
        </div>

        <div className="flex h-full min-h-80 w-full flex-col items-center justify-between bg-[#F7CD35]">
          <svg
            width="200"
            height="97"
            viewBox="0 0 200 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3754 -70.5244C48.8397 -88.7129 73.8786 -98.9481 100 -98.9776C126.122 -98.9479 151.161 -88.7123 169.625 -70.5239C188.088 -52.3362 198.47 -27.6818 198.5 -1.97041C198.47 23.7411 188.088 48.3957 169.625 66.5836C151.161 84.7722 126.122 95.0076 100 95.0373C73.8785 95.0078 48.8395 84.7725 30.3752 66.5838C11.9118 48.396 1.52999 23.7412 1.5 -1.97041C1.53009 -27.682 11.9119 -52.3366 30.3754 -70.5244ZM100.002 -42.7829L99.9988 -42.7829C89.028 -42.7706 78.5057 -38.4722 70.7414 -30.8238C62.9764 -23.1747 58.6043 -12.799 58.5917 -1.9716L58.5917 -1.9681C58.6043 8.85918 62.9764 19.2348 70.7415 26.8838C78.5058 34.532 89.0281 38.8302 99.9988 38.8423H100.002C110.973 38.8301 121.495 34.532 129.259 26.8837C137.024 19.2347 141.396 8.85906 141.408 -1.96813V-1.97156C141.396 -12.7988 137.024 -23.1746 129.259 -30.8237C121.495 -38.4721 110.973 -42.7705 100.002 -42.7829Z"
              fill="black"
              stroke="black"
              strokeWidth="3"
            />
          </svg>

          <svg
            width="200"
            height="99"
            viewBox="0 0 200 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M189.099 10.7384C185.643 7.33388 181.54 4.6333 177.025 2.79081C172.509 0.948314 167.669 0 162.782 0C157.894 0 153.054 0.948314 148.539 2.79081C144.023 4.6333 139.92 7.33388 136.464 10.7384L100 46.6582L63.5359 10.7384C60.0798 7.33388 55.9769 4.6333 51.4614 2.79081C46.9458 0.948314 42.1061 0 37.2185 0C32.3309 0 27.4911 0.948314 22.9756 2.79081C18.46 4.6333 14.3571 7.33388 10.901 10.7384C7.44498 14.1428 4.70349 18.1845 2.83308 22.6327C0.962674 27.0808 0 31.8483 0 36.663C0 41.4777 0.962674 46.2452 2.83308 50.6933C4.70349 55.1415 7.44498 59.1832 10.901 62.5876L47.3652 98.5075L10.901 134.427C7.44499 137.832 4.70349 141.874 2.83308 146.322C0.962676 150.77 0 155.537 0 160.352C0 165.167 0.962676 169.934 2.83308 174.382C4.70349 178.83 7.44499 182.872 10.901 186.277C14.3571 189.681 18.46 192.382 22.9756 194.224C27.4911 196.067 32.3308 197.015 37.2184 197.015C42.106 197.015 46.9458 196.067 51.4613 194.224C55.9769 192.382 60.0798 189.681 63.5358 186.277L99.9999 150.357L136.464 186.277C139.92 189.681 144.023 192.382 148.539 194.224C153.054 196.067 157.894 197.015 162.781 197.015C167.669 197.015 172.509 196.067 177.024 194.224C181.54 192.382 185.643 189.681 189.099 186.277C192.555 182.872 195.296 178.83 197.167 174.382C199.037 169.934 200 165.167 200 160.352C200 155.537 199.037 150.77 197.167 146.322C195.296 141.874 192.555 137.832 189.099 134.427L152.635 98.5075L189.099 62.5876C192.555 59.1832 195.296 55.1415 197.167 50.6933C199.037 46.2452 200 41.4777 200 36.663C200 31.8484 199.037 27.0809 197.167 22.6327C195.297 18.1845 192.555 14.1428 189.099 10.7384Z"
              fill="black"
            />
          </svg>
        </div>
      </section> */}

      <section className="flex justify-center py-20 md:py-32">
        <div className="flex flex-col items-center bg-[#FEF7F6] md:flex-row">
          <div className="">
            <Image
              className="object-contain"
              src="/pic-interlude-1.png"
              alt=""
              width={400}
              height={200}
            />
          </div>

          <div className="">
            <Image
              className="object-contain"
              src="/pic-interlude-2.png"
              alt=""
              width={400}
              height={200}
            />
          </div>

          <div className="">
            <Image
              className="object-contain"
              src="/pic-interlude-3.png"
              alt=""
              width={400}
              height={200}
            />
          </div>
        </div>
      </section>

      <AnimatedFlexibleSchedulingSection />

      <AnimatedAgeSection />

      {/* <section className="flex justify-center px-4 py-24 md:px-[6.25rem] md:py-32">
        <div className="grid grid-cols-1 gap-7 bg-[#FEF7F6] md:grid-cols-3">
          {reviews.map((review) => (
            <div
              className="space-y-4 rounded-lg border-2 border-[#121321] bg-[#FDFDFD] px-6 pb-14 pt-8 drop-shadow-[8_8_0_rgba(18,19,33,1)]"
              key={review.name}
            >
              <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-[#121321]">
                <Image src={review.image} alt="" fill />
              </div>

              <h3 className={`${riffic.className} text-3xl text-[#121321]`}>
                {review.name}
              </h3>
              <p>&quot;{review.review}&quot;</p>
            </div>
          ))}
        </div>
      </section> */}

      <AnimatedReviewsSection />

      {/* <section className="grid grid-cols-1 divide-y-2 divide-[#121321] md:grid-cols-2 md:divide-x-2 md:divide-y-0">
        <div className="w-full bg-[#FDFDFD] px-4 py-28 md:px-[6.25rem]">
          <h2
            className={`${riffic.className} text-center text-4xl leading-[1.2] md:text-left`}
          >
            Safe and clean environment
          </h2>

          <p className="mt-3 max-w-lg text-center md:text-left">
            Our priority is providing a secure and hygienic setting. We ensure a
            safe and clean environment for your peace of mind and your
            child&apos;s well-being.
          </p>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-[#F8D0E0]">
          <div className="flex flex-col gap-14 md:flex-row">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 0C51.4413 0.0210107 33.6487 7.40274 20.5257 20.5257C7.40275 33.6487 0.0210107 51.4413 0 70C0.0210108 88.5587 7.40275 106.351 20.5257 119.474C33.6488 132.597 51.4413 139.979 70 140C88.5587 139.979 106.351 132.597 119.474 119.474C132.597 106.351 139.979 88.5587 140 70C139.979 51.4413 132.597 33.6488 119.474 20.5258C106.351 7.40278 88.5587 0.0210373 70 0ZM97.9357 70C97.9273 77.4064 94.9814 84.507 89.7443 89.7441C84.5071 94.9812 77.4064 97.9271 70 97.9355C62.5936 97.9272 55.493 94.9813 50.2559 89.7442C45.0187 84.5071 42.0727 77.4064 42.0643 70C42.0574 66.327 42.7748 62.6887 44.1756 59.2932C45.5764 55.8978 47.633 52.8119 50.2278 50.2123C52.8225 47.6126 55.9044 45.5501 59.2972 44.1429C62.69 42.7357 66.327 42.0113 70 42.0113C73.673 42.0113 77.31 42.7357 80.7028 44.1429C84.0956 45.5501 87.1775 47.6126 89.7722 50.2123C92.367 52.8119 94.4236 55.8978 95.8244 59.2932C97.2252 62.6887 97.9426 66.327 97.9357 70Z"
                fill="black"
              />
            </svg>

            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132.37 7.63079C129.95 5.21153 127.078 3.29248 123.917 1.98319C120.757 0.673897 117.369 0 113.947 0C110.526 0 107.138 0.673897 103.977 1.98319C100.816 3.29248 97.9445 5.21153 95.5253 7.63079L70.0002 33.1556L44.4754 7.63079C42.0562 5.21153 39.1842 3.29245 36.0233 1.98315C32.8624 0.67386 29.4746 0 26.0533 0C22.6319 0 19.244 0.67386 16.0831 1.98315C12.9222 3.29245 10.0502 5.21153 7.63093 7.63079C5.21167 10.05 3.29259 12.9221 1.9833 16.083C0.674002 19.2439 0.000141573 22.6317 0.000141573 26.053C0.000141573 29.4744 0.674002 32.8622 1.9833 36.0231C3.29259 39.184 5.21167 42.0561 7.63093 44.4753L33.1557 69.9996L7.63064 95.5246C5.2114 97.9439 3.29244 100.816 1.98315 103.977C0.673869 107.138 0 110.525 0 113.947C0 117.368 0.673869 120.756 1.98315 123.917C3.29244 127.078 5.2114 129.95 7.63064 132.369C12.5165 137.255 19.1433 140 26.053 140C32.9627 140 39.5893 137.255 44.4752 132.369L70.0001 106.844L95.525 132.369C100.411 137.255 107.038 140 113.947 140C120.857 140 127.483 137.255 132.369 132.369C137.255 127.483 140 120.856 140 113.947C140 107.037 137.255 100.411 132.369 95.5246L106.845 69.9996L132.37 44.4748C137.255 39.5889 140 32.9624 140 26.0528C140 19.1432 137.255 12.5167 132.37 7.63079Z"
                fill="black"
              />
            </svg>

            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 0C51.4413 0.0210107 33.6487 7.40274 20.5257 20.5257C7.40275 33.6487 0.0210107 51.4413 0 70C0.0210108 88.5587 7.40275 106.351 20.5257 119.474C33.6488 132.597 51.4413 139.979 70 140C88.5587 139.979 106.351 132.597 119.474 119.474C132.597 106.351 139.979 88.5587 140 70C139.979 51.4413 132.597 33.6488 119.474 20.5258C106.351 7.40278 88.5587 0.0210373 70 0ZM97.9357 70C97.9273 77.4064 94.9814 84.507 89.7443 89.7441C84.5071 94.9812 77.4064 97.9271 70 97.9355C62.5936 97.9272 55.493 94.9813 50.2559 89.7442C45.0187 84.5071 42.0727 77.4064 42.0643 70C42.0574 66.327 42.7748 62.6887 44.1756 59.2932C45.5764 55.8978 47.633 52.8119 50.2278 50.2123C52.8225 47.6126 55.9044 45.5501 59.2972 44.1429C62.69 42.7357 66.327 42.0113 70 42.0113C73.673 42.0113 77.31 42.7357 80.7028 44.1429C84.0956 45.5501 87.1775 47.6126 89.7722 50.2123C92.367 52.8119 94.4236 55.8978 95.8244 59.2932C97.2252 62.6887 97.9426 66.327 97.9357 70Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </section> */}

      <AnimatedSafeSection />

      <section className="relative overflow-hidden bg-[#FEF7F6]">
        <div className="flex items-center justify-center">
          <div className="max-w-lg space-y-4 px-4 pb-12 pt-28 md:pb-0">
            <h2
              className={`${riffic.className} text-center text-4xl leading-[1.2]`}
            >
              We are a team of experts
            </h2>

            <p className="max-w-lg text-center leading-[1.5]">
              We are dedicated to creating a nurturing environment where kids
              can learn, play, and grow.
            </p>

            <div className="flex justify-center">
              <Link
                className="flex font-medium hover:text-button"
                href="/about"
              >
                Learn more
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 16.7362L18.7929 13.4433C19.1834 13.0528 19.1834 12.4196 18.7929 12.0291L15.5 8.73621"
                    stroke="#121321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 12.7362L4.5 12.7362"
                    stroke="#121321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <AnimatedWaveSVG />
      </section>

      <section className="flex items-center justify-center bg-[#FDFDFD]">
        <div className="max-w-lg space-y-4 py-24">
          <h2
            className={`${riffic.className} text-center text-4xl leading-[1.2]`}
          >
            Reach out to us
          </h2>

          <p className="max-w-lg text-center leading-[1.5]">
            Feel free to reach out to us for more information or to schedule a
            babysitting session
          </p>

          <div className="flex justify-center">
            <Link
              className="rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:bg-primary-black hover:text-white"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
