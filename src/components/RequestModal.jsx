import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

const RequestModal = (open, onClose, onSave, requestData) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>신청 문의</DialogTitle>
      <DialogContent>
        <Grid spacing={3}>
          <TextField />
        </Grid>
        <Grid>
          <TextField />
        </Grid>
        <Grid>
          <TextField />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestModal;
