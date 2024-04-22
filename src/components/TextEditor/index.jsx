import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ font: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

function TextEditor() {
  const [value, setValue] = useState("");

  useEffect(() => {
    // Retrieve the saved text from local storage when component mounts
    const savedText = localStorage.getItem("textEditorValue");
    if (savedText) {
      setValue(savedText);
    }
  }, []);

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    // Save the text to local storage on every change
    localStorage.setItem("textEditorValue", content);
  };

  return (
    <>
      <h1 className="heading">Text Editor</h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        placeholder="Type something..."
        className="text-editor"
      />
    </>
  );
}
export default TextEditor;
