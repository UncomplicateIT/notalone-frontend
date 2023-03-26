import { useRef, useState } from "react";

import { useToast } from "./ui/use-toast";

export const useAudio = (transcribedTextSetter: (text: string) => void) => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [recordingStatus, setRecordingStatus] = useState<
    "inactive" | "recording"
  >("inactive");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const { toast } = useToast();

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        console.log(err);
      }
    } else {
      toast({
        title: "Not Supported!",
        description: "Sorry, your browser doesn't support speech to text!",
      });
    }
  };

  const startRecording = async () => {
    await getMicrophonePermission();

    if (!stream) return;
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: "audio/webm" });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    if (!mediaRecorder.current) return;
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      const file = new File([audioBlob], "input.webm", { type: "audio/webm" });
      await sendAudio(file);
      setAudioChunks([]);
    };
    setRecordingStatus("inactive");
  };

  const sendAudio = async (audioFile: File) => {
    const formData = new FormData();
    formData.append("file", audioFile);
    formData.append("model", "whisper-1");
    formData.append("language", "en");

    const openaiRes = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        headers: {
          Authorization: `Bearer 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`,
        },
        method: "POST",
        body: formData,
      }
    );

    const openaiData: { text: string } = await openaiRes.json();
    transcribedTextSetter(openaiData.text);
  };

  return {
    startRecording,
    stopRecording,
    recordingStatus,
  } as const;
};
