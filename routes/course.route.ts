import express from "express";
import { editCourse, uploadCourse,getSingleCourse, getAllCourse, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview, deleteCourse, getAdminAllCourses, generateVideoUrl, addUserToCourse, getCoursesByUser } from "../controllers/course.controller";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";

const courseRouter = express.Router();
courseRouter.post("/create-course",updateAccessToken,isAutheticated,authorizaRoles("Teacher"),uploadCourse);
courseRouter.put("/edit-course/:id",updateAccessToken,isAutheticated,authorizaRoles("Teacher"),editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-courses",getAllCourse);
courseRouter.get("/get-course-content/:id",updateAccessToken,isAutheticated    ,getCourseByUser);
courseRouter.put("/add-question",updateAccessToken,isAutheticated,addQuestion);
courseRouter.put("/add-answer",updateAccessToken,isAutheticated    ,addAnswer);
courseRouter.put("/add-review/:id",updateAccessToken,isAutheticated    ,addReview);
courseRouter.put("/add-reply",updateAccessToken,isAutheticated  ,authorizaRoles("Admin")  ,addReplyToReview);
courseRouter.get("/get-admin-courses", getAdminAllCourses);
courseRouter.post("/getVdoCipherOTP"  ,generateVideoUrl);
courseRouter.get("/get-courses-by-id/:id", getCoursesByUser);

courseRouter.put("/delete-course/:id",updateAccessToken,isAutheticated  ,deleteCourse);
courseRouter.post("/add-user-to-course/:id", updateAccessToken,isAutheticated, addUserToCourse);

export default courseRouter;