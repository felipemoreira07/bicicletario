import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import bicicletarioImage from '../../../../assets/bicicletarioHome.jpg';

const Galeria = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        padding: '5rem',
        [theme.breakpoints.down('sm')]: {
          height: '50vh',
        },
      }}
    >
      <Container maxWidth={false}>
        {/* Responsive header text */}
        <Typography
          variant="h2"
          align="center"
          fontWeight={600}
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            color: theme.palette.primary.main,
            marginBottom: '2rem',
          }}
        >
          Explore Nossa Galeria de Projetos
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <img
            src={bicicletarioImage}
            alt="Gallery Image"
            style={{
              width: '100%',
              maxWidth: '1200px',
              borderRadius: '2rem',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional shadow for depth
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Galeria;
