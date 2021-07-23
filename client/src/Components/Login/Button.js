import React from 'react';
import { GithubLoginButton } from 'react-social-login-buttons';

export default function Button() {
  const handleGithubLogin = () => {
    window.location = 'http://localhost:5000/auth/github';
  };

  return <GithubLoginButton onClick={handleGithubLogin} />;
}
