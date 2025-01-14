import { useState } from 'react';

/**
 * Custom hook for email validation
 * @returns {Object} - email, setEmail, isValid, validateEmail
 */
const useEmailValidation = ({emailValue}) => {
  const [email, setEmail] = useState(emailValue);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    setIsValid(emailRegex.test(value));
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value);
  };

  return { email, setEmail: handleEmailChange, isValid, validateEmail };
};

export default useEmailValidation;
