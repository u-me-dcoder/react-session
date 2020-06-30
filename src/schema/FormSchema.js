import * as yup from 'yup'
//example to show how test is used



export const AddCategorySchema = yup.object({
    name:yup.string().required(),
    avatar:yup.mixed().nullable().required()   
})

export const AddQuestionSchema = yup.object({
    title:yup.string().required(),
    answer:yup.string().required().min(2),
    level:yup.string().required(),
 
})