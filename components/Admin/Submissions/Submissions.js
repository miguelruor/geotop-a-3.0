import Background from "../Background/Background"
import { useContext } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';

const Submissions = () => {
    const { logout } = useContext(FirebaseContext);
    return (<Background title={"Admin site GEOTOP-A"}>
        <h1>Admin site</h1>
        <button onClick={() => logout()}>Logout</button>
    </Background>)
}

export default Submissions;