import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Icon, Typography, styled } from '@mui/material'
const Dashboard = () => {
    const theme = useTheme();
    const [recipes, setRecipes] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleExpandClick = idx => {
        if (expandedIndex === idx) {
            setExpandedIndex(null); // collapse the card if it's already expanded
        } else {
            setExpandedIndex(idx); // expand the card
            console.log(idx)
            console.log(expandedIndex)
            console.log(idx === expandedIndex)
        }
    }
    const ExpandMore = styled(IconButton)(({ theme, expanded }) => ({
        transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));
    const getMimeType = (base64Data) => { // decodes a portion of the base64 encoded string into bytes and determine the file type
        // console.log(typeof base64Data, base64Data);
        // Remove the prefix if it exists
        // const prefixMatch = base64Data.match(/^data:(.*?);base64,/);
        // if (prefixMatch) {
        //     base64Data = base64Data.substring(prefixMatch[0].length);
        // }

        // Get the first byte
        const byte = atob(base64Data.substring(0, 4)).charCodeAt(0);

        switch (byte) {
            case 0xff:
                return 'image/jpeg';
            case 0x89:
                return 'image/png';
            default:
                return 'error!';
        }
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/getRecipes')
            .then(res => {
                console.log(res.data)
                setRecipes(res.data)
            })
            .catch(err => {
                console.log(err)
                console.log('error on front-end was caught')
            },)
    }, [])
    return (
        <>
                <div className="recipe-container">
                    {recipes.map((recipe, idx) => (
                            <Card key = {idx} sx={idx !== expandedIndex?{height:"max-content"}:''}>
                                <CardHeader
                                    title={recipe.name}
                                    subheader={`Time to cook: Hours: ${recipe.hours} Minutes: ${recipe.minutes}`}
                                />
                                <CardMedia
                                    component='img'
                                    height='170'
                                    image={`data:${getMimeType(recipe.imageOfDish)};base64,${recipe.imageOfDish}`}
                                    alt={`${recipe.name}`}
                                />

                                <CardContent>
                                    <Typography variant="body2">
                                        {recipe.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expanded={expandedIndex === idx}
                                        onClick={() => handleExpandClick(idx)}
                                        aria-expanded={expandedIndex === idx}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expandedIndex === idx} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                        Instructions: {recipe.ingredients.join(",")}
                                        </Typography>
                                        <Typography paragraph>
                                        Instructions: {recipe.instructions.join(",")}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>))
                    }
                </div>
        </>)
}       

export default Dashboard;