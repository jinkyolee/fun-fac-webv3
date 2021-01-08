import React, { useRef, useState } from "react";
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
import { firestoreService, authService, storageService } from "firebase/fbase";

const WritingForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [html, setHTML] = useState();
  const [flair, setFlair] = useState("");
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
    let innerText, innerHTML;
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

      const prevHTML = textarea.innerHTML;
      textarea.innerHTML = `${prevHTML}${image.outerHTML}`;

      onAreaInput();
    };
    fileReader.readAsDataURL(uploadFile);
  };

  const onPostSubmit = async () => {
    let storageURL = null;

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
      case "":
        window.alert("태그를 선택하셔야합니다");
        return;
      default:
        break;
    }

    if (imageURL.current !== []) {
      for (const url of imageURL.current) {
        console.log(url);
        const storageRef = storageService
          .ref()
          .child(`communityImages/${uuidv4()}`);
        const response = await storageRef.putString(url, "data_url");
        storageURL = await response.ref.getDownloadURL();
      }
    }

    const post = {
      title: title,
      content: content,
      htmlContent: html,
      postDate: new Date().toDateString(),
      flair: flair,
      image: storageURL,
      user: authService.currentUser.email,
      uid: authService.currentUser.uid,
    };

    await firestoreService.collection("posts").add(post);
    window.location.href = "/community";
  };

  return (
    <Box
      className="vertical-flex"
      style={{
        padding: "1rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "0.5rem",
        width: "40rem",
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
