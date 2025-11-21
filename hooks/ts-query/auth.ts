import { getDBUser, onBoardUser } from "@/actions/auth";
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

export const useGetDbUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => await getDBUser()
    })
};