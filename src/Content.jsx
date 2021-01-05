import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <CoffeCard 
                title={"Hamilton Beach Flexbrew"}
                subtitle={"$89.99"}
                avatarSrc={"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg"}
                
                />
            </Grid>
            
        </Grid>

        
    );
};

export default Content;