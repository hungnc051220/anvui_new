# Install dependencies for builder
FROM thanhlcm90/nodejs-builder:18.16.0 AS deps-build
ENV HOME=/home/app
WORKDIR $HOME

COPY package.json package-lock.json $HOME/

RUN npm install

# Install dependencies for runner
FROM thanhlcm90/nodejs-builder:18.16.0 AS deps-prod
ENV HOME=/home/app
WORKDIR $HOME

COPY package.json package-lock.json $HOME/

RUN npm install --omit=dev

# Rebuild the source code only when needed
FROM thanhlcm90/nodejs-builder:18.16.0 AS builder
ENV HOME=/home/app
WORKDIR $HOME

ARG CIRCLE_BUILD_NUM

COPY --from=deps-build $HOME/node_modules $HOME/node_modules
COPY . $HOME/

RUN npm run build

# Production image, copy all the files and run next
FROM thanhlcm90/nodejs-runner:18.16.0 AS runner
ENV HOME=/home/app
WORKDIR $HOME

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder $HOME/public $HOME/public
COPY --from=builder --chown=nextjs:nodejs $HOME/.next $HOME/.next
COPY --from=deps-prod $HOME/node_modules $HOME/node_modules
COPY --from=deps-prod $HOME/package.json $HOME/package.json
COPY next.config.js $HOME/next.config.js

USER nextjs

ENV PORT 3000

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]