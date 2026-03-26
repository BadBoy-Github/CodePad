import Editor from "@monaco-editor/react"


const MainBody = () => {
    const handleEditorDidMount = (editor, monaco) => {
      // Define custom theme
      monaco.editor.defineTheme("myCustomTheme", {
        base: "vs",
        inherit: true,
        rules: [
          { token: "comment", foreground: "009689", fontStyle: "italic" },
          { token: "keyword", foreground: "ff0000", fontStyle: "bold" },
        ],
        colors: {
          "editor.background": "#96f7e4",
          "editor.lineHighlightBackground": "#ffffff50", 
          "editor.lineHighlightBorder": "#009688", 
        },
      });

      // Apply theme
      monaco.editor.setTheme("myCustomTheme");
    }

  return (
    <div className="bg-teal-200 w-full h-[calc(100vh-200px)] my-5 rounded-xl overflow-hidden">
      <Editor
        height="90%"
        defaultLanguage="javascript"
        defaultValue="//Start writing your code here..."
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default MainBody