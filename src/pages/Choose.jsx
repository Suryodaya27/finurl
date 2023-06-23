import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { FaBalanceScale, FaMoneyCheckAlt, FaUserFriends, FaHandHoldingUsd } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Flexible Loan Options',
      description: 'We offer a variety of loan options to suit your financial needs. Whether you need a personal loan, business loan, or mortgage, we have you covered.',
      icon: <FaBalanceScale size={48} />,
    },
    {
      title: 'Competitive Interest Rates',
      description: 'Our interest rates are highly competitive, ensuring that you get the best deal possible. We believe in transparent pricing and no hidden fees.',
      icon: <FaMoneyCheckAlt size={48} />,
    },
    {
      title: 'Quick and Easy Application Process',
      description: 'Applying for a loan or credit card with us is a breeze. Our online application process is simple, fast, and hassle-free.',
      icon: <FaUserFriends size={48} />,
    },
    {
      title: 'Excellent Customer Service',
      description: 'We pride ourselves on delivering exceptional customer service. Our team is available to assist you at every step of the way and answer any questions you may have.',
      icon: <FaHandHoldingUsd size={48} />,
    },
  ];

  return (
    <Container className='bg-main-body py-5'>
      <div className="common-heading container text-center text-light common-title pt-5 ">
          <h2 className="common-heading text-light">
            Why Choose Us
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
            className='card-box-body' sx={{
                height: '100%',
                position: 'relative',
                minWidth: 275,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
              <CardHeader className="text-light"
                avatar={feature.icon}
                title={feature.title}
                titleTypographyProps={{ variant: 'h6' }}
                sx={{ paddingBottom: 0 }}
              />
              <CardContent>
                <Typography variant="body1" className='text-light'>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
