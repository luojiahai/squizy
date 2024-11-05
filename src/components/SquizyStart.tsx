import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DatabaseClient } from "../db/client";
import { Quiz } from "../db/model";
import { SquizyTask } from "./SquizyTask";

export const SquizyStart = () => {
  const client = DatabaseClient.getInstance();
  const [numQuizzes, setNumQuizzes] = useState<number>(
    client.getQuizzes().length,
  );
  const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);

  const validateNumQuizzes = (n: number) => {
    return n > 0 && n <= client.getQuizzes().length;
  };

  const generateQuizzes = (n: number) => {
    if (!validateNumQuizzes(n)) {
      return;
    }
    setQuizzes(
      client
        .getQuizzes()
        .sort(() => Math.random() - 0.5)
        .slice(0, n),
    );
  };

  if (quizzes) {
    return <SquizyTask quizzes={quizzes} setQuizzes={setQuizzes} />;
  }

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 2 }}
    >
      <Typography variant="h4">Welcome to Squizy!</Typography>
      <Typography variant="body1">
        There are {client.getQuizzes().length} quizzes in the library.
      </Typography>
      <Typography variant="body1">
        Enter the number of quizzes you would like to take:
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          required
          type="number"
          defaultValue={numQuizzes}
          sx={{ mr: 2 }}
          error={!validateNumQuizzes(numQuizzes)}
          helperText={validateNumQuizzes(numQuizzes) ? "" : "Incorrect entry."}
          onChange={(e) =>
            e.target.value
              ? setNumQuizzes(parseInt(e.target.value))
              : setNumQuizzes(numQuizzes)
          }
        />
        <Button
          variant="outlined"
          disabled={!validateNumQuizzes(numQuizzes)}
          onClick={() => generateQuizzes(numQuizzes)}
        >
          Confirm
        </Button>
      </Box>
    </Container>
  );
};
