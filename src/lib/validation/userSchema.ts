// lib/validation/userSchemas.ts
import { z } from 'zod';

export const registerSchema = z
	.object({
		email: z.string().email('Please enter a valid email'),
		password: z.string().min(8, 'Password must be at least 8 characters long'),
		confirmPassword: z.string().min(8, 'Confirm password must be at least 8 characters long'),
	})
	.refine((data) => data.password == data.confirmPassword, {
		message: "passwords don't match",
		path: ['confirmPassword'],
	});

export const loginSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const commentSchema = z.object({
	comment: z.string().min(1, 'Please enter a comment'),
});
