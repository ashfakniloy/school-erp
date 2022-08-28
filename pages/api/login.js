import cookie from "cookie";
import { API_URL } from "../../config";

export default login = async (req, res) => {
  if (req.method === "POST") {
    const { values, loginRoute } = req.body;

    // const url = `${API_URL}${loginRoute}/login`;
    const url = `${API_URL}${loginRoute}/login`;

    const backendRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await backendRes.json();

    // if (backendRes.ok) {
    //   res.status(200).json("hello");
    // } else {
    //   res.status(400).json("error");
    // }

    // res.status(200).json(values);

    // console.log(data);

    if (backendRes.ok) {
      // Set Cookie
      res.setHeader("Set-Cookie", [
        cookie.serialize("token", data.token, {
          httpOnly: true,
          secure: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        }),
        "Set-Cookie",
        cookie.serialize("id", data.id, {
          httpOnly: true,
          secure: true,
          // secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        }),
        "Set-Cookie",
        cookie.serialize("user_role", data.user_role, {
          httpOnly: true,
          secure: true,
          // secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        }),
        "Set-Cookie",
        cookie.serialize("identity_id", data.identity_id, {
          httpOnly: true,
          secure: true,
          // secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        }),
      ]);

      res.status(200).json(data);
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
