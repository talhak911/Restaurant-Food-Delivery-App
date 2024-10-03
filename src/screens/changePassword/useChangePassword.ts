import { useState } from "react"

const useChangePassword = () => {
  const [fields,setFields]=useState<{
    'Current Password':string,
    'New Password':string,
    'Confirm New Password':string
  }>({
      "Current Password":'',
      "New Password":'',
      "Confirm New Password":'',
  })
  const onChange = (key: keyof typeof fields, value: string) => {
    setFields({
      ...fields,
      [key]: value, // Dynamically update the correct field
    });
}

    return {
        fields,onChange
  }
}

export default useChangePassword