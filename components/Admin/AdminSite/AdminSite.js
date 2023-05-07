import Login from "../Login/Login.js";
import Submissions from "../Submissions/Submissions.js";
import { useContext } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';

const AdminSite = () => {

    const { user } = useContext(FirebaseContext);

    return user ? <Submissions /> : <Login />
}

export default AdminSite;