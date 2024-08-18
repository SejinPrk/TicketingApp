"use client"
import React, { useState } from 'react'
import { Form, FormField, FormLabel, FormControl, FormItem } from './ui/form';
import { ticketSchema } from '@/ValidationSchemas/ticket';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type TicketFormData = z.infer<typeof ticketSchema>

const TicketForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();


  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  async function onSubmit(values: z.infer<typeof ticketSchema>) {
    try {
      setIsSubmitting(true);
      setError("");

      await axios.post("/api/tickets", values);
      setIsSubmitting(false);

      router.push("/tickets");
      // router.refresh(); // 더 이상 지원하지 않음
    } catch (error) {
      console.log(error);
      setError("Unknown Error Occured.");
      setIsSubmitting(false);
    }
  }

  return (
    <div className='rounded-md border w-full p-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
          <FormField 
            control={form.control} 
            name="title" 
            render={({field}) => (
              <FormItem>
                <FormLabel>Ticket Title</FormLabel>
                <FormControl>
                  <Input placeholder='Ticket Title...' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Controller
            name="description"
            control={form.control} 
            render={({field}) => (
              <SimpleMDE placeholder="Description" {...field} />
            )} 
          />
          <div className='flex w-full space-x-4'>
            <FormField control={form.control} name="status" render={({field}) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Status..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="OPEN">OPEN</SelectItem>
                        <SelectItem value="STARTED">STARTED</SelectItem>
                        <SelectItem value="CLOSED">CLOSED</SelectItem>
                      </SelectContent>
                  </Select>
                </FormItem>
              )} 
            />
            <FormField control={form.control} name="priority" render={({field}) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Priority..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="LOW">LOW</SelectItem>
                        <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                        <SelectItem value="HIGH">HIGH</SelectItem>
                      </SelectContent>
                  </Select>
                </FormItem>
              )} 
            />
          </div>
          <Button type='submit' disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default TicketForm;
