import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';


const Testimonialarray = [
    {
        id:'1',
        name: "Kiran Gowda",
        comment: "VANG Technologies' dedication to the hospitality industry is evident through their specialized software solutions. From Front Office Management to MRP Management, their products streamline operations, boosting efficiency and fostering growth. Their commitment to understanding customer needs sets them apart as a trusted partner.",
        post: "Owner of Hotel ATG Royal Inn",
        places:"Hotel ATG Royal Inn"
    },
    {
        id:'2',
        name: "Tejas Gowda",
        comment: "The comprehensive range of services offered by VANG Technologies, including Door Lock Integration and Power Automation Integration, complements their tailored software solutions perfectly. Their customer-centric approach ensures that each solution is designed to meet the unique needs of the hospitality sector, driving business growth and efficiency.",
        post: "Owner of UT Group",
        places:"UT Group"
    },
    {
        id:'3',
        name: "Bharat Gowda",
        comment: "VANG Technologies stands out with their innovative and quality-driven solutions for the hospitality industry. Their deep industry understanding and focus on customer satisfaction have positioned them as a leader in the field, optimizing operations and empowering businesses to reach new heights.",
        post: "Owner of Tirupathi Group",
        places:"Tirupathi Group"
    },
]
export default function Testimonial() {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prev) => (prev === Testimonialarray.length - 1 ? 0 : prev + 1));
      };
    
      const prevTestimonial = () => {
        setCurrent((prev) => (prev === 0 ? Testimonialarray.length - 1 : prev - 1));
      };
    return (
        <div className="container mx-auto lg:px-5 px-1 max-w-4xl">
        <div className="flex justify-between items-center mb-4 h-[24rem]">
          <button className="lg:text-3xl text-xs md:text-2xl" onClick={prevTestimonial}>
            <ChevronLeft/>
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={Testimonialarray[current].id}
              initial={{ opacity: 0, x:10}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 0, x:-10}}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="lg:max-w-2xl md:max-w-lg max-w-sm mx-auto">
                {/* <img
                  src="/Images/testimonial-img.svg"
                  alt="testimonial"
                  className="inline-block md:w-6 w-4 lg:w-8 lg:h-8 text-gray-400 mb-8"
                /> */}
                <p className="leading-relaxed lg:text-lg text-xs md:text-sm">
                  {(Testimonialarray[current].comment)}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {(Testimonialarray[current].name)}
                </h2>
                <p className="text-gray-500">{(Testimonialarray[current].post)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button className="lg:text-3xl text-xs md:text-2xl" onClick={nextTestimonial}>
            <ChevronRight />
          </button>
        </div>
      </div>
    )
}