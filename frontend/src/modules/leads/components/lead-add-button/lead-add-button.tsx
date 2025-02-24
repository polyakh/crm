import { ModalNames, useModal } from '~shared/components/modal';
import {Button} from "@mantine/core";
import {Users} from "lucide-react";

const LeadAddButton = () => {
    const { openModal } = useModal();

    return <Button onClick={() => openModal(ModalNames.LEAD_ADD, { leadId: 123 })} leftSection={<Users size={20} />} size="md">
        Add New Lead
    </Button>

};

export default LeadAddButton;