import LoginForm from '@/app/(user)/register/RegisterForm';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DisplayAnimation from '@/lib/framer-motion/DisplayAnimation';
import { ToastContainer } from 'react-toastify';

export default function Register() {
  return (
    <div className='fix-height flex items-center justify-center bg-gradient-to-tl from-blue-300 to-blue-950'>
      <ToastContainer />
      <DisplayAnimation>
        <Card className='my-3 w-[350px] bg-[#192949]'>
          <CardHeader>
            <CardTitle className='text-[#5d9ff2]'>Register</CardTitle>
            <CardDescription className='text-[#ffffff]'>
              Create an account to access our features and start your cloud
              journey.
            </CardDescription>
          </CardHeader>
          <LoginForm />
        </Card>
      </DisplayAnimation>
    </div>
  );
}
