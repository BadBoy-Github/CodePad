import Editor from "@monaco-editor/react";
import type { Dispatch, SetStateAction } from "react";

interface MainBodyProps {
  isCompilerOpen: boolean;
  setIsCompilerOpen: Dispatch<SetStateAction<boolean>>;
  compileError: string | null;
}

const MainBody = ({
  isCompilerOpen,
  setIsCompilerOpen,
  compileError,
}: MainBodyProps) => {
  const handleEditorDidMount = (editor: unknown, monaco: any) => {
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
  };

  return (
    <div className="bg-teal-200 w-full h-[calc(100vh-200px)] my-5 rounded-xl overflow-hidden flex flex-col relative">
      {/* Compiler Window - appears when down arrow is clicked, grows upwards */}
      {isCompilerOpen && (
        <div className="absolute left-0 right-0 bottom-10 z-10 h-40 bg-gray-900 text-white p-4 overflow-auto border-t border-gray-700">
          <h3 className="font-semibold mb-2 text-red-400">Compiler Output</h3>
          <pre className="text-sm font-mono">
            {`> Compiling...
${compileError || "Compilation completed successfully"}`}
          </pre>
        </div>
      )}

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="//Start writing your code here..."
          onMount={handleEditorDidMount}
        />
      </div>

      {/* Compile Errors Section - displayed in the gap below editor */}
      <div className="h-10 bg-gray-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <span className="font-semibold">Compile Error:</span>
          <span>{compileError || "No errors"}</span>
        </div>
        <button
          onClick={() => setIsCompilerOpen(!isCompilerOpen)}
          className="text-white hover:text-teal-300 transition-colors"
          aria-label={isCompilerOpen ? "Close compiler" : "Open compiler"}
        >
          {isCompilerOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MainBody;
