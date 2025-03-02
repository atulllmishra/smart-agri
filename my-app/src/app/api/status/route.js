import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req) {
    try {
      const data = getDataFromToken(req);
      return Response.json({ isLoggedIn: !!data });
    } catch (error) {
      return Response.json({ isLoggedIn: false }, { status: 401 });
    }
  }