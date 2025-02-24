import { Tooltip, TooltipProps } from "@mantine/core";
import { Info } from "lucide-react";

interface InfoTooltipProps extends Partial<TooltipProps> {
    label: string;
    iconSize?: number;
}

const DEFAULT_ICON_SIZE = 16;
const DEFAULT_COLOR: TooltipProps["color"] = "blue";
const DEFAULT_POSITION: TooltipProps["position"] = "top";

function InfoTooltip({ label, color = DEFAULT_COLOR, iconSize = DEFAULT_ICON_SIZE, position = DEFAULT_POSITION, ...tooltipProps }: InfoTooltipProps) {

    return <Tooltip
        label={label}
        position={position}
        color={color}
        withArrow
        transitionProps={{ transition: "fade", duration: 200 }}
        {...tooltipProps}
    >
        <Info size={iconSize} className="cursor-help text-gray-400 hover:text-gray-600 transition-colors duration-200" />
    </Tooltip>
}


InfoTooltip.displayName = "InfoTooltip";

export default InfoTooltip;
