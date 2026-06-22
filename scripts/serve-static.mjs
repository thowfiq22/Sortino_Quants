import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, isAbsolute, join, normalize, relative, resolve } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolveRequestPath(requestUrl = "/") {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  const relativePath = pathname.endsWith("/")
    ? `${pathname}index.html`
    : extname(pathname)
      ? pathname
      : `${pathname}/index.html`;
  const filePath = normalize(join(root, relativePath));

  const relativePathFromRoot = relative(root, filePath);
  return relativePathFromRoot.startsWith("..") || isAbsolute(relativePathFromRoot)
    ? null
    : filePath;
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

createServer(async (request, response) => {
  let filePath = resolveRequestPath(request.url);

  try {
    if (!filePath || !(await isFile(filePath))) {
      filePath = join(root, "404.html");
      response.statusCode = 404;
    }

    response.setHeader(
      "Content-Type",
      contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    );
    createReadStream(filePath).pipe(response);
  } catch {
    response.statusCode = 500;
    response.end("Static export is unavailable. Run npm run build first.");
  }
}).listen(port, () => {
  console.log(`Serving static export at http://localhost:${port}`);
});
