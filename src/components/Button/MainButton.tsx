import { Button, ButtonProps } from '@/components/ui/button';

const MainButton = ({ onClick, text, type }: ButtonProps & { text: string; type: 'button' | 'submit' | 'reset' }) => {
	return (
		<Button className='text-md bg-blue-700 font-bold text-white hover:bg-blue-800' type={type} onClick={onClick}>
			{text}
		</Button>
	);
};

export default MainButton;
