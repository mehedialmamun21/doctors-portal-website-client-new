import { useQuery } from 'react-query'
// import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const useCart = () => {
    // const { user } = useContext(AuthContext);
    const [user] = useAuthState(auth);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}

export default useCart;