import { useTranslations } from "next-intl";




export default function page() {
    const t = useTranslations('About');


  return (
    <>
      <div>
        <h1>{t('MyName')}</h1>
        <h1>{t('WhoMe')}</h1>
      </div>
    </>
  )
}
