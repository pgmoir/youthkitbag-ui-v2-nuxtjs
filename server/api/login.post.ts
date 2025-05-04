import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .nonempty('Email is required')
    .email('Invalid format for email'),
  password: z
    .string({ required_error: 'Password is required' })
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const body = await readBody(event);

  const result = loginSchema.safeParse(body);
  if (!result.success) {
    const rawErrors = result.error.flatten().fieldErrors;

    // 🔽 Only take the first error per field
    const firstErrors: Record<string, string> = {};
    for (const key of Object.keys(rawErrors) as (keyof typeof rawErrors)[]) {
      const messages = rawErrors[key];
      if (messages && messages.length > 0) {
        firstErrors[key] = messages[0];
      }
    }

    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
      data: firstErrors,
    });
  }

  const { email, password } = result.data;

  const response = await fetch(`${config.apiBaseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw createError({
      statusCode: response.status,
      statusMessage: errorData.message || 'Login failed',
      fatal: false,
    });
  }

  const data = await response.json();
  return data;
});
