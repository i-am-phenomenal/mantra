import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function BooksList(props) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
        {props.books.map(book => {
      return (
                <ListItem alignItems="flex-start">
                <Button color="primary" onClick={(event) => props.onClickHandler(event, book)}>{book.title}</Button>
            </ListItem>
            )
        })}
    </List> 
  );
}
