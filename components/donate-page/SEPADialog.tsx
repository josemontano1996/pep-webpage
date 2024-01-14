'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { cn } from '@/lib/utils';

export const SEPADialog = () => {
  return (
    <Dialog>
      <DialogTrigger className={cn('block text-left underline')}>
        erteilen Sie uns eine Einzugsermächtigung oder ein
        SEPA-Lastschriftmandat:
      </DialogTrigger>
      <DialogContent className="z-50 border-primary/80">
        <DialogTitle
          className={cn('pb-3 pt-4 text-center text-2xl font-medium')}
        >
          Formular für SEPA-Lastschriftmandat und Einzugsermächtigung
        </DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <p className="text-base">
              Füllen Sie dieses{' '}
              <a
                href="/pdf/sepa-form.pdf"
                target="_blank"
                className="underline"
              >
                Formular
              </a>{' '}
              aus, und senden Sie es an:
            </p>
            <address className="py-2 text-base italic">
              <p>{process.env.NEXT_PUBLIC_COMPANY_NAME}</p>
              <p>{process.env.NEXT_PUBLIC_PEP_STREET}</p>
              <p>
                {process.env.NEXT_PUBLIC_PEP_POSTAL}{' '}
                {process.env.NEXT_PUBLIC_PEP_CITY}
              </p>
            
            </address>
          </DialogDescription>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  );
};
