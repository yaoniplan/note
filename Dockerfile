# Use a smaller Node.js base image (Alpine Linux)
FROM node:16-alpine AS builder

# Install marked globally
RUN npm install -g marked

# Set working directory and copy project files
WORKDIR /app
COPY . /app

# Run the conversion script
RUN chmod +x convertMarkdownToHtml.sh && ./convertMarkdownToHtml.sh

# Use a minimal base image for the final stage
FROM busybox

# Copy the generated HTML file and other assets from the builder stage
COPY --from=builder /app /app

# Expose port 80
EXPOSE 80

# Start a simple web server
CMD ["httpd", "-f", "-p", "80", "-h", "/app"]
