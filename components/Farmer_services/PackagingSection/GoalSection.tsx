import { ReactNode } from "react";

interface GoalProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const GoalSection: React.FC<GoalProps> = ({ icon, title, description }) => {
  return (
    <section className="mx-auto flex items-start p-4">
      {/* الأيقونة */}
      <div className="text-2xl text-[#a07a51] mt-1">{icon}</div>

      {/* النص */}
      <div className="text-right w-4/5">
        <h3 className="font-semibold text-lg mb-1 ">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-base">{description}</p>
      </div>
    </section>
  );
};

export default GoalSection;
