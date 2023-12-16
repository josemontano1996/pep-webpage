import LogoImg from '@/public/imgs/logoImg.jpg';
import Image from 'next/image';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import LocaleSelector from '../translations/LocaleSelector';
import initTranslations from '@/lib/i18n';
import LeftNav from './LeftNavBar';
import ContactDialog from '../ContactDialog';

const NavBar = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['shared']);
  return (
    <header className="fixed left-0 top-0 z-50 flex h-[9vh] w-screen items-center bg-white py-2 lg:px-[3vw]">
      <nav className="flex-1">
        <LeftNav locale={locale} />
      </nav>
      <h1>
        <LocaleLink path={'/'}>
          <Image
            src={LogoImg}
            alt="Logo Image"
            className=" h-10 w-auto sm:h-12"
          />
        </LocaleLink>
      </h1>
      <ul className="flex flex-1 items-center justify-end gap-6 pr-[2vw] lg:p-0">
        <li className="hidden lg:flex">
          <ContactDialog triggerStyle='text-lg' />
        </li>
        <li>
          <LocaleLink
            path={'/donate'}
            styling={cn(
              buttonVariants({ variant: 'destructive' }),
              'text-sm xl:text-lg text-xs sm:text-base',
            )}
          >
            {t('right-nav-donate')}
          </LocaleLink>
        </li>
        <li className="hidden sm:block">
          <LocaleSelector />
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
