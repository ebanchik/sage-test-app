import React from 'react';

// Define a type for the props that the PricingCard component will accept
type PricingPlan = {
  title: string;
  price: string;
  features: string[];
};

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className="border rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold">{plan.title}</h2>
      <p className="text-4xl font-bold">{`$${plan.price}`}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className="mt-3">
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Start Free Trial
      </button>
    </div>
  );
};

export default PricingCard;
