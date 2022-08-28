import cookie from "cookie";
import { API_URL } from "../../config";

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorised" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    // const { values } = req.body;
    const url = `${API_URL}/${route}/${id}/${identity_id ? identity_id : ""}`;

    const backendRes = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(values),
    });

    const data = await backendRes.json();

    if (backendRes.ok) {
      res.status(200).json({ data });
    } else {
      res.status(403).json({ message: "User forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
