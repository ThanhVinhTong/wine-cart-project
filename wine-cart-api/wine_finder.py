import torch
import uvicorn
from PIL import Image

from fastapi import FastAPI, UploadFile, File
from starlette.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import torch.nn as nn
import torchvision.transforms as transforms
from torchvision.transforms import ToTensor, Normalize, Resize
from torchvision import models

model_path = 'trained_model/model_resnet50_weight_final.pth'
model_weights = 'ResNet50_Weights.DEFAULT'
number_classes = 75
api_host = "127.0.0.1"
api_port = 8000

label_id = ['7colores', 'abtao', 'albertbichot', 'allegrini', 'anakena',
            'antinori', 'arrogantfrog', 'banfi', 'barton&guestier', 'bertani',
            'bisquertt', 'bottega', 'caliterra', 'calvet', 'candido',
            'cantinedefalco', 'cantinesanmarzano', 'carmen', 'carpineto',
            'casablanca', 'casasdeltoqui', 'champagnelanson',
            'charlesheidsieck', 'chilano', 'collefrisio', 'conchaytoro',
            'conosur', 'domperignon', 'duepalme', 'farnese', 'feudisalentini',
            'freixenet', 'frescobaldi', 'g7', 'gaja', 'gerardbertrand',
            'indomita', 'kidia', 'kingruvaes', 'levignedisammarco',
            'luccarelli', 'luisfelipeedwards', 'mancura', 'migueltorres',
            'montes', 'monteverdi', 'montgras', 'mottura', 'nardelli', 'novas',
            'ochagavia', 'onewine', 'palena', 'ravanal', 'rawen', 'ruffino',
            'santacarolina', 'santarita', 'santasofia', 'scholasarmenti',
            'siegel', 'tagaro', 'taguatagua', 'taittinger', 'tarapaca',
            "tenuteca'botta", 'tommasi', 'undurraga', 'valdivieso',
            'varvaglione1921', 'ventisquero', 'villasandi', 'vinamaipo',
            'yali', 'zenato']

def create_model(model_path):
    model = models.resnet50(weights=model_weights)
    num_features = model.fc.in_features
    model.fc = nn.Linear(num_features, number_classes)
    model.load_state_dict(torch.load(model_path))
    model.eval()

    return model

def preprocess_test_image(image):
    preprocess = transforms.Compose([
        Resize((224, 224)),
        ToTensor(),
        Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    input_image = preprocess(image)
    input_image = input_image.unsqueeze(0)

    return input_image

def predict_producer(model, input_image):
    with torch.no_grad():
        output = model(input_image)

    # Get the predicted class index
    predicted_class = torch.argmax(output).item()

    return label_id[predicted_class]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def classify_producer(uploadFile: UploadFile):
    print(uploadFile)
    image = Image.open(uploadFile.file)

    model = create_model(model_path)
    preprocessed_image = preprocess_test_image(image)
    return {"producer": predict_producer(model, preprocessed_image)}

if __name__ == "__main__":
    uvicorn.run(app, host=api_host, port=api_port)