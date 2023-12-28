import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function TireCard({ tire }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tire.image} // Image URL from tire data
          alt={tire.brand} // Alt text from tire data
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tire.brand} - {tire.model} {/* Tire brand and model */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Size: {tire.size} <br />
            Condition: {tire.condition} <br />
            Price: ${tire.price} {/* More tire details */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit {/* Button to edit tire details */}
        </Button>
        <Button size="small" color="primary">
          Delete {/* Button to delete tire */}
        </Button>
      </CardActions>
    </Card>
  );
}
