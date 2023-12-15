'use client';

import { Copy } from 'lucide-react';

export const CopyButton = ({ copiedData }: { copiedData: string }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(copiedData);
  };
  return <Copy onClick={copyToClipboard} className='hover:cursor-pointer hover:bg-gray-100'/>;
};
