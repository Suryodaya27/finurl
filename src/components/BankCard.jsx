import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BankCard = ({ bankName, loanId, bankId }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Card
      className="card-box-body my-3"
      sx={{
        position: 'relative',
        minWidth: 275,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)',
          borderRadius: '10px',
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
          opacity: 0,
        },
        '&:hover::before': {
          opacity: 1,
        },
      }}
    >
      <CardContent className="py-4">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bank Information
        </Typography>
        <Typography className="text-light" variant="h5" component="div">
          {bankName}
        </Typography>
        <Typography className="text-light" sx={{ mb: 1.5 }} color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions className="mb-3">
        <Button
          size="small"
          component="a"
          href={`/services/loans/loanbanks/loanbanksdescription?loanId=${loanId}&bankId=${bankId}`}
          variant="contained"
          
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BankCard;
