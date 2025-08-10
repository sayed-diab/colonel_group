import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';
export default function AccordionDemo() {
  const { t } = useTranslation();
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-white flex flex-col items-center justify-center px-5 flex-wrap"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{t('colgen.main_page.col_a1_t')}</AccordionTrigger>
        <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
          <p>{t('colgen.main_page.col_a1_p')}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
