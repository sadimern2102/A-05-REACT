import { FaStar } from "react-icons/fa";
import type { TechData } from "../types/techData";

interface TechnologiesProps {
  allTechData: TechData[];
  selectedTech: TechData[];
  onAddToStack: (tech: TechData) => void;
}

const getBadgeStyle = (badge: string | null) => {
  if (badge === "Popular") {
    return "text-[#0EA5E9] bg-[#F0F9FF]";
  }

  if (badge === "Versatile") {
    return "text-[#059669] bg-[#ECFDF5]";
  }

  if (badge === "Fast") {
    return "text-[#EA580C] bg-[#FFF7ED]";
  }
  if (badge === "SSR / Edge") {
    return "text-[#7E22CE] bg-[#F3E8FF]";
  }

  if (badge === "Standard") {
    return "text-[#059669] bg-[#ECFDF5]";
  }

  if (badge === "Top SQL") {
    return "text-[#2563EB] bg-[#EFF6FF]";
  }

  if (badge === "Cache") {
    return "text-[#DC2626] bg-[#FEF2F2]";
  }

  if (badge === "Ubiquitous") {
    return "text-[#D97706] bg-[#FFFBEB]";
  }

  if (badge === "Essential") {
    return "text-[#0284C7] bg-[#F0F9FF]";
  }

  if (badge === "Robust") {
    return "text-[#0284C7] bg-[#F0F9FF]";
  }

  if (badge === "Modern") {
    return "text-[#0891B2] bg-[#ECFEFF]";
  }

  if (badge === "Containers") {
    return "text-[#0284C7] bg-[#ECFEFF]";
  }

  return "";
};

const Technologies = ({
  allTechData,
  selectedTech,
  onAddToStack,
}: TechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {allTechData.map((tech) => {
        const isAdded = selectedTech.some((item) => item.title === tech.title);

        return (
          <div
            key={tech.title}
            className="item border border-[#F1F5F9] rounded-lg p-4 sm:p-5"
          >
            <div className="head flex justify-between items-start gap-3">
              <div className="icon shrink-0">
                <img
                  src={tech.imageUrl}
                  alt={tech.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              {tech.badge && (
                <div
                  className={`badge font-jakarta font-semibold text-[11px] sm:text-[12px] border border-transparent rounded-3xl px-2.5 sm:px-3 py-1 ${getBadgeStyle(
                    tech.badge,
                  )}`}
                >
                  {tech.badge}
                </div>
              )}
            </div>
            <h2 className="font-jakarta font-bold text-base sm:text-lg text-heading mt-3 mb-1.5">
              {tech.title}
            </h2>
            <p className="font-jakarta text-[11px] sm:text-[12px] text-pera mb-4 leading-5">
              {tech.description}
            </p>
            <div className="rating flex flex-wrap items-center justify-between gap-2 mt-2">
              <div className="badge font-jakarta text-[10px] sm:text-[11px] text-text bg-[#F1F5F9] px-2 py-1 rounded-md font-medium">
                {tech.tags}
              </div>
              <div className="badge font-jakarta text-[10px] sm:text-[11px] text-pera">
                {tech.level}
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#FBBF24] text-sm" />
                <span className="font-jakarta text-[10px] sm:text-[11px] font-semibold text-[#334155] ml-1">
                  {tech.rating}
                </span>
              </div>
            </div>
            <div className="btn">
              <button
                type="button"
                disabled={isAdded}
                onClick={() => onAddToStack(tech)}
                className="font-jakarta cursor-pointer text-xs font-medium px-4 py-3 bg-heading text-white rounded-xl mt-4 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAdded ? "Added" : tech.action}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
