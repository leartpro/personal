import React from 'react';
import {Tabs, Tab, Typography, Box} from '@mui/material';
import EducationGraph from "./EducationGraph";
import SkillGraph from "./SkillGraph";
import ProficienciesGraph from "./ProficienciesGraph";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const MyJourney = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <section id={"my-journey"}>
            <h1>MyJourney</h1>
            <Box>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Proficiencies" {...a11yProps(0)} />
                        <Tab label="Education" {...a11yProps(1)} />
                        <Tab label="Skills" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ProficienciesGraph/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <EducationGraph/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SkillGraph/>
                </TabPanel>
            </Box>
        </section>
    );
}

export default MyJourney;