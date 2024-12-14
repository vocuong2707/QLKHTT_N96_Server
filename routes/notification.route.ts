import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { getAllNotification, updateNotification } from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";

const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",updateAccessToken,isAutheticated,authorizaRoles("Admin"),getAllNotification);
notificationRouter.put("/update-notification/:id",isAutheticated,authorizaRoles("Admin"),updateNotification);


export default notificationRouter;