import { Education } from "./education";
import { EmploymentHistory } from "./employment-history";
import { PersonalDetails } from "./personal-details";
import { SocialLink } from "./social-link";

export interface ResumeContent {
    personalDetails:   PersonalDetails;
    employmentHistory: EmploymentHistory[];
    education:         Education[];
    socialLinks:       SocialLink[];
    skills:            string[];
    languages:         string[];
    interests:         string[];
}


