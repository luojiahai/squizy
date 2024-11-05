import { Quiz } from "./model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = window.require("fs");

const PATH = "./data/quizzes.json";

export class DatabaseClient {
  private static instance: DatabaseClient;
  private quizzes: Quiz[];

  public static getInstance() {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  private constructor() {
    this.quizzes = JSON.parse(fs.readFileSync(PATH, "utf-8"));
  }

  public getQuizzes() {
    return this.quizzes;
  }

  public addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
    fs.writeFileSync(PATH, JSON.stringify(this.quizzes));
  }
}
