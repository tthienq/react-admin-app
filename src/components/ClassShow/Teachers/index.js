import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { axiosAdmin } from '../../../api/axiosAdmin';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: '470px',
    },
    inline: {
        display: 'inline',
    },
}));

const Teachers = (props) => {
    const { classId } = props;
    console.log(classId)
    const classes = useStyles();
    const [listStudents, setListStudents] = useState([]);

    useEffect(() => {
        const getListStudents = async (classId) => {
            try {
                const res = await axiosAdmin.get(`/manage/classes/${classId}/teachers`);
                console.log('list students: ', res.data);
                setListStudents(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getListStudents(classId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <List className={classes.root}>
            {listStudents.map((student, index) => {
                return (
                    <ListItem alignItems={'flex-start'} key={index}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={student.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={student.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                    {student.fullname}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Teachers;
