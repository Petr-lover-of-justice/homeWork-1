import React from 'react';

import ListM from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton';

import './list.css';

function List({ comments, onRemove }) {
  return (
    <div className="feedback">
      {comments.length === 0 ? <h3 className="recall">Отзывов нет</h3> : <h5 className="recall">Отзывы:</h5>}
      <ListM sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {comments.map((i) => (
          <ListItem key={i.id} alignItems="flex-start">
            <ListItemAvatar>
              <PersonIcon />
            </ListItemAvatar>
            <ListItemText
              primary={i.fullName}
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {i.text}
                    <br />
                    {i.createdAt}
                  </Typography>
                  <IconButton onClick={() => onRemove(i.id)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </ListM>
    </div>
  );
}

export default List;
