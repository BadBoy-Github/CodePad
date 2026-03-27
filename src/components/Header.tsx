import { FaPlay } from "react-icons/fa";

interface HeaderProps {
  onRun: () => void;
  language: string;
  onLanguageChange: (language: string) => void;
}

const Header = ({ onRun, language, onLanguageChange }: HeaderProps) => {
  return (
    <div className=" w-full h-20 flex items-center justify-between">
      <div className="bg-teal-200 h-full flex items-center justify-between p-4 rounded-xl">
        <div className="w-14 h-14 bg-teal-100 rounded-full flex justify-center items-center">
          <img src="/logo.png" alt="CodePad" className="p-1" />
        </div>
        <div className="ml-6 flex flex-col items-start">
          <h1 className=" font-bold text-teal-600 text-2xl">CodePad</h1>
          <p className="text-teal-800 text-sm">code like pro</p>
        </div>
      </div>
      <div className="bg-teal-200 h-full rounded-xl flex items-center justify-center px-4 gap-4">
        {/* Language Dropdown */}
        <label className="flex items-center gap-2">
          <span className="text-teal-700 text-sm font-medium">Lang:</span>
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="px-3 py-2 bg-teal-50 text-teal-700 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium cursor-pointer"
            aria-label="Select programming language"
          >
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </label>
        {/* Run Button */}
        <button
          type="button"
          onClick={onRun}
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium flex items-center gap-2 cursor-pointer"
        >
          <FaPlay className="text-sm" />
          <span>Run</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
