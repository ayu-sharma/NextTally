import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Testimonialarray = [
  {
    id: "1",
    name: "Emily Carter",
    comment:
      "NextTally made managing our theater's finances so much easier! The intuitive interface and accurate calculations save us hours of work every month.",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    comment:
      "As a theater manager, I’ve struggled with keeping track of revenue and taxes. NextTally has been a game-changer, simplifying everything into one platform.",
  },
  {
    id: "3",
    name: "Sofia Hernandez",
    comment:
      "I love how NextTally streamlines financial management for theaters. It's efficient, easy to use, and has improved our overall productivity.",
  },
];
export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === Testimonialarray.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? Testimonialarray.length - 1 : prev - 1));
  };
  return (
    <>
      <div className="flex flex-col justify-center mx-3 md:mx-0 my-10">
        <div className="max-w-3xl w-full mx-auto">
        <h2 className="font-inter font-[450] text-3xl md:text-5xl md:leading-[1.15] antialiased text-primary -tracking-[0.021em] md:-tracking-[0.022em] text-left max-w-3xl w-full">
          Feedback That Inspires Us
        </h2>
        <h3 className="font-inter font-[350] text-lg md:text-xl antialiased text-slate-800 -tracking-[0.014em] md:-tracking-[0.017em] text-left mt-4 max-w-3xl w-full">
          Real experiences from those who trust us.
          <br /> NextTally empowers theaters with every smart calculation.
        </h3>
        </div>
        <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center w-full md:bg-transparent p-6 md:p-0 rounded-2xl relative mt-11 md:mt-0 bg-[#ccd5da]/30">
            <div className="flex items-center justify-between w-full relative h-[11rem] md:h-52">
                <button
                  className="lg:text-3xl text-xs md:text-2xl text-gray-400 rounded-xl p-2 hidden md:flex hover:bg-[#d4dce2]"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft />
                </button>
                <div className="flex h-[8rem] max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={Testimonialarray[current].id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col justify-between items-center w-full h-full fade-in_fade_in__1TQ1S">
                        <p className="text-xl md:text-2xl max-w-3xl -tracking-[0.019em] flex-1 flex items-center text-gray-500 md:text-primary">
                          {Testimonialarray[current].comment}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button
            className="lg:text-3xl text-xs md:text-2xl text-gray-400 p-2 rounded-xl  hidden md:flex hover:bg-[#d4dce2]"
            onClick={nextTestimonial}
          >
            <ChevronRight />
          </button>
              </div>
              <span className="inline-block h-1 w-10 rounded website-color-scheme mb-6"></span>
              <h2 className="antialiased text-base font-[550] font-inter -tracking-[0.011em]text-slate-800">
                {Testimonialarray[current].name}
              </h2>
            </div>
            <div className="flex justify-center gap-5 mt-6 items-center md:hidden">
          <button
            className="lg:text-3xl text-xs md:text-2xl text-gray-400 rounded-xl   p-2 hover:bg-[#d4dce2]"
            onClick={prevTestimonial}
          >
            <ChevronLeft />
          </button>
          <div className="border border-gray-400 h-6 inline-block"></div>
          <button
            className="lg:text-3xl text-xs md:text-2xl text-gray-400 p-2 rounded-xl hover:bg-[#d4dce2]"
            onClick={nextTestimonial}
          >
            <ChevronRight />
          </button>
          </div>
          </div>
      </div>
    </>
  );
}
