from fastapi import FastAPI, Depends
from .auth import verify_token

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

# Ex of protected route
@app.get("/protected")
def protected_route(user=Depends(verify_token)):
    return {"message": f"Hello, {user['uid']}"}
