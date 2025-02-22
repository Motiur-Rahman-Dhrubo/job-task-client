import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMyTasks = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { data: myTasks = [], refetch } = useQuery({
            queryKey: ['my-tasks', user?.email],
            queryFn: async () => {
                const res = await axiosPublic.get(`/my-tasks?email=${user.email}`);
                return res.data;
            }
        })
    return [myTasks, refetch];
};

export default useMyTasks;