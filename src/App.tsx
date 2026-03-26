import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { useState } from "react";

const App = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [runtimeError, setRuntimeError] = useState<string | null>(null);

  const handleCompile = () => {
    // Simulate compile - show sample error
    setCompileError("Syntax error in code");
    setIsCompilerOpen(true);
  };

  const handleExecute = () => {
    // Simulate execute - show sample error
    setRuntimeError("Runtime error occurred");
    setIsTerminalOpen(true);
  };

  return (
    <div className=" p-10 bg-teal-100 w-full h-screen flex flex-col">
      <Header onCompile={handleCompile} onExecute={handleExecute} />
      <MainBody
        isCompilerOpen={isCompilerOpen}
        setIsCompilerOpen={setIsCompilerOpen}
        compileError={compileError}
      />
      <Footer
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
        runtimeError={runtimeError}
      />
    </div>
  );
};

export default App;
