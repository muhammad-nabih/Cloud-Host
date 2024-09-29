'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginButton from '@/components/Button/LoginButton';
import { CardContent, CardFooter } from '@/components/ui/card';
import { z } from 'zod';
import { registerSchema } from '@/lib/validation/userSchema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterForm = () => {
  const [userEmailAndPassword, setUserEmailAndPassword] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = userEmailAndPassword;
  const router = useRouter();

  const [errors, setErrors] = useState<string[]>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      registerSchema.parse({ email, password, confirmPassword });
      toast.success('Account created successfully. You can now login.', {
        position: 'top-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors = err.errors.map((error) => error.message);
        setErrors(newErrors);

        // Display the errors immediately after catching them
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
    <>
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
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='confirmPassword' className='text-[#ffffff]'>
                Confirm Password
              </Label>
              <Input
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                placeholder='Please enter your password again'
                value={confirmPassword}
                onChange={handleEmailAndPasswordChange}
                className='border-[#5d9ff2] bg-[#192858] text-[#ffffff]'
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className='flex justify-between'>
          <LoginButton type='submit' text={'Register'} />
          <LoginButton type='button' text={'Cancel'} onClick={() => {}} />
        </CardFooter>
      </form>
    </>
  );
};

export default RegisterForm;
