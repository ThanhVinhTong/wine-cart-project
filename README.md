# wine-cart-project

Wine Cart is a demo project with a Next.js frontend and a FastAPI model API for wine-label classification.

## Project Structure

- `wine-cart`: Next.js frontend
- `wine-cart-api`: FastAPI service using PyTorch model weights
- `wine-cart-restore-data`: notebook/scripts for restoring product data

## How to Run Locally

### 1) Start the API

```bash
cd wine-cart-api
pip install -r requirements.txt
uvicorn wine_finder:app --host 0.0.0.0 --port 8000
```

API endpoints:
- `GET /`
- `GET /healthz`
- `POST /` (image classification)

### 2) Start the Frontend

```bash
cd wine-cart
npm install
npm run dev
```

Open `http://localhost:3000`.

## Data Restore (MongoDB)

Use the notebook in `wine-cart-restore-data/restore-script.ipynb` to import `wine_data.xlsx` into MongoDB.

## Demo Deployment

- Deploy `wine-cart-api` to Render as a Web Service.
- Deploy `wine-cart` to Vercel.
- Point frontend API calls to the Render URL.
