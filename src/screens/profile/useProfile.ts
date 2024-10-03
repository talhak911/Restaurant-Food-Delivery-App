import { useState } from "react";

const useProfile = () => {
  // Define the fields with proper typing
  const [fields, setFields] = useState<{
    'Full Name': string;
    'Date of Birth': string;
    'Email': string;
    'Phone Number': string;
  }>({
    'Full Name': '',
    'Date of Birth': '',
    'Email': '',
    'Phone Number': ''
  });

  // Handle input changes by key (since we don't have 'name' in RN)
  const onChange = (key: keyof typeof fields, value: string) => {
    setFields({
      ...fields,
      [key]: value, // Dynamically update the correct field
    });
  };

  return {
    fields,  // Return fields to use in your component
    onChange,  // Return onChange handler
  };
};

export default useProfile;
