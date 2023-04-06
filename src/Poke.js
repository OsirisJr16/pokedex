import React from 'react'
import { useEffect , useState } from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Poke = () => {
  const [datapokemon , setDatapokemon] = useState([])
  useEffect(()=> {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/40')
        .then(reponse => reponse.json())
        .then(data => setDatapokemon(data))
  },[])  

  return (
    <div style={{paddingTop : '100px' ,  }}>
     <div style={{display:'flex' , flexWrap : 'wrap' , gap : '16px' }}>
        {datapokemon.map((pokemon ,index) => (
            <Card sx={{maxWidth : 340}}>
                <CardMedia 
                    sx={{height : 150}}
                    image={pokemon.image}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' color="text.secondary">
                        {pokemon.name}
                    </Typography>
                    <Typography variant='body2' color="text.secondary"> 
                        {pokemon.id}
                        
                    </Typography>
                </CardContent>

            </Card>
        ))}
      </div>
    </div>
  )
}

export default Poke
