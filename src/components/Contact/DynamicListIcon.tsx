import React from "react";

import * as Icons from '@mui/icons-material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {ListItemIcon} from "@mui/material";
import IconsType from "../../types/IconsType";

const DynamicListIcon = ({name}: { name: string }) => {
    const IconComponent = (Icons as IconsType)[name];
    if (!IconComponent) {
        return <ListItemIcon sx={{color: 'inherit'}}><RadioButtonUncheckedIcon/></ListItemIcon>;
    }
    return <ListItemIcon sx={{color: 'inherit'}}><IconComponent/></ListItemIcon>;
};

export default DynamicListIcon;
