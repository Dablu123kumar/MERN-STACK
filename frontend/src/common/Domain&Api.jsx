
const backendDomain = 'http://localhost:5004'
const SummaryApi = {
    signUP:{
        url:`${backendDomain}/api/signup`,
        method:"post"
    },
    logIN:{
        url:`${backendDomain}/api/login`,
        method:"post"
    },
    current_user:{
        url:`${backendDomain}/api/user-details`,
        method:"get"
    },
    logout_user:{
        url:`${backendDomain}/api/logout`,
        method:"post"
    },
    signupEmployee:{
        url:`${backendDomain}/api/emp-signup`,
        method:"post"
    },
    allEmployee:{
        url:`${backendDomain}/api/all-employee`,
        method:"post"
    },
    searchEmployee:{
        url:`${backendDomain}/api/search-emp`,
        method:"get"
    },
    updateEmployee:{
        url:`${backendDomain}/api/emp-update`,
        method:"put"
    },
    deleteEmployee:{
        url:`${backendDomain}/api/emp-delete`,
        method:"delete"
    },
   
   
}

export default SummaryApi