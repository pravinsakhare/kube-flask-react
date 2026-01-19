# Use official Python image
FROM python:3.12-slim

# Set working directory in the container
WORKDIR /app

# Copy requirements file into container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend app code
COPY app.py .

# Expose the port the app runs on
EXPOSE 5000

# Run the Flask server listening on all interfaces
CMD ["python", "app.py"]
