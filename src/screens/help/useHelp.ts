import {useState} from 'react';
import { FAQS } from '../../constants/constants';

const useHelp = () => {
  const [filteredFaqs, setFilteredFaqs] = useState(FAQS.general);
  const [isActive, setIsActive] = useState('FAQ');
  const [isActiveCategory, setIsActiveCategory] = useState('General');
  const handleActiveCategory = (category: string) => {
    setIsActiveCategory(category);
    if (category === 'General') {
      setFilteredFaqs(FAQS.general);
    } else if (category === 'Account') {
      setFilteredFaqs(FAQS.account);
    } else if (category === 'Services') {
      setFilteredFaqs(FAQS.services);
    }
  };
  return {
    setIsActive,
    filteredFaqs,
    isActive,
    isActiveCategory,
    handleActiveCategory,
  };
};

export default useHelp;
