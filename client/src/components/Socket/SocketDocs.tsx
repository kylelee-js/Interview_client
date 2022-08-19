import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { reviewApi } from "../../api/reviewApi";
import { useAppSelector } from "../../store";
import { Button } from "../../stories/Button";
import useInterval from "../../hooks/useInterval";
import axios from "axios";

const Wrapper = styled.div``;
export default function SocketDocs() {
  const [socketConnected, setSocketConnected] = useState(false);
  const [contents, setContents] = useState<string>("");
  const [senderSource, setSource] = useState<string>("");
  const [message, setMessage] = useState<any>();
  const QuillRef = useRef<ReactQuill>();
  const userPk = useAppSelector((state) => state.auth.user?.pk);

  const webSocketUrl = `ws://localhost:8000/ws/coedit/3/?token=${(
    "" + axios.defaults.headers.common["Authorization"]
  ).slice(7)}`;
  let ws = useRef<WebSocket | null>(null);

  // 자동저장
  const saveFetch = async () => {
    await reviewApi.updateCoeditContents(39, contents);
  };
  useInterval(saveFetch, 10000, false);

  // 소켓 객체 생성
  useEffect(() => {
    (async () => {
      const res = await reviewApi.getCoedit(39);
      QuillRef.current
        ?.getEditor()
        .clipboard.dangerouslyPasteHTML(res.contents);
    })();

    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      ws.current.onclose = (error) => {
        console.log("disconnect from " + webSocketUrl);
        console.log(error);
      };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
      ws.current.onmessage = (messageEvent) => {
        const data = JSON.parse(messageEvent.data);
        if (data.sender !== userPk && data.delta) {
          QuillRef.current?.getEditor().updateContents(data.delta);
        }
      };
    }

    return () => {
      ws.current?.close();
    };
  }, []);

  // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected && ws.current && senderSource === "user") {
      ws.current.send(JSON.stringify({ sender: userPk, delta: message }));
    }
  }, [message]);

  return (
    <Wrapper>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        defaultValue={contents}
        onChange={(content, delta, source, editor) => {
          // delta.
          console.log(delta);
          setContents(content);
          setMessage(delta);
          setSource(source);
        }}
      />
      <Button
        label="close"
        onClick={() => {
          ws.current?.close();
        }}
      />
    </Wrapper>
  );
}
