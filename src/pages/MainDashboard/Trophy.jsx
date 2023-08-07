// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles';
import trophy from "../../Assets/images/misc/trophy.png";

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }} className=''>
    <CardContent>
      <div className="row ">
        <div className='col-8'>
          <Typography variant='h6'>Congratulations John! 🥳</Typography>
          <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
            Best seller of the month
          </Typography>
          <Typography variant='h5' sx={{ my: 2, color: 'primary.main' }}>
            $42.8k
          </Typography>
          <Button size='small' variant='contained' sx={{ my: 1 }}>
            View Sales
          </Button>
        </div>
        <div className="col">
           <div className='row w-100 m-0'>
          <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={trophy} className='img-fluid' style={{ height: '170px', width: '110px' }} alt='' />
          </div>
        </div>
        </div>
       
      </div>
    </CardContent>
  </Card>
  )
}

export default Trophy
