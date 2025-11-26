import { create } from "zustand";

interface DeleteLinkStoreType {
    isDeletePending: boolean;
    setIsDeletePending: (state: boolean) => void;
}

export const useDeleteShortLinkStore = create<DeleteLinkStoreType>((set) => ({
    isDeletePending: false,
    setIsDeletePending: (state) => set({ isDeletePending: state })
}));