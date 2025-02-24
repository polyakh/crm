import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum MODAL_NAMES {
  LEAD = "lead",
}

export interface ModalInstance {
  name: MODAL_NAMES;
  data?: unknown;
}

export interface ModalState {
  modal: ModalInstance | undefined;
}

export interface ModalActions {
  actions: {
    openModal: (name: MODAL_NAMES, data?: unknown) => void;
    closeModal: () => void;
  };
}

export type ModalStore = ModalState & ModalActions;

const INITIAL_STATE = {
  modal: undefined,
};

const useModalStore = create<ModalStore>()(
  devtools(
    (set) => ({
      INITIAL_STATE,
      actions: {
        openModal: (name, data) =>
          set({
            modal: { name, data },
          }),
        closeModal: () =>
          set({
            modal: undefined,
          }),
      },
    }),
    { name: "modal-store" },
  ),
);

export const useModalState = () => useModalStore((state) => state.modal);
export const useModalActions = () =>
  useModalStore((state) => ({
    openModal: state.actions.openModal,
    closeModal: state.actions.closeModal,
  }));
