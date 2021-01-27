import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./WritingForm.css";
import Box from "components/atoms/Box/Box";
import {
  Dropdown,
  CustomInput,
  Textarea,
  TextInput,
} from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import { firestoreService, authService, storageService } from "fbaseInst/fbase";

const WritingForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [flair, setFlair] = useState("");
  const [html, setHTML] = useState();
  const imageURL = useRef([]);
  const flairOptions = [
    { value: "palace", label: "Palace" },
    { value: "game", label: "Game" },
  ];

  const onTitleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const onAreaInput = (event) => {
    let innerHTML, innerText;
    if (event) {
      event.preventDefault();
      innerHTML = event.target.innerHTML;
      innerText = event.target.innerText;
    } else {
      const textarea = document.querySelector(".text-editor");
      innerHTML = textarea.innerHTML;
      innerText = textarea.innerText;
    }

    setHTML(innerHTML);
    setContent(innerText);
  };

  const onImageButtonClick = () => {
    const uploadInput = document.querySelector(".image-upload");
    uploadInput.click();
  };

  const onImageUpload = (event) => {
    const textarea = document.querySelector(".text-editor");
    const uploadFile = event.target.files[0];
    const fileReader = new FileReader();
    const image = document.createElement("img");
    image.className = "image-in-editor";

    fileReader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      imageURL.current.push(result);

      image.src = result;
      textarea.appendChild(image);

      onAreaInput();
    };
    fileReader.readAsDataURL(uploadFile);
  };

  const onPostSubmit = async () => {
    let storageURLs = [];
    let finalHTML, configuredHTML;
    const domParser = new DOMParser();

    switch (title) {
      case "":
        window.alert("제목을 입력하셔야합니다");
        return;
      default:
        break;
    }

    switch (content) {
      case "":
        if (imageURL.current === []) {
          window.alert("본문을 입력하셔야합니다");
          return;
        } else {
          break;
        }
      default:
        break;
    }

    switch (flair) {
      case "default":
        window.alert("태그를 선택하셔야합니다");
        return;
      default:
        break;
    }

    const lines = content.split(/\r\n|\r|\n/);

    if (imageURL.current.length > 1) {
      for (const url of imageURL.current) {
        const storageRef = storageService
          .ref()
          .child(`communityImages/${uuidv4()}`);
        const response = await storageRef.putString(url, "data_url");
        const downloadURL = await response.ref.getDownloadURL();
        storageURLs.push(downloadURL);
      }

      for (let i = 0; i < storageURLs.length; i++) {
        configuredHTML = domParser.parseFromString(html, "text/html");
        const images = configuredHTML.getElementsByClassName("image-in-editor");
        images[i].src = storageURLs[i];
      }

      finalHTML = configuredHTML.body.innerHTML;
    }

    if (finalHTML === undefined) {
      const parsedHTML = domParser.parseFromString(html, "text/html");
      finalHTML = parsedHTML.body.innerHTML;
    }

    const date = new Date();
    const postDate = `${
      date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;

    const post = {
      title: title,
      htmlContent: finalHTML,
      content: lines,
      postDate: postDate,
      flair: flair,
      image: storageURLs,
      user: authService.currentUser.email,
      uid: authService.currentUser.uid,
      timestamp: new Date().getTime(),
    };

    await firestoreService.collection("posts").add(post);
    window.location.href = "/community";
  };

  useEffect(() => {
    document.addEventListener("copy", function (e) {
      const text_only = document.getSelection().toString();
      const clipdata = e.clipboardData || window.clipboardData;
      clipdata.setData("text/plain", text_only);
      clipdata.setData("text/html", text_only);
      e.preventDefault();
    });
  }, []);

  return (
    <Box
      className="vertical-flex"
      style={{
        padding: "1rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "0.5rem",
        width: "40rem",
        marginTop: "150px",
      }}
    >
      <Box
        className="horizontal-flex"
        style={{ marginBottom: "15px", justifyContent: "space-between" }}
      >
        <Box className="horizontal-flex align-center">
          <TextInput
            className="title-input"
            name="content-title"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onTitleChange}
          />
          {flair !== "" && <Box className={`flair-circle ${flair}`} />}
        </Box>
        <Box className="horizontal-flex">
          <Dropdown
            className="flair-selecter"
            name="flair-selecter"
            options={flairOptions}
            defaultLabel="태그를 선택하세요"
            onChange={(e) => setFlair(e.target.value)}
          />
          <Button
            className="submit-post-btn"
            label="등록하기"
            onClick={onPostSubmit}
          />
        </Box>
      </Box>
      <Box className="horizontal-flex" style={{ marginBottom: "15px" }}>
        <CustomInput
          type="file"
          className="image-upload"
          accept="image/*"
          onChange={onImageUpload}
          style={{ display: "none" }}
        />
        <Button
          className="editor-cntrl insert-image"
          label="이미지"
          onClick={onImageButtonClick}
        />
        <Button className="editor-cntrl bold-btn" label="볼드" />
        <Button className="editor-cntrl italic-btn" label="흘림" />
        <Button className="editor-cntrl underline-btn" label="밑줄" />
        <Button className="editor-cntrl slash-btn" label="줄 긋기" />
      </Box>
      <Textarea className="text-editor" onInput={onAreaInput} />
    </Box>
  );
};

export default WritingForm;
