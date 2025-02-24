import { useState } from 'react';
import { User, Building2, Calendar, Users } from 'lucide-react';
import {
    TextInput,
    Select,
    NumberInput,
    Stack,
    Group,
    Button,
    Title,
    Grid,
    Box
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useModal, ModalNames, AppModal } from '~shared/components'

import LeadForm from './lead-form/lead-form.tsx'

const OPENED = true

function AddLeadModal() {
    const [phoneFields, setPhoneFields] = useState([{ number: '', type: 'Work' }]);
    const [emailFields, setEmailFields] = useState([{ email: '', type: 'Work' }]);

    const { isModalOpen, modalData, closeModal } = useModal();

    if (!isModalOpen(ModalNames.LEAD_ADD)) {
        return null
    }


    const addPhoneField = () => {
        setPhoneFields([...phoneFields, { number: '', type: 'Work' }]);
    };

    const addEmailField = () => {
        setEmailFields([...emailFields, { email: '', type: 'Work' }]);
    };

    return (
        <AppModal
            opened={OPENED}
            title="Add lead"
            padding="md"
        >
            <LeadForm />
        </AppModal>
    );
};

export default AddLeadModal;