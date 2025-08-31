'use client';

import {InfoBoxProps} from '@/types/type';

export default function InfoBox({children, variant = 'default'}: InfoBoxProps) {
  const variantClasses = {
    default: 'bg-white border-gray-400 shadow-gray-300 text-gray-700',
    primary: 'bg-blue-50 border-blue-400 shadow-blue-300 text-blue-700',
    success: 'bg-green-50 border-green-400 shadow-green-300 text-green-700',
    warning: 'bg-yellow-50 border-yellow-400 shadow-yellow-300 text-yellow-700',
  };

  return (
    <div
      className={`
      ${variantClasses[variant]}
      border-3 rounded-none p-4 mb-4 
      shadow-[4px_4px_0px_0px] 
      font-medium leading-relaxed
    `}
    >
      {children}
    </div>
  );
}
