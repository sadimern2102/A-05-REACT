import { use, useState } from "react";
import type { TechData } from "../types/techData";
import Technologies from "../components/Technogies";
import { IoClose } from "react-icons/io5";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologiesProps {
  techData: Promise<TechData[]>;
}

export const AllTech = ({ techData }: TechnologiesProps) => {
  const data = use(techData);

  const [selectedTech, setSelectedTech] = useState<TechData[]>([]);

  const addToStack = (tech: TechData) => {
    setSelectedTech((previous) => [...previous, tech]);

    toast.success(`${tech.title} added to your stack!`);
  };

  const removeFromStack = (title: string) => {
    setSelectedTech((previous) =>
      previous.filter((tech) => tech.title !== title),
    );

    toast.info(`${title} removed from your stack!`);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="heading">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl text-heading">
            Explore the
            <span className="gradient-heading">Technologies</span>
          </h2>
          <p className="font-jakarta text-pera text-sm sm:text-base mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-6 mt-8 lg:mt-10 mb-16 lg:mb-22">
          <div className="card lg:col-span-3">
            <Technologies
              allTechData={data}
              selectedTech={selectedTech}
              onAddToStack={addToStack}
            />
          </div>
          <div className="sidebar lg:col-span-1">
            <div className="item border border-[#F1F5F9] rounded-lg p-4 sm:p-5 lg:sticky lg:top-5">
              <h2 className="font-jakarta text-base text-heading font-bold">
                Your Stack
              </h2>
              <p className="font-jakarta text-xs text-pera my-1">
                {selectedTech.length === 0
                  ? "No technologies selected yet."
                  : `${selectedTech.length} ${
                      selectedTech.length === 1 ? "Technology" : "Technologies"
                    } Selected`}
              </p>
              <div className="box flex flex-col gap-2.5 p-4 sm:p-5 lg:p-6 border border-[#E2E8F0] border-dashed rounded mt-2">
                {selectedTech.length === 0 ? (
                  <h2 className="font-jakarta text-xs text-pera text-center">
                    Your stack is empty.
                  </h2>
                ) : (
                  selectedTech.map((tech) => (
                    <div
                      key={tech.title}
                      className="stack flex justify-between items-center gap-2 p-2.5 border border-[#E2E8F0] rounded-2xl"
                    >
                      <div className="icon shrink-0">
                        <img
                          src={tech.imageUrl}
                          alt={tech.title}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div className="stack-name flex-1 min-w-0">
                        <h2 className="font-jakarta text-xs text-heading font-bold truncate">
                          {tech.title}
                        </h2>
                        <h3 className="font-jakarta text-[10px] font-bold text-pera">
                          {tech.tags}
                        </h3>
                      </div>
                      <div className="btn shrink-0">
                        <button
                          type="button"
                          onClick={() => removeFromStack(tech.title)}
                          aria-label={`Remove ${tech.title}`}
                        >
                          <IoClose className="text-[#94A3B8] text-2xl hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
};
