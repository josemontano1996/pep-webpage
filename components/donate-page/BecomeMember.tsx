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
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';

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
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message:
        'Hello, I would like to become a member, could I have more information please?',
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
        <Button>Become a Member</Button>
      </DialogTrigger>
      <DialogContent className="z-50 border-primary/80">
        <Form {...form}>
          <form
            className="space-y-6 p-2 rounded-xl"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h2 className="pb-3 text-center text-2xl font-medium">
              Membership Contact Form
            </h2>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
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
                  <FormLabel>Your Email</FormLabel>
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
                  <FormLabel>Your message</FormLabel>
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
              <Button type="submit">Submit</Button>
              <DialogClose asChild>
                <Button type="button" variant={'ghost'} ref={closeButton}>
                  Close
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
