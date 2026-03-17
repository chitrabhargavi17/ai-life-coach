from fastapi import FastAPI
from pydantic import BaseModel
from ai_engine import generate_response

app = FastAPI()

class Message(BaseModel):
    text: str

@app.post("/chat")
def chat(msg: Message):
    reply = generate_response(msg.text)
    return {"reply": reply}


# ✅ ADD THIS PART (Test API)
@app.get("/")
def home():
    return {"message": "Server is working"}
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)