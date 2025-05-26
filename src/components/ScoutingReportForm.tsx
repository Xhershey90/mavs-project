// src/components/ScoutingReportForm.tsx
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface Props {
  onSubmit: (comment: string) => void;
}

const ScoutingReportForm: React.FC<Props> = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    onSubmit(comment.trim());
    setComment(""); // Clear after submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="New Scouting Report"
        multiline
        fullWidth
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained">
        Add Report
      </Button>
    </Box>
  );
};

export default ScoutingReportForm;
