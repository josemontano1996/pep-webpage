'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Dialog, DialogClose } from '../ui/dialog';
import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import { Textarea } from '../ui/textarea';

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
    console.log(values);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Become a Member</Button>
      </DialogTrigger>
      <DialogContent className="absolute left-0 top-0 z-50 h-screen w-screen backdrop-blur-xl">
        <Form {...form}>
          <form
            className="absolute left-1/2 top-1/2  w-[500px] -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-xl border border-blue-600 bg-white p-10"
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
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  name="message"
                  className="resize-none"
                  placeholder="Place your message here :)"
                />
              </FormControl>
            </FormItem>
            <div className="flex justify-between">
              <Button type="submit">Submit</Button>
              <DialogClose asChild>
                <Button type="button" variant={'ghost'}>
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
