import AdminSite from "../../components/Admin/AdminSite/AdminSite.js";
import { FirebaseProvider } from '../../auth/FirebaseContext';

const AuthPage = () => {

    return <FirebaseProvider>
        <AdminSite />
    </FirebaseProvider>

}

export default AuthPage;