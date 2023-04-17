import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";




export default function App() {

  const docs = [
    { uri: "/assets/teste.docx", fileType: 'docx'  }, // Remote file
    { uri: "/assets/teste.docx", fileType: 'docx' }, // Local File
  ];
  return (
    
      
       <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
      />
    
  )
}