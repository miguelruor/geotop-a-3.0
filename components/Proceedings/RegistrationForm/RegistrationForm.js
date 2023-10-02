import { useState, useContext } from "react";
import { FirebaseContext } from "../../../firebase/FirebaseContext";
import CustomInput from "../../CustomInput/CustomInput.js";
import Button from "../../CustomButtons/Button.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress } from '@material-ui/core';
import style from "../../../assets/css/RegistrationForm.module.css";
import emailjs from "emailjs-com";

const RegistrationForm = ({ meetingId }) => {

    const [session, setSession] = useState("");
    const [invited, setInvited] = useState(false);
    const [contribution, setContribution] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    const { writeDoc } = useContext(FirebaseContext);

    const handleChange = (event, select) => {
        if (select === "session") {
            setSession(event.target.value);
        }
        else if (select === "contribution") {
            setContribution(event.target.value);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            createdAt: new Date(),
            surname: formData.get('surname'),
            name: formData.get('name'),
            completeName: formData.get('name') + " " + formData.get('surname'),
            country: formData.get('country'),
            institution: formData.get('institution'),
            email: formData.get('email'),
            invited: invited,
            session: formData.get('session'),
            contribution: formData.get('contribution'),
            abstract: formData.get('abstract'),
            accepted: false,
            title: formData.get('title'),
        };

        if (data.contribution == "participant") {
            data.session = "";
            data.invited = false;
        }

        if (data.contribution == "poster") {
            data.invited = false;
        }

        // restrictions before submitting
        if (
            (!data.invited && data.contribution == "keynote") ||
            ((contribution === "oral" || contribution === "poster") && !invited) ||
            (data.contribution != "participant" && (data.abstract == "" || data.session == "" || data.title == ""))
        ) {
            setIsLoading(false);
            setSuccess(false);
            setErrorAlert(true);

            return;
        }

        setIsLoading(true);
        setSuccess(false);
        setErrorAlert(false);

        writeDoc(meetingId, data).then((e) => {
            setIsLoading(false);
            setSuccess(true);
            setErrorAlert(false);
        }).then((e) => {
            // send confirmation email
            emailjs
                .send(
                    process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
                    meetingId,
                    {
                        completeName: data.completeName,
                        email: data.email,
                    },
                    process.env.NEXT_PUBLIC_EMAIL_JS_KEY
                )
        }).catch((e) => {
            setIsLoading(false);
            setSuccess(false);
            setErrorAlert(true);
        });
    }

    return (
        <form onSubmit={handleSubmit} id="contact_form">
            <CustomInput
                labelText="Surname"
                id="surname"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name: "surname",
                    required: true
                }}
            />
            <CustomInput
                labelText="First name"
                id="name"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name: "name",
                    required: true
                }}
            />
            <CustomInput
                labelText="Country"
                id="country"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name: "country",
                    required: true
                }}
            />
            <CustomInput
                labelText="Institution/University"
                id="institution"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name: "institution",
                    required: true
                }}
            />
            <CustomInput
                labelText="e-mail"
                id="email"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name: "email",
                    required: true
                }}
            />

            <FormControlLabel
                style={{ padding: "20px 0px" }}
                control={
                    <Checkbox name="invited" checked={invited} onChange={() => setInvited(!invited)} />
                }
                label="Invited by Scientific Committee"
            />

            <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                <Box style={{ marginTop: "25px", width: "200px", height: "80px" }} >
                    <FormControl fullWidth>
                        <InputLabel id="contribution-select-label" required>Type of participation</InputLabel>
                        <Select
                            name="contribution"
                            labelId="contribution-select-label"
                            id="contribution"
                            value={contribution}
                            onChange={(e) => handleChange(e, "contribution")}
                            autoWidth
                            variant="standard"
                            required
                        >
                            <MenuItem className={style.MenuItemSelect} value={"participant"}>Attendee</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"keynote"}>Keynote lecture</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"oral"}>Oral contribution</MenuItem>
                            {/*<MenuItem className={style.MenuItemSelect} value={"poster"}>Poster presentation</MenuItem>*/}
                        </Select>
                    </FormControl>
                </Box>
                {(contribution === "keynote" && !invited) && <span style={{ color: "red", marginLeft: "20px", fontSize: "15px" }}>Only invited participants can select "Keynote lecture"</span>}
                {((contribution === "oral" || contribution === "poster") && !invited) && <span style={{ color: "red", marginLeft: "20px", fontSize: "15px" }}>Only invited participants can send information their information because the deadline has already passed.</span>}
            </span>

            <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>

                <Box style={{ marginTop: "25px", width: "120px", height: "80px" }} >
                    <FormControl fullWidth>
                        <InputLabel id="session-select-label">Session</InputLabel>
                        <Select
                            name="session"
                            labelId="session-select-label"
                            id="session_select"
                            value={session}
                            onChange={(e) => handleChange(e, "session")}
                            autoWidth
                            variant="standard"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"DNA"}>DNA</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"PHYS"}>PHYS</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"CTRS"}>CTRS</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"DAMLAI"}>DAMLAI</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"TCLS"}>TCLS</MenuItem>
                            <MenuItem className={style.MenuItemSelect} value={"TDA"}>TDA</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <span style={{ marginLeft: "20px", fontSize: "15px" }}>(only for contributing participants)</span>
            </span>

            <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}><h3>Title:</h3> <p style={{ marginLeft: "20px", fontSize: "15px" }}>(only for contributing participants)</p></span>
            <div style={{ height: "100px" }}>
                <CustomInput
                    labelText="Write here. You can use LaTeX syntax."
                    id="title"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        multiline: false,
                        name: "title"
                    }}
                />
            </div>

            <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}><h3>Abstract:</h3> <p style={{ marginLeft: "20px", fontSize: "15px" }}>(only for contributing participants)</p></span>
            <div style={{ height: "300px", overflowY: "scroll", border: "1px solid grey", marginBottom: "25px", padding: "0px 10px" }}>
                <CustomInput
                    labelText="Write here. You can use LaTeX syntax."
                    id="abstract"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        multiline: true,
                        rows: 100,
                        name: "abstract"
                    }}
                />
            </div>

            <span style={{ display: "flex", alignItems: "center" }}>
                <Button color="primary" type='submit' form="contact_form">Send submission</Button>
                {isLoading ? <CircularProgress style={{ marginLeft: "30px" }} /> : null}
                {errorAlert ? <span style={{ color: "red", marginLeft: "30px" }}>Error, something is wrong with your registration data. Please try again.</span> : null}
                {success ? <span style={{ color: "green", marginLeft: "30px" }}>Information was successfully submitted!</span> : null}
            </span>
        </form >
    )
};

export default RegistrationForm;