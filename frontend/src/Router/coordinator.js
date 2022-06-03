export const goToHomePage = (navigate) => {
    navigate("/");
};
export const goToLogin = (navigate) => {
    navigate("/login");
};
export const goToSignUp = (navigate) => {
    navigate("/signup");
};
export const goToSignUpTeam = (navigate) => {
    navigate("/signup-team");
};
export const goToLeaguerProfile = (navigate, id) => {
    navigate(`/leaguer/get/${id}`);
};
export const goToLeaguerRegistration = (navigate) => {
    navigate("/leaguerRegistration");
};
export const goToFormPage = (navigate) => {
    navigate("/form");
};
export const goToNewEvaluation = (navigate) => {
    navigate("/new-evaluation");
};
export const goToAdmPage = (navigate) => {
    navigate("/Adm");
};
export const goEditLeaguer = (navigate,id) => {
    navigate(`/editleaguer/${id}`);
};