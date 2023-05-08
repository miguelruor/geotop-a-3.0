import CircularProgress from '@material-ui/core/CircularProgress';

const CenteredCircularProgress = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={100} />
        </div>
    );
};

export default CenteredCircularProgress;