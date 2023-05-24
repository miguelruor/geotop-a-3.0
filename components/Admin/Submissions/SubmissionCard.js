import { useState, useContext } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import { Checkbox } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorIcon from '@mui/icons-material/Error';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        border: `1px solid grey`,
        borderRadius: '50%',
        padding: theme.spacing(1),
    },
}));


// For latex rendering
import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";

const contributionName = {
    "keynote": "Keynote lecture",
    "oral": "Oral contribution",
    "poster": "Poster presentation",
    "participant": "Attendee"
};

const SubmissionCard = ({ meetingId, submission }) => {
    const [expanded, setExpanded] = useState(false);
    const [accepted, setAccepted] = useState(submission.accepted);
    const { setAcceptedSubmission } = useContext(FirebaseContext);
    const [wasError, setWasError] = useState(false);

    const classes = useStyles();

    const onAcceptSubmission = (event) => {
        const checkboxValue = event.target.checked;
        setAccepted(checkboxValue);
        setAcceptedSubmission(meetingId, submission.id, checkboxValue).then(() => {
            setWasError(false);
        }).catch(() => {
            setWasError(true);
        });
    }
    return (
        <Card sx={{ minWidth: 275, margin: "20px 0px" }}>
            <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {submission.institution} - {submission.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {submission.completeName} ({submission.email})
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {contributionName[submission.contribution]} {submission.contribution != "participant" && "-"} {submission.session} {submission.invited ? "- Invited by Scientific Committee" : null}
                    </Typography>
                    <Typography variant="body2">
                        Submitted on {submission.createdAt.toLocaleString()}
                    </Typography>
                </div>
                <CardActions style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                        Accepted: <Checkbox checked={accepted} onChange={onAcceptSubmission} /> {wasError && <ErrorIcon style={{ color: "red" }} />}
                    </span>
                    {submission.contribution != "participant" && <span>
                        Show abstract: <ExpandMore
                            expand={expanded}
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon className={classes.icon} />
                        </ExpandMore>
                    </span>}
                </CardActions>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        <Latex>{submission.abstract}</Latex>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default SubmissionCard;

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));