import React from "react";
import "./AuthCntrls.css";
import { kakaoIcon, googleIcon, facebookIcon } from "assets/svg/svgExport";
import Box from "components/atoms/Box/Box";
import { InputButton, TextInput } from "components/atoms/Input/Input";
import Image from "components/atoms/Image/Image";
import Button from "components/atoms/Button/Button";
import { authService, firebaseInst } from "fbaseInst/fbase";

export const EmailInput = ({ onChange, label, value }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="email">
        {label}
      </label>
      <TextInput
        onChange={onChange}
        value={value}
        className="auth-input"
        name="email"
        required={true}
      />
    </Box>
  );
};

export const PasswordInput = ({ onChange, label, value }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="password">
        {label}
      </label>
      <TextInput
        type="password"
        onChange={onChange}
        value={value}
        className="auth-input"
        name="password"
        required={true}
      />
    </Box>
  );
};

export const SubmitAuth = ({ onClick, label }) => {
  return (
    <InputButton
      className="auth-submit"
      name="auth-submit"
      onClick={onClick}
      label={label}
    />
  );
};

const OAuth = ({ svg, label, className, onClick }) => {
  return (
    <Button
      className={`auth-btn ${className}`}
      label={
        <>
          <Image
            src={svg}
            style={{
              width: "30px",
              marginRight: "15px",
              objectFit: "contain",
            }}
          />
          {label}
        </>
      }
      onClick={onClick}
    />
  );
};

export const KakaoOAuth = ({ label }) => {
  return (
    <OAuth
      svg={kakaoIcon}
      label={`카카오톡 ${label}`}
      className="kakao"
      onClick={() => {
        window.Kakao.Auth.login({
          success: (res) => {
              window.Kakao.Auth.setAccessToken(res.access_token);
              window.Kakao.API.request({
                  url: '/v2/user/me',
                  success: function(res) {
                   console.log(JSON.stringify(res));
                   firebaseInst.auth().signInWithCustomToken(res.id)
                   .then((userCredential) => {
                     console.log(userCredential);
                     window.history.back();
                   })
                   .catch((err) => console.error(err.message));
                  },
                  fail: function(error) {
                      window.alert(
                          'login success, but failed to request user information: ' +
                          JSON.stringify(error)
                      )
                  },
              })
          }, 
          fail: (err) => {
              console.error(err);
          }
      })}
    }
    />
  );
};

export const GoogleOAuth = ({ label }) => {
  return (
    <OAuth
      svg={googleIcon}
      label={`구글 ${label}`}
      className="google"
      onClick={async () => {
        const googleProvider = new firebaseInst.auth.GoogleAuthProvider();
        await authService.signInWithRedirect(googleProvider);
        window.history.back();
      }}
    />
  );
};

export const FacebookOAuth = ({ label }) => {
  return (
    <OAuth
      svg={facebookIcon}
      label={`페이스북 ${label}`}
      className="facebook"
      onClick={async () => {
        const fbProvider = new firebaseInst.auth.FacebookAuthProvider();
        await authService.signInWithRedirect(fbProvider);
        window.history.back();
      }}
    />
  );
};
