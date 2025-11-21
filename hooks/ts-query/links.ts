import { checkCustom, createShortLink, createShortLinkWithCustom, getAllUrlCreatedByUser } from "@/actions/link";
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
        mutationFn: async (longLink: string) => await createShortLink({ longLink }),
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