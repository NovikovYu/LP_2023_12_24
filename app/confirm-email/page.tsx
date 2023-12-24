'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectUserEmail } from '@/store/slices/userEmailSlice';

export default function ConfirmYourEmail() {
  const theme = useTheme();
  const userEmail = useSelector(selectUserEmail);

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/checking-info.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'Confirm your email'}
          mainText={`We sent an email to ${userEmail ?? 'your email'}.
              Until you confirm the email, you will not be able to use some of the functionality of the platform`}
          buttonText={"OK, I'll confirm"}
          buttonLink={'/'}
        />
      </Container>
    </MainBox>
  );
}
