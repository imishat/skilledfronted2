// const makeApiUrl = path => `${http://104.131.168.151/api/v1}/${path}`;
const makeApiUrl = path => {
  const baseUrl = "http://104.131.168.151/api/v1"; // Wrap the base URL in quotes

  // No need to check if the baseUrl is defined and not empty since it's a constant

  return `${baseUrl}/${path}`;
};

export const endpoints = {
  auth: {
    login: makeApiUrl("auth/login"),
    register: makeApiUrl("auth/register"),
    forgotPassword: makeApiUrl("auth/forgot-password"),
    // verifyEmail: makeApiUrl("auth/verify-email"),
    resetPassword(token) {
      return makeApiUrl(`auth/reset-password?token=${token}`);
    },
    verfiyAccount(token) {
      return makeApiUrl(`auth/verify-email?token=${token}`);
    },
  },
  user: {
    userById(id) {
      return makeApiUrl(`users/${id}`);
    },
  },
  post: {
    getPosts: "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5",
  }, // TODO: This is a dummy endpoint. Replace with your own. It is just for demonstration purposes.
  jobSeeker: {
    jobSeekerById(id) {
      return makeApiUrl(`applicant/${id}`);
    },
    updateJobSeeker: makeApiUrl("applicant/update-my-profile"),
    uplaodResume: makeApiUrl("applicant/upload-resume"),
    uploadVideoResume: makeApiUrl("applicant/upload-video-resume"),
    deleteVideoResume(id) {
      return makeApiUrl(`applicant/delete-video-resume/${id}`);
    },
  },
  jobCategories: {
    getAllCategories: makeApiUrl("job-category"),
    addCategory: makeApiUrl("job-category"),
    deleteCategory(id) {
      return makeApiUrl(`job-category/${id}`);
    },
    updateCategory(id) {
      return makeApiUrl(`job-category/${id}`);
    },
  },
};
