import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';



export default function HomePage({params: {locale}}) {
	unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');
  return <h1>{t('greet')}</h1>;
}