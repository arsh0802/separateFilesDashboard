import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PercentageCircle from './PercentageCircle'; // Adjust the path as needed
import './Dashboard.css'; // Import the new CSS file

// Create a custom theme with Georgia font
const theme = createTheme({
    typography: {
        fontFamily: 'Georgia, serif',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Decrease background opacity
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Georgia, serif',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Remove uppercase transform
                },
            },
        },
    },
});

const Dashboard = () => {
    const [studentsEnrolledPercentage, setStudentsEnrolledPercentage] = useState(0);
    const [resourcesAccessedPercentage, setResourcesAccessedPercentage] = useState(0);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = {
                studentsEnrolled: 75,
                resourcesAccessed: 45,
            };

            setStudentsEnrolledPercentage(fetchedData.studentsEnrolled);
            setResourcesAccessedPercentage(fetchedData.resourcesAccessed);
        };

        fetchData();
    }, []);

    const batchData = [
        { no: 1, name: 'Class 7th JEE-UG', category: 'CBSE- Academics', duration: '1 Year' },
        { no: 2, name: 'Class 8th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 3, name: 'Class 9th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 4, name: 'Class 10th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 5, name: 'Class 11th JEE-UG', category: 'JEE Entrance', duration: '1 Year' }
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className="dashboard-container">
                <video autoPlay loop muted className="video">
                    <source src="/back video.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Tasks Completed</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={studentsEnrolledPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Overall Progress</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={resourcesAccessedPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Average Task Scores</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={studentsEnrolledPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom className="heading">
                                            My Batches
                                        </Typography>
                                        <Grid container className="tableHeaderContainer">
                                            <Grid item xs={1}>
                                                <Typography variant="body1" className="tableHeader">
                                                    S No.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" className="tableHeader">
                                                    Name
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" className="tableHeader">
                                                    Category
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography variant="body1" className="tableHeader">
                                                    Action
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" className="tableHeader">
                                                    Duration
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        {batchData.map((batch, index) => (
                                            <Grid container key={index} alignItems="center" className="tableRow">
                                                <Grid item xs={1}>
                                                    <Typography variant="body1" className="tableContent">
                                                        {batch.no}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" className="tableContent">
                                                        {batch.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" className="tableContent">
                                                        {batch.category}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2} className="actionColumn">
                                                    <Button variant="contained" className="resumeButton">
                                                        Resume
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" className="tableContent">
                                                        {batch.duration}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;
