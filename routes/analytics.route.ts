import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";


const analyticsRouter = express.Router();
analyticsRouter.get("/get-users-analytics",isAutheticated,authorizaRoles("Admin"),getUsersAnalytics);
analyticsRouter.get("/get-courses-analytics",isAutheticated,authorizaRoles("Admin"),getCoursesAnalytics);
analyticsRouter.get("/get-orders-analytics",isAutheticated,authorizaRoles("Admin"),getOrdersAnalytics);

export default analyticsRouter;