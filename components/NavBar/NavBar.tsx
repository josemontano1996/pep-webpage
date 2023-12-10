import LogoImg from '@/public/imgs/logoImg.jpg';
import Image from 'next/image';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import LocaleSelector from '../translations/LocaleSelector';
import initTranslations from '@/lib/i18n';
import LeftNav from './LeftNavBar';

const NavBar = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['shared']);
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-[3vw] py-1">
      <nav className="flex-1">
        <LeftNav />
      </nav>
      <h1>
        <LocaleLink path={'/'}>
          <Image src={LogoImg} alt="Logo Image" className="h-12 w-auto" />
        </LocaleLink>
      </h1>
      <ul className="flex flex-1 items-center justify-end gap-6">
        <li>
          {/* TODO: change to button an create contact form */}
          <LocaleLink
            path="/contact"
            styling={cn(buttonVariants({ variant: 'ghost' }))}
          >
            {t('right-nav-contact')}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink
            path={'/donate'}
            styling={cn(buttonVariants({ variant: 'destructive' }))}
          >
            {t('right-nav-donate')}
          </LocaleLink>
        </li>
        <li>
          <LocaleSelector />
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
