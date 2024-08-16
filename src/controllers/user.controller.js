import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";

const registerUser = asyncHandler( async(req,res) => {
    //get user details from frontend

    //validation - empty or not

    // check if user already exists

    //check for images, check for avatar

    // upload them to cloudinary, avatar

    //create user object - create entry in db

    //remove password and refresh token field from response

    //check for user creation

    //return response
    const {fullName, email, username, password} = req.body 
    console.log("email: ", email);
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) 
        {
        throw new ApiError(400, "All fields are required.");
    }

    const existingUser = User.findOne({
        $or: [{ username }, { email }]})
    })

    if (existingUser) {
        throw new ApiError(409, "Username or email already existed.")
    }

    console.log(req.files);

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    
    if (!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required.")
    }
    

export {registerUser}
