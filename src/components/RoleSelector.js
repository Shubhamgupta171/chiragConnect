import React, { useState } from "react";
import { Building2, ShoppingCart, Shield, ArrowRight } from "lucide-react";

const RoleSelector = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    {
      id: "vendor",
      title: "Vendor",
      description: "Register as a vendor to sell products and services",
      icon: Building2,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "buyer",
      title: "Buyer",
      description: "Register as a buyer to purchase products and services",
      icon: ShoppingCart,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "admin",
      title: "Administrator",
      description: "Administrative access to manage the platform",
      icon: Shield,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Role
        </h1>
        <p className="text-lg text-gray-600">
          Select how you'd like to use the CHIRAG CONNECT platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;

          return (
            <div
              key={role.id}
              className={`border rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "ring-2 ring-blue-500 shadow-lg"
                  : "hover:shadow-md"
              } ${role.color}`}
              onClick={() => handleRoleSelect(role.id)}
            >
              <div className="flex justify-center mb-4">
                <Icon className={`h-12 w-12 ${role.iconColor}`} />
              </div>
              <h2 className="text-xl font-semibold">{role.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{role.description}</p>
              <div className="flex justify-center mt-6">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    isSelected
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`flex items-center px-8 py-3 text-lg rounded-md transition ${
            selectedRole
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Continue <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
