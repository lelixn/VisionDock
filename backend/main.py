from fastapi import FastAPI, UploadFile, File
from PIL import Image
import io

app = FastAPI()

@app.get("/")
def index():
    return {"status": "Backend Running"}

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    content = await file.read()
    image = Image.open(io.BytesIO(content))

    return {
        "filename": file.filename,
        "width": image.size[0],
        "height": image.size[1]
    }
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)