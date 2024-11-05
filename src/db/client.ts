import { v4 as uuidv4 } from 'uuid';
import { Question } from "./model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = window.require('fs');

const PATH = './data/questions.json';

export class DatabaseClient {
  private static instance: DatabaseClient;
  private questions: Question[];

  public static getInstance() {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  private constructor() {
    this.questions = JSON.parse(fs.readFileSync(PATH, 'utf-8'));
  }

  public getQuestions() {
    return this.questions;
  }
}
