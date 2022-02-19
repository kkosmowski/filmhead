import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface BackButtonProps {
  label?: string;
}

const BackButton = ({ label }: BackButtonProps) => {
  const router = useRouter();

  const goBack = () => {
    const splitPathname = router.pathname.split('/');
    splitPathname.pop();
    
    router.push(splitPathname.join('/'));
  };

  return (
    <Button onClick={ goBack } variant="contained" color="primary">
      { label || 'Back' }
    </Button>
  );
};

export default BackButton;