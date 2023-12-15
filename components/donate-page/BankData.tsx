import { CardContent } from '../ui/card';
import { CopyButton } from './CopyButton';

const BankData = () => {
  //TODO:update bank data
  return (
    <CardContent>
      <div className="space-y-3">
        <p className="flex gap-2">
          <strong>IBAN:</strong>{' '}
          <span id="IBAN">{process.env.NEXT_PUBLIC_IBAN_NUMBER}</span>
          <CopyButton copiedData={process.env.NEXT_PUBLIC_IBAN_NUMBER!} />
        </p>
        <p className="flex gap-2">
          <strong>BIC:</strong>{' '}
          <span id="BIC">{process.env.NEXT_PUBLIC_BIC_NUMBER}</span>
          <CopyButton copiedData={process.env.NEXT_PUBLIC_BIC_NUMBER!} />
        </p>
        <p className="flex gap-2">
          <strong>Company name:</strong>{' '}
          <span>{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
        </p>
      </div>
    </CardContent>
  );
};

export default BankData;
