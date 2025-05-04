import axios from 'axios';
import { z } from 'zod';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const result = schema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: result.error.errors[0].message,
    });
  }

  const { email, password } = result.data;

  try {
    // Call old API
    const { data } = await axios.post(
      'https://youthkitbag-core-api.onrender.com/auth/login',
      {
        email,
        password,
      }
    );
    console.log(JSON.stringify(data));

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  }
});
