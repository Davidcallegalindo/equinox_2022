from fastapi import FastAPI
from common import sc_web3
from web3 import Web3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/killsepiazz/{token_id}")
async def killit(token_id: str):
    txn = sc_web3.kill_seppiazz(token_id)
    return {"txn": f"{txn}"}
