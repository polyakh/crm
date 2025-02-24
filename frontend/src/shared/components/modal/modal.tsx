import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export enum ModalNames {
    LEAD_ADD = 'leadAdd',
}

interface ModalContextType {
    activeModal: ModalNames | undefined;
    modalData: unknown;
    openModal: (name: ModalNames, data?: unknown) => void;
    closeModal: () => void;
    isModalOpen: (name: ModalNames) => boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: { children: ReactNode }) {
    const [activeModal, setActiveModal] = useState<ModalNames | undefined>(undefined);
    const [modalData, setModalData] = useState<unknown>(undefined);

    const openModal = useCallback((name: ModalNames, data?: unknown) => {
        setActiveModal(name);
        setModalData(data ?? undefined);
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(undefined);
        setModalData(undefined);
    }, []);

    const isModalOpen = useCallback((name: ModalNames) => activeModal === name, [activeModal]);

    return (
        <ModalContext.Provider value={{ activeModal, modalData, openModal, closeModal, isModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within ModalProvider');
    return context;
};