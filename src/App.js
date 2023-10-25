import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App =()=> {
    const [textCopy, setTextCopy] = useState();
    const [isCopied, setIsCopied] = useClipboard(textCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <div className="container">

            <h2>Speech to Text Converter</h2><br/>
            <p>A React hook that converts speech from the microphone to text.</p>

            <div className="main-content" onClick={()=> setTextCopy(transcript)}>
                {transcript}
            </div>

            <div className="btn-style">
                <button onClick={setIsCopied}>{ isCopied ? 'Copied!' : 'Copy to clipboard' }</button>
                <button onClick={startListening}>Start Listening</button>
                <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            </div>

        </div>
    );
};
export default App;