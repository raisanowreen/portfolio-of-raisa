import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';



const Progress = (props) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
      <div className="d-flex justify-content-center pt-3">
            <Stack spacing={20} direction="row">
           
            <Box>
                <div className="d-flex justify-content-center"><Typography className="text-warning pt-2 pe-2">70%</Typography>      <CircularProgress variant="determinate" value={70} /></div>
                
                <Typography className="text-warning ps-4 pt-2">HTML</Typography>
</Box>        
            <Box>
                <div className="d-flex justify-content-center"><Typography className="text-warning pt-2 pe-2">80%</Typography>      <CircularProgress variant="determinate" value={80} /></div>
                
                <Typography className="text-warning ps-4 pt-2">CSS</Typography>
</Box>        
            <Box>
                <div className="d-flex justify-content-center"><Typography className="text-warning pt-2">60%</Typography>      <CircularProgress variant="determinate" value={60} /></div>
                
                <Typography className="text-warning ps-4 pt-2">JS</Typography>
</Box>        

    </Stack>
      </div>
    );
};

export default Progress;