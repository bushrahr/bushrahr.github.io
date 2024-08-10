import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import {getTranslations} from 'next-intl/server';

// @ts-ignore
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Home() {
  const t = useTranslations();



  return (
    <main className={styles.main}>
      {t('welcome')}
    <h1>Hi I am Bushra Rehman Khan!</h1>

    <Card sx={{ minWidth: 275 , marginY: 5}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Teaching is an art
        </Typography>
        <Typography variant="h5" component="div">
          About {bull}me{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Bushra Rehman Khan
        </Typography>
        <Typography variant="body1" >
        Bushra Rehman Khan is a dedicated primary school teacher with 9+ years of experience. Holding a B.ed in Teaching, 
    Bushra Rehman Khan creates an engaging and supportive classroom environment that fosters a love for learning. Known for their patience and creativity, 
    Bushra Rehman Khan tailors lessons to meet each child's needs and interests, making education both fun and meaningful. Outside the classroom, 
    Bushra Rehman Khan enjoys doing the creativity work and assignments for the class, enriching their teaching with real-world connections.
          <br />
         
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </main>
  );
}
