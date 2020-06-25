import * as yup from 'yup'
//example to show how test is used



export const LoginSchmea = yup.object({
    username:yup.string().required().min(4),
    password:yup.string().required().min(6),
    
})


export const LoginTestSchmea = yup.object({
    username:yup.string().required().min(4),
    password:yup.string().required().min(6),
    rating:yup.string().required().test('is-num-1-5','Rating must bet number 1-5',(val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0 
    })
})