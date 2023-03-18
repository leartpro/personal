import React from 'react';
import ProjectGraph from "./ProjectGraph";
import {Tabs, Tab, Typography, Box} from '@mui/material';
import EducationGraph from "./EducationGraph";
import KnowledgeGraph from "./KnowledgeGraph";

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
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
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
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Projects" {...a11yProps(0)} />
                        <Tab label="Education" {...a11yProps(1)} />
                        <Tab label="Knowledge" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ProjectGraph/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <EducationGraph/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <KnowledgeGraph/>
                </TabPanel>
            </Box>
        </section>
    );
}

export default MyJourney;