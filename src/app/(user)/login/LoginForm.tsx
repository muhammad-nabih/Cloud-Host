'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginButton from '@/components/Button/LoginButton';
import { CardContent, CardFooter } from '@/components/ui/card';
import { z } from 'zod';
import { loginSchema } from '@/lib/validation/userSchema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
  const [userEmailAndPassword, setUserEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userEmailAndPassword;
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginSchema.parse({ email, password });

      toast.success('Login successful', {
        position: 'top-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.map((error) => error.message);
        newErrors.forEach((error) =>
          toast.error(error, {
            position: 'top-left',
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }),
        );
      }
    }
    // Here you would typically handle the login logic
  };

  const handleEmailAndPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserEmailAndPassword({
      ...userEmailAndPassword,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <div className='grid w-full items-center gap-4'>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='email' className='text-[#ffffff]'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailAndPasswordChange}
              className='border-[#5d9ff2] bg-[#192858] text-[#ffffff]'
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='password' className='text-[#ffffff]'>
              Password
            </Label>
            <Input
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={password}
              onChange={handleEmailAndPasswordChange}
              className='border-[#5d9ff2] bg-[#192858] text-[#ffffff]'
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <LoginButton
          type='submit'
          text={'Login'}
          onClick={() => {
            console.log('Login clicked');
          }}
        />
        <LoginButton
          type='button'
          text={'Cancel'}
          onClick={() => {
            console.log('Cancel clicked');
          }}
        />
      </CardFooter>
    </form>
  );
};

export default LoginForm;
