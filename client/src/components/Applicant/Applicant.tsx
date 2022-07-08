import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function Applicant() {
  const docs = [
    { uri: require("/sample.docx"), fileType: "docx" },
    // { uri: require("/sample.pdf") },
    // { uri: require("/danbi.pdf") },
    // { uri: require("/sample.numbers") },
  ];

  return (
    <>
      <h1>Sample react-doc-viewer</h1>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
        }}
        style={{ height: 500 }}
      />
    </>
  );
}
