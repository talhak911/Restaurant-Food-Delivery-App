import { useState } from "react";

const useAddAddress = () => {

    const [fields, setFields] = useState<{
        'Name': string;
        'Address': string;
      }>({
        'Name': '',
        'Address': '',
  
      });
    
      // Handle input changes by key (since we don't have 'name' in RN)
      const onChange = (key: keyof typeof fields, value: string) => {
        setFields({
          ...fields,
          [key]: value, // Dynamically update the correct field
        });
      };
  return {
fields,
onChange
  }
}

export default useAddAddress