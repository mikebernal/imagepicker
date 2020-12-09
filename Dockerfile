from node:12.2

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

ENV UNSPLASH_CLIENT_ID "qpcqED-8j9HWAwrzwVNBYhjAK6VteN5WlRq9CxY0IaA"

CMD ["npm", "run", "start"]