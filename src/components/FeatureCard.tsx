
import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-green-600 transition-colors">{title}</h3>
      <p className="text-stone-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
