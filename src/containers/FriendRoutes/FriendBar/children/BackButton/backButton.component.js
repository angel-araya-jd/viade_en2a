import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

const BackButton = props => {
    const { t } = useTranslation();
    return (
        <Button variant="light" href="#" data-testid="friend-backButton">{t("utils.back")}</Button>
    );
}

export default BackButton;