'use client';

import { useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name should be at least 2 characters long.' }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, { message: 'Message should be 10 characters long.' }),
});

const BecomeMember = () => {
  const { t } = useTranslation();
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { username, email, message } = values;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_MEMBERSHIP_TEMPLATE_ID!,
        {
          user_name: username,
          user_email: email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          form.reset();
          closeButton.current?.click();
          alert('You message was succefully submited, we will reach you ASAP.');
        },
        (error) => {
          console.log(error);
          alert('Something went wrong');
        },
      );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t('become-member')}</Button>
      </DialogTrigger>
      <DialogContent className="z-50 border-primary/80">
        <DialogHeader>
          <DialogTitle className={cn('pb-3 text-center text-2xl font-medium')}>
            {t('become-member-anfrage')}
          </DialogTitle>
          <DialogDescription className="text-center">
            <p>{process.env.NEXT_PUBLIC_PEP_EMAIL}</p>
            <address>
              <p>{process.env.NEXT_PUBLIC_PEP_STREET}</p>
              <p>
                {process.env.NEXT_PUBLIC_PEP_POSTAL}{' '}
                {process.env.NEXT_PUBLIC_PEP_CITY}
              </p>
            </address>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-6 rounded-xl p-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('nachricht')}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none"
                      placeholder=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button type="submit">{t('senden')}</Button>
              <DialogClose asChild>
                <Button type="button" variant={'ghost'} ref={closeButton}>
                  {t('close')}
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeMember;
