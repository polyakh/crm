import React, { useRef, useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
import {
    TextInput,
    Select,
    Stack,
    Button,
    Group,
    LoadingOverlay,
    Box
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useCreateLead } from '../../../api/hooks';
import { notifications } from '@mantine/notifications';
import {
    Building2,
    Mail,
    Phone,
    User,
    Users,
    CheckCircle2,
    XCircle,
} from 'lucide-react';

interface LeadFormValues {
    fullName: string;
    email: string;
    phone: string;
    contactPerson: string;
    owner: string;
    source: string;
    label: string;
    closeDate: Date | null;
}

const owners = [
    { value: 'alex', label: 'Alex Smith' },
    { value: 'sarah', label: 'Sarah Johnson' },
    { value: 'michael', label: 'Michael Brown' },
];

const sources = [
    { value: 'website', label: 'Website' },
    { value: 'referral', label: 'Referral' },
    { value: 'social', label: 'Social Media' },
    { value: 'event', label: 'Event' },
    { value: 'other', label: 'Other' },
];

const labels = [
    { value: 'cold', label: 'Cold Lead' },
    { value: 'warm', label: 'Warm Lead' },
    { value: 'hot', label: 'Hot Lead' },
];

// Simulated API call to check for duplicate names
const checkDuplicateName = async (name: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    // For demo purposes, consider "John Smith" as an existing name
    return name.toLowerCase() === 'john smith';
};

export const LeadForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<LeadFormValues>({
        initialValues: {
            contactPerson: '',
            email: '',
            phone: '',
            organization: '',
            ownerName: '',
            channel
        },
        //
        // contactPerson     String?     @db.VarChar(255) // Full name of the contact person
        //     organization      String?     @db.VarChar(255) // Company name for the lead
        //     ownerId           Int? // Owner's unique identifier (e.g., user ID)
        //     ownerName         String?     @db.VarChar(255) // Owner's display name
        //         leadSource        LeadSource? // Optional: Source of the lead (e.g., REFERRAL, WEBSITE)
        //     leadLabel         LeadLabel? // Optional: Lead priority/status (e.g., HOT, WARM, COLD)
        //         expectedCloseDate DateTime?   @db.Timestamptz() // Optional: Expected close date for the lead
        //             phone             String?     @db.VarChar(15) // Primary phone number (max 15 characters)
        //     email             String?     @db.VarChar(255) // Primary email address (max 255 characters)



        // Synchronous validators only
        validate: {
            fullName: (value) => {
                if (!value) return 'Full Name is required.';
                if (value.length < 2) return 'Name must be at least 2 characters.';
                return null;
            },
            email: (value) => {
                if (!value) return 'Email is required.';
                if (!/^\S+@\S+\.\S+$/.test(value))
                    return 'Please enter a valid email address.';
                return null;
            },
            phone: (value) => {
                if (value && !/^\+?[\d\s-()]{10,}$/.test(value))
                    return 'Please enter a valid phone number with at least 10 digits.';
                return null;
            },
            contactPerson: (value) => {
                if (!value) return 'Company Name is required.';
                if (value.length < 2)
                    return 'Company name must be at least 2 characters.';
                return null;
            },
        },
        validateInputOnChange: true,
        validateInputOnBlur: true,
    });


    const {  createLead } = useCreateLead()
    const handleSubmit = async (values: LeadFormValues) => {
        console.log(values);
        const {fullName, ...r} = values;
        await createLead(r)
        // try {
        //     setIsSubmitting(true);
        //
        //     // First, run the synchronous validations
        //     const validation = form.validate();
        //     if (validation.hasErrors) {
        //         notifications.show({
        //             title: 'Validation Error',
        //             message: 'Please fix the errors before submitting.',
        //             color: 'red',
        //             icon: <XCircle />,
        //         });
        //         return;
        //     }
        //
        //     // Then, perform the asynchronous duplicate name check
        //     const isDuplicate = await checkDuplicateName(values.fullName);
        //     if (isDuplicate) {
        //         form.setFieldError(
        //             'fullName',
        //             'This name already exists in the system.'
        //         );
        //         notifications.show({
        //             title: 'Validation Error',
        //             message: 'This name already exists in the system.',
        //             color: 'red',
        //             icon: <XCircle />,
        //         });
        //         // Focus the fullName field using the stored ref
        //         firstInputRef.current?.focus();
        //         return;
        //     }
        //
        //     // Simulate API call
        //     await new Promise((resolve) => setTimeout(resolve, 1500));
        //
        //     notifications.show({
        //         title: 'Success',
        //         message: 'Lead has been successfully created!',
        //         color: 'green',
        //         icon: <CheckCircle2 />,
        //     });
        //
        //     // Reset form after successful submission
        //     form.reset();
        // } catch (error) {
        //     notifications.show({
        //         title: 'Error',
        //         message: 'Failed to create lead. Please try again.',
        //         color: 'red',
        //         icon: <XCircle />,
        //     });
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    // Focus first input on mount
    useEffect(() => {
        firstInputRef.current?.focus();
    }, []);



    return (
        <Box component='form'     onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
            const values = form.values;
            handleSubmit(values);
        }}>
            <Box style={{ position: 'relative' }}>
                <LoadingOverlay
                    visible={isSubmitting}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                />
                <Stack gap="xs">
                    <TextInput
                        ref={firstInputRef}
                        label="Contact person"
                        placeholder="John Doe"
                        leftSection={<User size={16} />}
                        {...form.getInputProps('fullName', { withError: false })}
                        error={form.isTouched('fullName') ? form.errors.fullName : undefined}
                        withAsterisk
                        disabled={isSubmitting}
                    />

                    <TextInput
                        label="Email"
                        placeholder="name@example.com"
                        leftSection={<Mail size={16} />}
                        {...form.getInputProps('email')}
                        error={form.errors.email}
                        withAsterisk
                        disabled={isSubmitting}
                    />

                    <TextInput
                        label="Phone"
                        placeholder="+1 234 567 890"
                        leftSection={<Phone size={16} />}
                        {...form.getInputProps('phone')}
                        error={form.errors.phone}
                        description="Enter phone number with country code (e.g., +1 for US)"
                        disabled={isSubmitting}
                    />

                    <TextInput
                        required
                        label="Organization"
                        placeholder="Example Inc."
                        leftSection={<Building2 size={16} />}
                        {...form.getInputProps('organization')}
                        error={form.errors.organization}
                        withAsterisk
                        disabled={isSubmitting}
                    />

                    <Select
                        label="Owner"
                        placeholder="Select lead owner"
                        leftSection={<Users size={16} />}
                        data={owners}
                        searchable
                        clearable
                        {...form.getInputProps('owner')}
                        disabled={isSubmitting}
                    />

                    <Select
                        label="Source channel"
                        placeholder="– Select Source –"
                        data={sources}
                        searchable
                        clearable
                        {...form.getInputProps('source')}
                        disabled={isSubmitting}
                    />

                    <Select
                        label="Labels"
                        placeholder="– Choose Label –"
                        data={labels}
                        clearable
                        {...form.getInputProps('label')}
                        disabled={isSubmitting}
                    />

                    <DatePickerInput
                        label="Expected Close Date"
                        placeholder="YYYY-MM-DD"
                        valueFormat="YYYY-MM-DD"
                        clearable
                        minDate={new Date()}
                        {...form.getInputProps('closeDate')}
                        disabled={isSubmitting}
                    />

                    <Group justify="flex-end" mt="xl">
                        <Button
                            type="button"
                            variant="light"
                            onClick={() => form.reset()}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" loading={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save Lead'}
                        </Button>
                    </Group>
                </Stack>
            </Box>
        </Box>
    );
};

export default LeadForm;