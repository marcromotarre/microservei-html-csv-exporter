import React from "react";
import { createRoot } from "react-dom/client";
import { FileUploader } from "react-drag-drop-files";
import parse from "html-react-parser";

const fileTypes = ["html", "htm"];

const App = () => {
  const [file, setFile] = React.useState(null);

  const onTypeError = (e) => {
    console.log("boom", e);
  };

  React.useEffect(() => {}, [file]);

  const handleChange = (file) => {
    //const files = Array.from(e.target.files);
    //console.log("files", files);
    //var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      const xd = parse(reader.result);
      console.log(xd);
      setFile(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  };

  function readFile(event, file) {
    textarea.textContent = file;
  }

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <FileUploader
        handleChange={handleChange}
        name="file"
        onTypeError={onTypeError}
        types={fileTypes}
      />
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
