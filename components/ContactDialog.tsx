'use client';

import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button, buttonVariants } from './ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name should be at least 2 characters long.' }),
  email: z.string().email(),
  subject: z
    .string()
    .min(5, { message: 'Message should bee 10 characters long.' }),
  message: z
    .string()
    .min(10, { message: 'Message should be 10 characters long.' }),
});

type Props = {
  triggerStyle?: string;
};

const ContactDialog = ({ triggerStyle = '' }: Props) => {
  const { t } = useTranslation();
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { username, email, message, subject } = values;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          user_name: username,
          user_email: email,
          user_subject: subject,
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
      <DialogTrigger className={cn('hover:cursor-pointer', triggerStyle)}>
        {t('kontakt')}
      </DialogTrigger>
      <DialogContent className="z-50 border-primary/80">
        <DialogHeader>
          <DialogTitle className={cn('pb-3 text-center text-2xl font-medium')}>
            {t('anfrage')}
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('betreff')}</FormLabel>
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
              <DialogClose
                className={cn(buttonVariants({ variant: 'ghost' }))}
                ref={closeButton}
              >
                {t('close')}
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
