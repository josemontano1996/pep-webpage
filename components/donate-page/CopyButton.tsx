'use client';

import { ReactNode } from 'react';
import { Button } from '../ui/button';

export const CopyButton = ({ children }: { children: ReactNode }) => {
  const copyToClipboard = async () => {
    const accountData = document.getElementById('accountData');
    const text = accountData!.textContent!;
    await navigator.clipboard.writeText(text);
  };
  return <Button onClick={copyToClipboard}>{children}</Button>;
};
