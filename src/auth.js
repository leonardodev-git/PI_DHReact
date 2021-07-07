export default function isAuthenticated  () { 
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  
  return !!getCurrentUser().acessToken;

}


