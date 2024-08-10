import Language from "@/components/Langauge";
import styles from "../page.module.css";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale} from 'next-intl/server';




export default function Home({params: {locale}}) {
  unstable_setRequestLocale(locale);

  console.log(" locale ", locale)
  const t = useTranslations('HomePage');

  return (
    <main className={styles.main}>
      <Language />
      <hr />
     
    <h1> {t('greet')} </h1>

    <Card sx={{ minWidth: 275 , marginY: 5}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {t('about.highlight_1')}
        </Typography>
        <Typography variant="h5" component="div">
        {t('about.sectionTitle')}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {t('name')}
        </Typography>
        <Typography variant="body1" >
        {t('about.text')}
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
