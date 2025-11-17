import { onBoardUser } from "@/actions/auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useOnBoardUser = () => {
    const quertClient = useQueryClient();
    return useMutation({
        mutationFn: async () => await onBoardUser(),
        onSuccess: () => {
            quertClient.invalidateQueries({ queryKey: ['user'] });
        }
    })
};