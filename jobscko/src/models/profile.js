import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        enum: ["Candidate", "Recruiter"],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    memberShipTypes: {
        type: String,
        enum: ["basic", "premium", "enterprise"],
    },
    memberShipStartDate: {
        type: Date,
        default: Date.now,
    },
    memberShipEndDate: {
        type: Date,
    },
    isPremiumUser: {
        type: Boolean,
        default: false,
    },
    recruiterInfo: {
        name: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        companyRole: {
            type: String,
            required: true,
        },
    },
    candidateInfo: {
        name: {
            type: String,
            required: true,
        },
        currentJobLocation: {
            type: String,
            required: true,
        },
        preferedJobLocation: {
            type: String,
            required: true,
        },
        currentSalary: {
            type: Number,
            required: true,
        },
        noticePeriod: {
            type: String,
            required: true,
        },
        skills: {
            type: [String],
            required: true,
        },
        currentCompany: {
            type: String,
            required: true,
        },
        previousCompanies: {
            type: [String],
        },
        totalExperience: {
            type: Number,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        collegeLocation: {
            type: String,
            required: true,
        },
        graduatedYear: {
            type: Number,
            required: true,
        },
        linkedinProfile: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/.test(v);
                },
                message: "Invalid LinkedIn profile URL",
            },
        },
        githubProfile: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/)?(www\.)?github\.com\/.*$/.test(v);
                },
                message: "Invalid GitHub profile URL",
            },
        },
        resume: {
            type: String,
        },
    },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;