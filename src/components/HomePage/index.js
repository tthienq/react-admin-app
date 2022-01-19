import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        background:
            theme.palette.type === 'dark'
                ? '#535353'
                : `linear-gradient(to right, #348AC7 0%, #7474BF 35%), linear-gradient(to bottom, #348AC7 0%, #7474BF 50%), #6f4ceb`,
        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
    media: {
        background: `url() top right / cover`,
        marginLeft: 'auto',
    },
    actions: {
        [theme.breakpoints.down('md')]: {
            padding: 0,
            flexWrap: 'wrap',
            '& a': {
                marginTop: '1em',
                marginLeft: '0!important',
                marginRight: '1em',
            },
        },
    },
}));

const Welcome = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Box display="flex">
                <Box flex="1">
                    <Typography variant="h5" component="h2" gutterBottom>
                        Welcome to the administration
                    </Typography>
                    <Box maxWidth="40em">
                        <Typography variant="body1" component="p" gutterBottom>
                            This is admin dashboard for our Grade System Management
                        </Typography>
                    </Box>
                    <CardActions className={classes.actions}>
                        <Button
                            variant="contained"
                            href="https://classroom-hcmus-k17.netlify.app/"
                            startIcon={<HomeIcon />}
                        >
                            Website Client
                        </Button>
                        <Button
                            variant="contained"
                            href="https://classroom-hcmus-k17.netlify.app/"
                            startIcon={<CodeIcon />}
                        >
                            Source Code
                        </Button>
                    </CardActions>
                </Box>

                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    className={classes.media}
                    width="16em"
                    height="9em"
                    overflow="hidden"
                />
            </Box>
        </Card>
    );
};

export default Welcome;