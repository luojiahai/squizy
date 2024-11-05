import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { v4 } from "uuid";
import { Quiz } from "../db/model";
import { DatabaseClient } from "../db/client";

interface SquizyAddQuizProps {
  open: boolean;
  closeDialog: () => void;
}

export const SquizyAddQuiz = (props: SquizyAddQuizProps) => {
  const { open, closeDialog } = props;
  const client = DatabaseClient.getInstance();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toQuiz = (formJson: any): Quiz => {
    return {
      id: v4(),
      text: formJson.text,
      choices: [
        formJson.choice0,
        formJson.choice1,
        formJson.choice2,
        formJson.choice3,
      ],
      answer: parseInt(formJson.answer),
      note: formJson.note,
    };
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          client.addQuiz(toQuiz(formJson));
          closeDialog();
        },
      }}
    >
      <DialogTitle>Add quiz</DialogTitle>
      <DialogContent sx={{ width: "500px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            required
            multiline={true}
            id="text"
            name="text"
            label="Text"
            variant="standard"
          />
          <TextField
            required
            id="choice0"
            name="choice0"
            label="Choice 0"
            variant="standard"
          />
          <TextField
            required
            id="choice1"
            name="choice1"
            label="Choice 1"
            variant="standard"
          />
          <TextField
            required
            id="choice2"
            name="choice2"
            label="Choice 2"
            variant="standard"
          />
          <TextField
            required
            id="choice3"
            name="choice3"
            label="Choice 3"
            variant="standard"
          />
          <TextField
            required
            id="answer"
            name="answer"
            label="Answer"
            variant="standard"
            type="number"
          />
          <TextField
            required
            id="note"
            name="note"
            label="Note"
            variant="standard"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Dialog>
  );
};
