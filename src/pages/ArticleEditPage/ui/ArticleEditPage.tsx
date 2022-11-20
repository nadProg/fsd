import { useTranslation } from 'react-i18next';

import { Page } from 'shared/ui/Page';
import { useParams } from 'react-router-dom';

export const ArticleEditPage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  const titleKey = isEdit ? 'article-form.edit-title' : 'article-form.new-title';

  return (
    <Page>
      <h1>{t(titleKey)}</h1>
    </Page>
  );
};
