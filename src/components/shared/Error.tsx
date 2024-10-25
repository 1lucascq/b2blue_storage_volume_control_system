import { Typography, Box } from '@mui/material';

const ErrorComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography variant="h2" color="error" gutterBottom>
        OPS!
      </Typography>
      <Typography variant="body1">
        Tivemos problemas com o servidor do banco de dados. Tente novamente em breve!
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
