import React from 'react';
import { ModalNames, useModal } from './modal.tsx'
import { AddLeadModal } from '~modules/leads/components/add-lead-modal';

const modalRegistry: Record<ModalNames, React.FunctionComponent> = {
    [ModalNames.LEAD_ADD]: AddLeadModal,
};

const ModalManager = () => {
    const { activeModal } = useModal();
    if (!activeModal) return null;

    const ModalComponent = modalRegistry[activeModal];

    return <ModalComponent />;
};

export default ModalManager;