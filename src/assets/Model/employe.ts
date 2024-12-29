export interface Employe {
    emp_id: string
    emp_name: string
    email: string
    mobile: string
    age: string
    training_batch: string
    doj: string
}


export class EmployeeLearningData {

    // emp_code:number
    // Training_Batch: string
    // Certifications:string
    // Mapped_Skills: string
    // Final_Skills: string
    // Foundation_Start_Date: any
    // Foundation_End_Date: any
    // Performance: string
    // Foundation_Score: string
    // Special_Training_Start_Date:any
    // Advanced_Special_Training_End_Date:any
    // ALP_Start_Date: any
    // ALP_End_Date: any
    // Training_Completion_Date: any
    // In_Training: string
    // LandD: string


    emp_id: string
    training_batch: string
    joining_psl: string
    wfo_date: any
    certification: any
    certification_two: any
    certification_three: any
    foundation_track: any
    score: string
    foundation_start_date: any
    foundation_end_date: any
    foundation_performance: string
    advance_training_start_date: any
    advance_training_end_date: any
    alp_start_date: any
    alp_end_date: any
    training_completion_date: any
    current_training: string
    current_BU: string
    l_and_d_comments: string
}

//final_skills mapped_skills
