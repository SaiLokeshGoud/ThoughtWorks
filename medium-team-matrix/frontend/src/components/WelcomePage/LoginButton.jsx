const LoginButton = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

  const handleLogin = () => {
    if (!CLIENT_ID) {
      console.error('CLIENT_ID is missing');
    }
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  };
  
  return (
    <button className="loginButton"  onClick={handleLogin}>Login</button>
  );
};

export default LoginButton;
