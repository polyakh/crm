import React from "react";
import { Modal, Group, Button, Title, ModalProps, useMantineTheme, Paper, Stack } from "@mantine/core";

export enum ModalSize {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg",
    EXTRA_LARGE = "xl",
}

export enum TitleOrder {
    DEFAULT = 4,
}

export enum Spacing {
    HEADER_PADDING = "xs",
    FOOTER_PADDING = "sm",
}

export enum ModalVariant {
    FILLED = "filled",
    LIGHT = "light",
    OUTLINE = "outline",
    SUBTLE = "subtle",
}

interface ModalAction {
    label: string;
    onClick: () => void;
    variant?: ModalVariant;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
}

interface AppModalProps extends Partial<ModalProps> {
    title: string;
    onClose?: () => void;
    children: React.ReactNode;
    actions?: ModalAction[];
    size?: ModalSize;
}


// TODO: Update header background to theme.colors.gray[2] or theme.colors.blue[0] for better contrast
// TODO: Match footer background to the header for consistency
// TODO: Update Cancel button color to theme.colors.gray[4]
// TODO: Improve Save button hover and focus states with theme.colors.blue[7] or theme.colors.blue[8]
// TODO: Update input labels to use theme.colors.gray[6] for softer text
// TODO: Add section dividers between "PERSON," "Phone," and "Email" sections using theme.colors.gray[3]

const AppModal: React.FC<AppModalProps> = ({
                                               title,
                                               onClose,
                                               children,
                                               actions = [],
                                               size = ModalSize.MEDIUM,
                                               ...props
                                           }) => {
    const theme = useMantineTheme();
    const headerBg = theme.colors.gray[2];
    const footerBg = theme.colors.gray[2];

    const handleClose = () => {
        if(onClose) {
            onClose()
        }

    }

    return (
        <Modal opened  centered={true}  styles={{
            root: { padding: 0 },      // Modal wrapper
            inner: { padding: 0 },     // Space between overlay and modal
            content: { padding: 0 },   // Main modal content wrapper
            body: { padding: 0 },      // Modal body
            header: {                  // Modal header
                padding: 0,
                marginBottom: 0
            },
            title: { margin: 0 },      // Modal title
            close: {                   // Close button
                margin: 0,
                top: 0,
                right: 0
            }
        }} onClose={onClose} size={size} {...props} withCloseButton={false}>
            <Stack>
                <Paper style={{ backgroundColor: headerBg }} px={Spacing.HEADER_PADDING} py={Spacing.HEADER_PADDING} radius={0} shadow="xs">
                    <Group justify="space-between" align="center">
                        <Title order={TitleOrder.DEFAULT} >{title}</Title>
                        <Button variant={ModalVariant.SUBTLE} styles={{ root: { color: theme.colors.gray[7] }}} onClick={onClose} size="compact">
                            ✕
                        </Button>
                    </Group>
                </Paper>

                <Stack px={Spacing.HEADER_PADDING} py={Spacing.HEADER_PADDING}>{children}</Stack>

                {actions.length > 0 && (
                    <Paper style={{ backgroundColor: footerBg }} px={Spacing.FOOTER_PADDING} py={Spacing.FOOTER_PADDING} radius={0} shadow="xs">
                        <Group justify="flex-end">
                            {actions.map(({ label, onClick, variant = ModalVariant.FILLED, color = "blue", disabled = false, loading = false }, index) => (
                                <Button key={index} variant={variant} color={color} onClick={onClick} disabled={disabled} loading={loading}>
                                    {label}
                                </Button>
                            ))}
                        </Group>
                    </Paper>
                )}
            </Stack>
        </Modal>
    );
};

export default AppModal;