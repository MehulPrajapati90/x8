import { checkCustom, createShortLink, createShortLinkWithCustom, deleteShortLink, getAllUrlCreatedByUser, getLinkAnalytics } from "@/actions/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetAllUrlCreatedByUser = () => {
    return useQuery({
        queryKey: ['url'],
        queryFn: async () => await getAllUrlCreatedByUser()
    })
};

export const useCreateShortLink = () => {
    const quertClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ longLink }: { longLink: string }) => await createShortLink({ longLink }),
        onSuccess: () => {
            quertClient.invalidateQueries({ queryKey: ['url'] })
        }
    })
};

export const useCreateShortLinkWithCustom = () => {
    const quertClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ custom, longLink }: createShortLinkWithCustom) => await createShortLinkWithCustom({ custom, longLink }),
        onSuccess: () => {
            quertClient.invalidateQueries({ queryKey: ['url'] })
        }
    })
};

export const useCheckCustom = () => {
    const quertClient = useQueryClient();
    return useMutation({
        mutationFn: async (custom: string) => await checkCustom({ custom }),
        onSuccess: () => {
            quertClient.invalidateQueries({ queryKey: ['url'] })
        }
    })
};

export const useGetAnalytics = () => {
    return useQuery({
        queryKey: ['url'],
        queryFn: async () => await getLinkAnalytics()
    })
}

export const useDeleteShortLink = () => {
    const quertClient = useQueryClient();
    return useMutation({
        mutationFn: async (shortlink: string) => await deleteShortLink(shortlink),
        onSuccess: () => {
            quertClient.invalidateQueries({ queryKey: ['url'] })
        }
    })
}