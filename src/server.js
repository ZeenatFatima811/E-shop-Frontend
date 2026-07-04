// export const server= "http://localhost:8080/api/v2";
// export const backend_url="http://localhost:8080/uploads";

const isProduction = import.meta.env.PROD;

export const server = isProduction
  ? "https://e-shop-backend-beta.vercel.app/api/v2"
  : "http://localhost:8080/api/v2";

export const backend_url = isProduction
  ? "https://e-shop-backend-beta.vercel.app"
  : "http://localhost:8080";