import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Quiz } from "../db/model";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type ButtonVariant = "text" | "outlined" | "contained";
type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

interface SquizyTaskProps {
  quizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
}

export const SquizyTask = ({ quizzes, setQuizzes }: SquizyTaskProps) => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 2 }}
    >
      <Typography variant="h4">Quiz #{index + 1}</Typography>
      <Typography variant="body1">{quizzes[index].text}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
        {quizzes[index].choices.map((choice, i) => {
          let variant: ButtonVariant = "outlined";
          let color: ButtonColor = "inherit";
          if (answer !== null) {
            if (i === quizzes[index].answer) {
              variant = "contained";
              color = "success";
            } else if (i === answer) {
              variant = "contained";
              color = "error";
            }
          }
          return (
            <Button
              key={i}
              variant={variant}
              color={color}
              sx={{ justifyContent: "flex-start" }}
              onClick={() => setAnswer(i)}
            >
              {choice}
            </Button>
          );
        })}
      </Box>
      {answer !== null && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
          <Typography variant="h5">
            {answer === quizzes[index].answer ? "Correct" : "Incorrect"}
          </Typography>
          <Typography variant="body1">{quizzes[index].note}</Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          disabled={answer === null}
          onClick={() => {
            if (index === quizzes.length - 1) {
              setAnswer(null);
              setQuizzes(null);
            } else {
              setIndex(index + 1);
              setAnswer(null);
            }
          }}
        >
          {index === quizzes.length - 1 ? "Finish" : "Next"}
        </Button>
        <Button variant="outlined" onClick={() => setAnswer(null)}>
          Reset
        </Button>
      </Box>
    </Container>
  );
};
