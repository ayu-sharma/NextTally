import React from "react";
import UpArrow from "../public/images/UpArrow.svg";
import Image from "next/image";
const reviews = [
  {
    line1: "NextTally makes revenue tracking a breeze!",
    line2: "I love how it simplifies tax calculations.",
    line3: "A must-have tool for theater management.",
  },
  {
    line1: "Managing finances has never been easier.",
    line2: "NextTally provides accurate profit/loss insights.",
    line3: "Highly recommended for business owners.",
  },
  {
    line1: "The clean interface makes everything so smooth.",
    line2: "I appreciate the detailed reporting features.",
    line3: "NextTally takes the guesswork out of accounting.",
  },
  {
    line1: "From ticket sales to taxes, it covers it all!",
    line2: "NextTally is the partner every theater needs.",
    line3: "Simplifies my workflow and saves time.",
  },
  {
    line1: "Custom line to balance line1 rows.",
    line2: "",
    line3: "",
  },
  {
    line1: "Another line for balancing purposes.",
    line2: "",
    line3: "",
  },
];
export default function ReviewSection() {
  return (
    <>
      <div className="flex flex-col items-center my-16 relative">
        <div className="flex ml-64">
          {reviews.map((reviewline, index) => (
            <div className=" p-2 ml-3 border-2 border-gray-400 text-sm whitespace-nowrap rounded-3xl">
              {reviewline.line1}
            </div>
          ))}
        </div>
        <div className="flex mt-5 -ml-64">
          {reviews.map(
            (reviewline, index) =>
              reviewline.line2 && (
                <div
                  key={`line2- ${index}`}
                  className=" p-2 mr-3 border-2 whitespace-nowrap text-sm border-gray-400 rounded-3xl"
                >
                  {reviewline.line2}
                </div>
              )
          )}
        </div>
        <div className="flex mt-5 ml-64">
          {reviews.map(
            (reviewline, index) =>
              reviewline.line3 && (
                <div
                  key={`line3- ${index}`}
                  className=" p-2 ml-3 border-2 text-sm whitespace-nowrap border-gray-400 rounded-3xl"
                >
                  {reviewline.line3}
                </div>
              )
          )}
          <div className="absolute -bottom-12 right-16 font-serif font-normal">
            <div className="flex items-center justify-center gap-2">
              <Image src={UpArrow} alt="Arrow-Up" height={20} width={40} />
              <p className="font-tragicmarker text-xl">
                We have 500 more like this...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
