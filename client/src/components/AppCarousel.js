import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@material-ui/core'

import { Image } from 'react-bootstrap';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/App.css';

const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/pagePropertiesImage/da-nang-vietnam.jpg"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/first-time/pagePropertiesImage/da-nang.jpg"
        
    }
];

function AppCarousel (props)
{

        return (
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        );

}

function Item(props)
{
    return (

        <Card sx={{ maxWidth: 1600 }} className="imgWide">
            <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image={props.item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

        // <Paper>
        //     <h2>{props.item.name}</h2>
        //     <p>{props.item.description}</p>

        //     <Button className="CheckButton">
        //         Check it out!
        //     </Button>
        //     <Image src={props.item.image} thumbnail/>
        // </Paper>
    )
}

export default AppCarousel;