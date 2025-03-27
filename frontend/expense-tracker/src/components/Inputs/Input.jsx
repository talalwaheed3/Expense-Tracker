import React, { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const Input = ({ value, onChange, placeholder, type, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === 'password' && (
          <>
            {showPassword ? (
              <FaRegEye 
                size={22}
                className="text-primary cursor-pointer"
                onClick={()=> togglePassword()}
              />
            ): (
              <FaRegEyeSlash 
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={()=> togglePassword()}
              />
            )}
          </>
        )}
        
      </div>
    </div>
  );
};

export default Input;
