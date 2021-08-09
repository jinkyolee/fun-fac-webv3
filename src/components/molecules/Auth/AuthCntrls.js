import React from "react";
import "./AuthCntrls.css";
import { kakaoIcon, googleIcon, facebookIcon } from "assets/svg/svgExport";
import Box from "components/atoms/Box/Box";
import { InputButton, TextInput } from "components/atoms/Input/Input";
import Image from "components/atoms/Image/Image";
import Button from "components/atoms/Button/Button";
import { authService, firebaseInst, firestoreService } from "fbaseInst/fbase";
import { uuid } from "uuidv4";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoil/atoms";

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
  const setLoginState = useSetRecoilState(loginState);

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
                    // user exist check 필요함
                    const docRef = firestoreService.collection("KakaoUsers").doc(`kakao${res.id}`);
                    docRef.get().then((doc) => {
                      if (doc.exists) {
                        window.localStorage.setItem("loginState", true);
                        setLoginState(true);
                        window.history.back();
                      } else {
                        docRef.set({
                          id: res.id,
                          nickname: res.properties.nickname
                        }).then(() => {
                          window.localStorage.setItem("loginState", true);
                          setLoginState(true);
                          window.history.back();
                        }).catch(err => console.error(err));
                      }
                    }).catch(err => console.error(err))
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

/*
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
*/