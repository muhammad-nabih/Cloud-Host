import { Button, ButtonProps } from '@/components/ui/button';

const LoginButton = ({
  onClick,
  text,
  type,
}: ButtonProps & { text: string; type: 'button' | 'submit' | 'reset' }) => {
  return (
    <Button
      className='bg-[#5d9ff2] text-[#192858] hover:bg-[#ffffff] hover:text-[#192858]'
      type={type}
      onClick={onClick}>
      {text}
    </Button>
  );
};

export default LoginButton;


