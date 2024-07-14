import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function Chat() {
    const [question,setQuestion]=useState<string>("");
    const [response,setResponce]=useState<string>("aaaa");

    async function send(){
     ChatAiService.ragChat(question).then(resp=>{
         setResponce(resp)
     });
     console.log("ok");
    }


    return (
        <div className="p-m">
            <h1>Chatbot</h1>
          <div>
              <TextField style={{width:"80%"}}
              onChange={(e=>setQuestion(e.target.value))}
              />
              <Button theme="primary" onClick={send}> Send</Button>
          </div>
            <div>
                      <Markdown>
                {response}

                      </Markdown>
            </div>
        </div>
    );
}

