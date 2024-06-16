
export type DiaryEntry = {
    id: number,
    date: string,
    weather: string,
    visibility: string,
    comment: string
};

export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    error: string | null;
    showError: (error: string) => void;
  }

