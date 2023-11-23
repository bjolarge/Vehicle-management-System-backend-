import { UserDocument } from '../user/schema/user.schema';
import { Request } from "express";

export default interface RequestWithUser extends Request {
    user: UserDocument
}