import Login from "../Login/Login.js";
import Submissions from "../Submissions/Submissions.js";
import { useContext } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import Background from '../Background/Background';
import CenteredCircularProgress from "../../CenteredCircularProgress/CenteredCircularProgress.js";

const AdminSite = () => {

    const { user, loadingUser } = useContext(FirebaseContext);

    return (<Background title={"Admin site GEOTOP-A"} showLogOutButton={user != null}>
        {loadingUser ? <CenteredCircularProgress /> : user ? <Submissions meetingId="merida24" /> : <Login />}
    </Background>)
}

export default AdminSite;