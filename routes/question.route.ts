import express from "express";
import { createQuestion, getAllQuestions, submitTest } from "../controllers/question.controller";
import { authorizaRoles, isAutheticated } from '../middleware/auth';
import { updateAccessToken } from "../controllers/user.controller";

const questionRouter = express.Router();

// Route to get questions for a test
questionRouter.get("/get-all-questions",updateAccessToken ,isAutheticated,authorizaRoles("User"), getAllQuestions);

// Route to submit test answers
questionRouter.put("/submit-test",updateAccessToken,isAutheticated,authorizaRoles("User"), submitTest);
questionRouter.post("/create-question", isAutheticated,authorizaRoles("Admin"), createQuestion);

export default questionRouter;
