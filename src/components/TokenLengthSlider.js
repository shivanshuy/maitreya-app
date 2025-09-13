import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';


function ValueLabelComponent(props) {
  const {children, value} = props;
  return (
    <Tooltip open="true" componentsProps={{
      tooltip: {
        sx: {
          bgcolor: '#ff4b4b',
          '& .MuiTooltip-arrow': {
            color: '#ff4b4b',
          },
        },
      },
    }} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function TokenLengthSlider() {
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
      <Slider
        size="small"
        sx={{color: '#ff4b4b'}}
        onChange={handleSliderChange}
        aria-label="custom thumb label"
        defaultValue={20}
        step={10}
        min={0}
        max={512}
      />
      <Box sx={{display: 'flex', flexDirection: 'row', width: '22px', ml: '10px', mt: '5px'}}>
        <Input
          value={value}
          size="small"
          disableUnderline={true}
          sx={{fontSize: '12px'}}
        />
      </Box>
    </Box >
  );
}
