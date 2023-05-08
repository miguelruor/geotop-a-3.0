import AdminSite from "../../components/Admin/AdminSite/AdminSite.js";
import { FirebaseProvider } from '../../firebase/FirebaseContext';

const AuthPage = () => {

    return <FirebaseProvider>
        <AdminSite />
    </FirebaseProvider>

}

export default AuthPage;