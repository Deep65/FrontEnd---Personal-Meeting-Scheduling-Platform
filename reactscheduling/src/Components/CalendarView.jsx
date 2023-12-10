import React, { useState,useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const CalendarView = () => {
  const [daysOfWeek, setDaysOfWeek] = useState([
    { day: 'Monday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Tuesday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Wednesday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Thursday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Friday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Saturday', isAddingDatetime: false, datetimeBoxes: [] },
    { day: 'Sunday', isAddingDatetime: false, datetimeBoxes: [] },
  ]);

  const handleAddDatetimeBox = (dayIndex) => {
    const updatedDaysOfWeek = [...daysOfWeek];
    updatedDaysOfWeek[dayIndex].isAddingDatetime = true;
    updatedDaysOfWeek[dayIndex].datetimeBoxes.push({ start: '', end: '' }); 
    setDaysOfWeek(updatedDaysOfWeek);
  };



  const handleRemoveDatetimeBox = (dayIndex) => {
    const updatedDaysOfWeek = [...daysOfWeek];
    updatedDaysOfWeek[dayIndex].isAddingDatetime = false;
    updatedDaysOfWeek[dayIndex].datetimeBoxes = [];
    setDaysOfWeek(updatedDaysOfWeek);
  };

  const handleAddStartEndTime = (dayIndex) => {
    const updatedDaysOfWeek = [...daysOfWeek];
    updatedDaysOfWeek[dayIndex].datetimeBoxes.push({ start: '', end: '' });
    setDaysOfWeek(updatedDaysOfWeek);
  };

  const handleRemoveStartEndTime = (dayIndex, datetimeIndex) => {
    const updatedDaysOfWeek = [...daysOfWeek];
    updatedDaysOfWeek[dayIndex].datetimeBoxes.splice(datetimeIndex, 1);
    setDaysOfWeek(updatedDaysOfWeek);
  };

  return (
    <Container style={{ minWidth: '600px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Book Slot
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Datetimes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {daysOfWeek.map((dayInfo, dayIndex) => (
                <TableRow key={dayIndex}>
                  <TableCell>{dayInfo.day}</TableCell>
                  <TableCell>
                    {dayInfo.isAddingDatetime ? (
                      <>
                        {dayInfo.datetimeBoxes.map((datetime, datetimeIndex) => (
                          <Grid container spacing={2} alignItems="center" key={datetimeIndex} pt={2}>
                            <Grid item>
                              <TextField
                                label="Start Time"
                                type="time"
                                variant="outlined"
                                value={datetime.start}
                                onChange={(e) => {
                                  const updatedDaysOfWeek = [...daysOfWeek];
                                  updatedDaysOfWeek[dayIndex].datetimeBoxes[datetimeIndex].start = e.target.value;
                                  setDaysOfWeek(updatedDaysOfWeek);
                                }}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </Grid>
                            <Grid item>
                              <TextField
                                label="End Time"
                                type="time"
                                variant="outlined"
                                value={datetime.end}
                                onChange={(e) => {
                                  const updatedDaysOfWeek = [...daysOfWeek];
                                  updatedDaysOfWeek[dayIndex].datetimeBoxes[datetimeIndex].end = e.target.value;
                                  setDaysOfWeek(updatedDaysOfWeek);
                                }}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </Grid>
                            <Grid item>
                              <IconButton
                                color="secondary"
                                aria-label="Remove Datetime"
                                onClick={() => handleRemoveStartEndTime(dayIndex, datetimeIndex)}
                              >
                                <RemoveIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                        <IconButton
                          color="primary"
                          aria-label="Add Datetime"
                          onClick={() => handleAddStartEndTime(dayIndex)}
                        >
                          <AddIcon />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton
                        color="primary"
                        aria-label="Add Datetime"
                        onClick={() => handleAddDatetimeBox(dayIndex)}
                      >
                        <AddIcon />
                      </IconButton>
                    )}
                    {dayInfo.isAddingDatetime && (
                      <IconButton
                        color="secondary"
                        aria-label="Remove Datetime"
                        onClick={() => handleRemoveDatetimeBox(dayIndex)}
                      >
                        <CloseIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default CalendarView;
