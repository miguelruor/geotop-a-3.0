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

const RegistrationForm = ({ meetingId }) => {

    const [session, setSession] = useState("");
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

        const data = new FormData(e.currentTarget);

        setIsLoading(true);

        writeDoc(meetingId, {
            createdAt: new Date(),
            surname: data.get('surname'),
            name: data.get('name'),
            completeName: data.get('name') + " " + data.get('surname'),
            country: data.get('country'),
            institution: data.get('institution'),
            email: data.get('email'),
            invited: data.get('invited') === "on" ? true : false,
            session: data.get('session'),
            contribution: data.get('contribution'),
            abstract: data.get('abstract'),
            accepted: false,
        }).then((e) => {
            setIsLoading(false);
            setSuccess(true);
            setErrorAlert(false);
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
                labelText="Name"
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

            <FormControlLabel style={{ padding: "20px 0px" }} control={<Checkbox name="invited" />} label="Invited by Scientific Committee" />

            <Box style={{ marginTop: "25px", width: "120px", height: "80px" }} >
                <FormControl fullWidth>
                    <InputLabel id="session-select-label" required>Session</InputLabel>
                    <Select
                        name="session"
                        labelId="session-select-label"
                        id="session_select"
                        value={session}
                        onChange={(e) => handleChange(e, "session")}
                        autoWidth
                        variant="standard"
                        required
                    >
                        <MenuItem className={style.MenuItemSelect} value={"DNA"}>DNA</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"PHYS"}>PHYS</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"CTRS"}>CTRS</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"DAMLAI"}>DAMLAI</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"TCLS"}>TCLS</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"TDA"}>TDA</MenuItem>

                    </Select>
                </FormControl>
            </Box>

            <Box style={{ marginTop: "25px", width: "200px", height: "80px" }} >
                <FormControl fullWidth>
                    <InputLabel id="contribution-select-label" required>Type of Contribution</InputLabel>
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
                        <MenuItem className={style.MenuItemSelect} value={"keynote"}>Keynote lecture</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"oral"}>Oral contribution</MenuItem>
                        <MenuItem className={style.MenuItemSelect} value={"poster"}>Poster presentation</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <h3>Abstract:</h3>
            <div style={{ height: "300px", overflowY: "scroll", border: "1px solid grey", marginBottom: "25px", padding: "0px 10px" }}>
                <CustomInput
                    labelText="Write here. You can use LaTeX syntax."
                    id="abstract"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        required: true,
                        multiline: true,
                        rows: 100,
                        name: "abstract"
                    }}
                />
            </div>

            <span style={{ display: "flex", alignItems: "center" }}>
                <Button color="primary" type='submit' form="contact_form">Send submission</Button>
                {isLoading ? <CircularProgress style={{ marginLeft: "30px" }} /> : null}
                {errorAlert ? <span style={{ color: "red", marginLeft: "30px" }}>Error. Please try again.</span> : null}
                {success ? <span style={{ color: "green", marginLeft: "30px" }}>Information was successfully submitted!</span> : null}
            </span>
        </form >
    )
};

export default RegistrationForm;