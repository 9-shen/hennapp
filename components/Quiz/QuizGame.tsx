'use client';
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Photo = {
  id: number;
  src: string | StaticImageData;
  alt: string;
  resultText: string; // Added result text for each photo
};

import img_1 from "@/public/Quiz/1.jpg";
import img_2 from "@/public/Quiz/2.jpg";
import img_3 from "@/public/Quiz/3.jpg";
import img_4 from "@/public/Quiz/4.jpg";
import img_5 from "@/public/Quiz/5.jpg";
import img_6 from "@/public/Quiz/6.jpg";
import img_7 from "@/public/Quiz/7.jpg";
import img_8 from "@/public/Quiz/8.jpg";

const photos: Photo[][] = [
  [
    { id: 1, src: img_1, alt: "Photo 1", resultText: "You will travel to the Maldives!" },
    { id: 2, src: img_2, alt: "Photo 2", resultText: "You will buy a new car!" },
  ],
  [
    { id: 3, src: img_3, alt: "Photo 3", resultText: "You will get a big promotion!" },
    { id: 4, src: img_4, alt: "Photo 4", resultText: "You will find a hidden treasure!" },
  ],
  [
    { id: 5, src: img_5, alt: "Photo 5", resultText: "You will be rich after your wedding!" },
    { id: 6, src: img_6, alt: "Photo 6", resultText: "You will start a new hobby!" },
  ],
  [
    { id: 7, src: img_7, alt: "Photo 7", resultText: "You will meet your idol!" },
    { id: 8, src: img_8, alt: "Photo 8", resultText: "You will take a life-changing trip!" },
  ],
];

export default function QuizGame() {
  const [step, setStep] = useState(0);
  const [chosenPhotos, setChosenPhotos] = useState<Photo[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState<string | null>(null);

  const handleChoice = (photo: Photo) => {
    setChosenPhotos((prev) => [...prev, photo]);
    if (step < photos.length - 1) {
      setStep(step + 1);
    } else {
      // Generate the final result when quiz ends
      generateRandomResult();
      setShowResult(true);
    }
  };

  const generateRandomResult = () => {
    // Combine all result texts from chosen photos
    const possibleResults = chosenPhotos.map((photo) => photo.resultText);
    // Pick a random result
    const randomIndex = Math.floor(Math.random() * possibleResults.length);
    setFinalResult(possibleResults[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!showResult ? (
        <div className="w-full max-w-3xl p-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Choose Your Favorite Photo
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {photos[step].map((photo) => (
              <button
                key={photo.id}
                onClick={() => handleChoice(photo)}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500 transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Step {step + 1} of {photos.length}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl p-4">
          <h2 className="text-center text-2xl font-bold mb-4">Your Result</h2>
          {finalResult && (
            <p className="text-center text-lg font-semibold text-blue-600 mb-4">
              {finalResult}
            </p>
          )}
          <div className="text-center mt-4">
            <button
              onClick={() => {
                setStep(0);
                setChosenPhotos([]);
                setShowResult(false);
                setFinalResult(null);
              }}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
