'use client';
import EmployeeForm from '../[id]/edit/new/page';
import { z } from 'zod';

export default function NewEmployeePage() {
  const formSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    dateOfBirth: z.date(),
    email: z.string().email('Invalid email address'),
    address: z.string().min(1),
    phoneNumber: z.string().regex(/^(\+3816|06)(\d{7,8}|(77|78)\d{5,6})$/),
    position: z.string().min(1),
    username: z.string().min(1),
    department: z.string().min(1),
    gender: z.enum(['male', 'female']),
    isActive: z.boolean().default(true),
  });

  type FormValues = z.infer<typeof formSchema>;
  return (
    <EmployeeForm
      title="Add New Employee"
      description="Enter the employee’s details to create their account and grant them access to the system."
      onSubmit={(data: FormValues) => console.log('Creating Employee:', data)}
      defaultValues={{
        firstName: '',
        lastName: '',
        dateOfBirth: undefined,
        email: '',
        address: '',
        phoneNumber: '',
        position: '',
        username: '',
        department: '',
        gender: undefined,
        isActive: true,
      }}
    />
  );
}
