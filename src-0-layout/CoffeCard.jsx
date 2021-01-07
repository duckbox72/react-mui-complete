import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const CoffeCard = (props) => {  
    const { title, price, description, avatarUrl, imageUrl } = props;

    return (
        <Card>
          <CardHeader
            avatar={<Avatar src={avatarUrl} />}
            action={
            <IconButton aria-label="settings">
                <ShareIcon />
            </IconButton>
            }
            title={title}
            subheader={price}
          /> 
          <CardMedia
            style={{ height: "150px", maxWidth: "60%"}}
            image={imageUrl}          
          /> 
          <CardContent>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">OFFER</Button>
          </CardActions>
        </Card>
      );
};

export default CoffeCard;

    