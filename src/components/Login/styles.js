import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formContainer: {
        paddingTop: theme.spacing(4),
        margin:  'auto'
    },
    formBody: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formField: {
        marginTop: theme.spacing(2)
    },
    formButton: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));