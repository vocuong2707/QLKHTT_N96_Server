import express from "express"
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
import { updateAccessToken } from "../controllers/user.controller";

const layoutRouter = express.Router();
layoutRouter.post("/create-layout",updateAccessToken,isAutheticated,authorizaRoles("Admin"),createLayout);
layoutRouter.post("/edit-layout",updateAccessToken,isAutheticated,authorizaRoles("Admin"),editLayout);
layoutRouter.get("/get-layout/:type",getLayoutByType);

export default layoutRouter