import { useQuery } from '@apollo/client';
import { ME } from '../graphql/query'; // Предполагается, что ME импортируется из queries

const useAuthStatus = (): boolean => {
    const { data } = useQuery(ME);
    console.log(data);

    return data !== null && data !== undefined && data.me !== null;
};

export default useAuthStatus;