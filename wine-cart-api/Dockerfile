FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir --index-url https://download.pytorch.org/whl/cpu torch torchvision

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "uvicorn wine_finder:app --host 0.0.0.0 --port ${PORT:-8000}"]